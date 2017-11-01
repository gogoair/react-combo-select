import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComboSelectItem from './ComboSelectItem.jsx';

// TODO: move to this.specialClass
let specialClass = 'combo-select-body-scroll';

export default class ComboSelect extends Component {

	constructor(props) {
		super(props);

		this.focus = -1;
		this.scroll = 0;
		this.defaultText = props.defaultText ? props.defaultText : (props.text ? props.text : 'Select');
		this.open = false;
		this.icon = props.icon ? props.icon : 'fa fa-chevron-circle-down';
		this.map = this.props.map && this.props.map.text && this.props.map.value ? this.props.map : {
			value: 'value',
			text: 'text'
		};
		this.borderActive = this.props.borderActive ? this.props.borderActive : '#40b4e5';

		this.iconSelectActive = props.iconSelectActive !== false || props.iconSelectActive !== 'off' ? props.iconSelectActive : true;
		this.iconSelectInactive = props.iconSelectInactive !== false || props.iconSelectInactive !== 'off' ? props.iconSelectInactive : true;

		this.globalKeyDown = this.globalKeyDown.bind(this);
		this.globalMouseClick = this.globalMouseClick.bind(this);
		this.globalWheel = this.globalWheel.bind(this);
		this.requiredSelectKeydown = this.requiredSelectKeydown.bind(this);
		this.selectFocus = this.selectFocus.bind(this);
		this.deSelectFocus = this.deSelectFocus.bind(this);

		this.searchTimeout = null;

		this.mappedData = this.sortData(this.mapAllData(props.data));
		let selectedItems = this.findSelectedItems(this.mappedData, props.text, props.value);

		this.state = {
			data: this.mappedData,
			text: selectedItems.text,
			value: selectedItems.value,
			type: props.type && (props.type == 'select' || props.type == 'multiselect') ? props.type : 'select',
			selected: -1,
			search: this.props.search && (this.props.search == 'on' || this.props.search == 'smart' || this.props.search == 'off') ? this.props.search : 'off'
		}
	}

	componentDidMount() {

		/**
		 * Binding events
		 */
		window.addEventListener('keydown', this.globalKeyDown);
		window.addEventListener('click', this.globalMouseClick);
		window.addEventListener('touchstart', this.globalMouseClick);
		window.addEventListener('wheel', this.globalWheel);
		this.refs.select.addEventListener('keydown', this.requiredSelectKeydown);
		this.refs.select.addEventListener('focus', this.selectFocus);
		this.refs.select.addEventListener('focusout', this.deSelectFocus);

		/**
		 * Inner scroll, scroll to top
		 * @type {number}
		 */
		this.refs.comboSelect.getElementsByClassName(specialClass).scrollTop = 0;
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.globalKeyDown);
		window.removeEventListener('click', this.globalMouseClick);
		window.removeEventListener('touchstart', this.globalMouseClick);
		window.removeEventListener('wheel', this.globalWheel);
		this.refs.select.removeEventListener('keydown', this.requiredSelectKeydown);
		this.refs.select.addEventListener('focus', this.selectFocus);
		this.refs.select.addEventListener('focusout', this.deSelectFocus);
	}

	componentWillReceiveProps(newProps) {
		const dataChanged = newProps.data !== this.props.data;
		const stateUpdate = {};
		let changed = false;

		if (dataChanged) {
			this.mappedData = this.sortData(this.mapAllData(newProps.data));
			stateUpdate.data = this.mappedData;
			changed = true;
		}

		if (dataChanged || newProps.text !== this.props.text || newProps.value !== this.props.value) {
			let selectedItems = this.findSelectedItems(this.mappedData, newProps.text, newProps.value);
			stateUpdate.text = selectedItems.text;
			stateUpdate.value = selectedItems.value;
			changed = true;
		}

		if (changed)
			this.setState(stateUpdate);
	}

	/**
	 * Focus event for select
	 */
	selectFocus() {
		this.borderColor = this.refs.head.style.borderColor;
		this.refs.head.style.borderColor = this.borderActive;
	}

	/**
	 * Focus-out event for select
	 */
	deSelectFocus() {
		if (this.refs && this.refs.head) {
			this.refs.head.style.borderColor = this.borderColor;
		}
	}

	/**
	 * Global wheel event
	 * @param event
	 */
	globalWheel(event) {

		if (this.open) {

			var target = event.target;
			// Safety fuse
			let i = 0;
			var outside = true;

			let data = this.state.data.length;
			let elementHeight = this.refs.comboSelect.getElementsByClassName('combo-select-item')[0].clientHeight;
			let menuHeight = this.refs.scroll.clientHeight;

			let potentialScrollBottom = this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop + menuHeight + event.deltaY;
			let maximumScroll = data * elementHeight;

			if (potentialScrollBottom <= maximumScroll && this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop + event.deltaY > 0) {

				while (this.checkParentElement(target) && i < 10) {
					target = target.parentElement;
					i++;

					if (target.innerHTML == this.refs.scroll.innerHTML) {
						outside = false;
					}
				}

				if (outside) {
					event.stopPropagation();
					event.preventDefault();
				}

			} else if (this.refs.comboSelect.getElementsByClassName(specialClass)[0].scrollTop + event.deltaY <= 0) {

				this.refs.scroll.scrollTop = 0;
				event.stopPropagation();
				event.preventDefault();

			} else {

				this.refs.scroll.scrollTop = 9999999;
				event.stopPropagation();
				event.preventDefault();

			}


		}
	}

	/**
	 * Global mouse event, here is also serves to control opening/closing menu and picking item on select/multiselect
	 * @param event
	 */
	globalMouseClick(event) {

		if (event) {

			var target = event.target;

			// Safety fuse
			let i = 0;
			let hideMenu = true;

			while (this.checkParentElement(target) && i < 10) {
				target = target.parentElement;
				i++;
				if (target.innerHTML == this.refs.comboSelect.innerHTML) {
					hideMenu = false;
				}
			}

			if (this.open && hideMenu) {

				if (target.className && typeof target.className == 'string' && target.className.indexOf('combo-select-item') > -1) {
					// nothing
				} else {
					event.preventDefault();
					this.toggleMenu();
				}
			}
		}
	}

	/**
	 * Check if there is an parent element
	 * @param target
	 * @returns {boolean}
	 */
	checkParentElement(target) {
		if (target.parentElement != null) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Generate head (texts)
	 * @returns {XML|*}
	 * @private
	 */
	_generateHead() {

		let head;
		let stateText = this.state.text;

		if (typeof stateText == 'object') {
			stateText.length > 3 ? stateText = stateText.length + ' selected' :
				(stateText = stateText.slice(), stateText = stateText.join(", "));
		}

		let options = this.state.data.map(function (item, i) {
			return <option key={i} value={item.text}>{item.text}</option>
		});

		var { data, type, onChange, search, value, onToggle, text, map, sort, iconSelectInactive, iconSelectActive, defaultText, scrollHeight, scrollMaxHeight, preferredDirection, ...other } = this.props;

		if (this.state.value === 0 || (this.state.value && ((this.state.value instanceof Array && this.state.value.length > 0) || !(this.state.value instanceof Array)))) {

			head = (<div onClick={() => this.toggleMenu()}>
				<div className={(this.props.disabled ? " disabled " : "") + "combo-select-head"} ref="head">
					{stateText ? stateText : this.defaultText}<i className={this.icon}></i>
				</div>
				<select {...other} className="combo-select-required-select" ref="select">
					{options}
				</select>
			</div>);

		} else {

			head = (<div onClick={() => this.toggleMenu()}>
				<div className={(this.props.disabled ? " disabled " : "") + "combo-select-head"} ref="head">
					{stateText ? stateText : this.defaultText}<i className={this.icon}></i>
				</div>
				<select {...other} className="combo-select-required-select" ref="select">
					<option value=""></option>
				</select>
			</div>);

		}

		return head;
	}

	/**
	 * Generate body (menu)
	 * @returns {XML}
	 * @private
	 */
	_generateBody() {
		let style = this.calculateMetric();
		let body = '';

		if (Array.isArray(this.state.data)) {

			body = this.state.data.map(function (item, i) {

				let focused = false;
				(this.focus == i) ? focused = true : '';

				return (
					<div key={i}>
						<ComboSelectItem item={item} selected={this.findSelectedByKey(item, this.state.text, 'text')}
							index={i}
							focused={focused}
							type={this.state.type}
							selectItem={this.selectItem.bind(this)}
							focusItem={this.focusItem.bind(this)}
							iconSelectActive={this.iconSelectActive}
							iconSelectInactive={this.iconSelectInactive}
						/>
					</div>
				);
			}.bind(this));
		}

		let search = this.ifSearch(style) ?
			(<input type="text" style={style ? style.search : {}}
				ref="searchInput"
				className="search-input"
				onKeyDown={(event) => {
                    if (event.keyCode == 32) {
                        event.stopPropagation();
                    } else if (this.focus < 0 && event.keyCode == 13) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }}
				onChange={() => {
                    if (this.searchTimeout) {
                        clearTimeout(this.searchTimeout);
                    }

                    this.searchTimeout = setTimeout(this.filterBySearch.bind(this), 200);
                }}
			/>)
			: '';

		return (
			<div>
				{search}
				<div className="combo-select-body" ref="body" style={style ? style.body : {}}>
					<div style={style ? style.scroll : {}} className="combo-select-body-scroll" ref="scroll">
						{body && body.length > 0 ? body : (
							<div className="combo-select-item">There are no eligible items</div>)}
					</div>
				</div>
			</div>
		);
	}

	/**
	 * Connect text and value if component received only one of them
	 * @param data
	 * @param text
	 * @param value
	 */
	findSelectedItems(data, text, value) {

		let selectedItems = {
			text: [],
			value: []
		};

		data.forEach(function (item) {
			if (this.findSelectedItem(item, text, value)) {
				selectedItems.text.push(item.text);
				selectedItems.value.push(item.value);
			}
		}.bind(this));

		return selectedItems;
	}

	/**
	 * Find selected item comparing text or value with item
	 * @param item
	 * @param text
	 * @param value
	 * @returns {boolean}
	 */
	findSelectedItem(item, text, value) {

		let match = false;

		if (text) {
			if (this.findSelectedByKey(item, text, 'text')) {
				match = true;
			}
		} else if (value) {
			if (this.findSelectedByKey(item, value, 'value')) {
				match = true;
			}
		}

		return match;
	}

	/**
	 * Check if item is selected
	 * @param item
	 * @param keyData
	 * @param key
	 * @returns {boolean}
	 */
	findSelectedByKey(item, keyData, key) {

		let selected;
		if (Array.isArray(keyData)) {
			for (let i in keyData) {
				if (item[key] == keyData[i]) {
					selected = true;
				}
			}
		} else {
			if (typeof keyData == 'object') {
				selected = true;
				for (let itemKey in keyData)
					if (item[key][itemKey] !== keyData[itemKey]) {
						selected = false;
						break;
					}
			}
			else if (item[key] == keyData) {
				selected = true;
			}
		}

		return selected;
	}

	/**
	 * Should search be shown or not?
	 * @param style
	 * @returns {boolean|*|NodeList}
	 */
	ifSearch(style) {
		return this.state.search == 'on' ||
			(this.state.search == 'smart' &&
				(!style || style.scroll.height != 'auto' ||
					(this.refs.searchInput && this.refs.searchInput.value)
				)
			);
	}

	/**
	 * Alphanumerical sorting logic
	 * @param ar
	 * @returns {*}
	 */
	alphanumSort(ar) {
		for (var z = 0, t; t = ar[z]; z++) {
			ar[z] = [];
			var x = 0, y = -1, n = 0, i, j;

			while (i = (j = t.text.toString().charAt(x++)).charCodeAt(0)) {
				var m = (i == 46 || (i >= 48 && i <= 57));
				if (m !== n) {
					ar[z][++y] = "";
					n = m;
				}
				ar[z][y] += j;
			}

			let text = ar[z];
			ar[z] = {
				text: text,
				value: t.value
			};
		}

		ar.sort(function (a, b) {
			a = a.text;
			b = b.text;
			for (var x = 0, aa, bb; (aa = a[x]) && (bb = b[x]); x++) {
				if (aa !== bb) {
					var c = Number(aa), d = Number(bb);
					if (c == aa && d == bb) {
						return c - d;
					} else return (aa > bb) ? 1 : -1;
				}
			}
			return a.length - b.length;
		});

		for (let y = 0; y < ar.length; y++)
			ar[y].text = ar[y].text.join("");

		return ar;
	}

	/**
	 * Sort data alphabetically or numerically
	 * @param data
	 * @returns {*}
	 */
	sortData(data) {
		if (this.props.sort === false || this.props.sort === 'off') {
			return data;
		}

		let sortedData = [];

		if (data && data[0]) {

			let sort = this.props.sort ? this.props.sort : 'alphanum';

			if (sort == 'string') {

				sortedData = data.sort(function (a, b) {
					return (a.text.toString() > b.text.toString()) ? 1 : ((b.text.toString() > a.text.toString()) ? -1 : 0);
				});

			} else if (sort == 'number') {

				sortedData = data.sort(function (a, b) {
					return a.text - b.text;
				});

			} else {

				sortedData = this.alphanumSort(data);

			}
		}

		this.focus = -1;
		return sortedData;
	}

	/**
	 * Filter data to match searched term
	 */
	filterBySearch() {
		if (!this.refs.searchInput)
			return;

		let filter = this.refs.searchInput.value.toLowerCase();
		let data = [];

		for (let i in this.mappedData) {

			if (this.mappedData[i].text.toString().toLowerCase().indexOf(filter) > -1) {
				data.push(this.mappedData[i]);
			}

		}

		this.setState({
			data: data
		});
	}

	/**
	 * On any keydown, but tab, that is pressed on inner required select disable it and open custom select
	 * @param event
	 */
	requiredSelectKeydown(event) {

		// space, up, down
		if (!this.props.disabled && !this.open && (event.keyCode == 13 || event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 32)) {

			event.preventDefault();
			event.stopPropagation();
			this.toggleMenu();

		}
	}

	/**
	 * Open/close menu, with overflow hidden
	 */
	toggleMenu() {

		if (!this.props.disabled) {

			let comboSelect = this.refs.comboSelect;

			this.open = !this.open;

			this.refs.holder.style.display = this.open ? 'block' : 'none';

			if (this.open) {

				let style = this.calculateMetric();

				// Search
				if (this.ifSearch(style) && comboSelect && this.refs.searchInput) {
					this.refs.searchInput.style.display = 'block';
					this.refs.searchInput.style.top = style.search.top ? style.search.top + 'px' : '';
					this.refs.searchInput.style.bottom = style.search.bottom ? style.search.bottom + 'px' : '';
				} else if (comboSelect && this.refs.searchInput) {
					this.refs.searchInput.style.display = 'none';
				}

				// Body
				if (comboSelect && this.refs.body) {
					this.refs.body.style.top = style.body.top ? style.body.top + 'px' : '';
					this.refs.body.style.bottom = style.body.bottom ? style.body.bottom + 'px' : '';
					this.refs.body.style.paddingTop = style.body.paddingTop ? style.body.paddingTop + 'px' : '';
					this.refs.body.style.paddingBottom = style.body.paddingBottom ? style.body.paddingBottom + 'px' : '';
				}

				// Search focus
				if (this.refs.searchInput) {
					this.refs.searchInput.focus();
				}

				//Scroll
				if (this.refs.scroll) {
					this.refs.scroll.style.height = style.scroll.height + 'px';
					this.refs.scroll.style.maxHeight = style.scroll.maxHeight + 'px';
					this.refs.scroll.style.overflowY = style.scroll.overflowY;
				}

				// Is search there?
				if (style && style.search && style.search.top != 'auto' && !comboSelect.getElementsByClassName('search-input')[0]) {
					this.forceUpdate();
				}

			} else {

				if (navigator.userAgent.match(/Tablet|iPad/i)) {
					// do tablet stuff
				} else if (navigator.userAgent.match(/IEMobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Mobile Safari|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
					// do mobile stuff
				} else {
					this.refs.select.focus();
				}

			}

			// Propagate toggle event with data with to outside event
			if (this.props.onToggle) {
				this.props.onToggle(this.open, this.state.value, this.state.text);
			}

		}
	}

	/**
	 * Push state for focus on mouseover/keyboard control
	 * @param focus
	 */
	focusItem(focus) {
		if (this.state.data && this.state.data.length > 0) {

			const items = this.refs.comboSelect.getElementsByClassName('combo-select-item');

			if (items && this.focus >= 0 && items[this.focus]) {
				items[this.focus].style.backgroundColor = '';
			}

			items[focus].style.backgroundColor = '#f7f7f7';

			this.focus = focus;
		}
	}

	/**
	 * Calculates metric for opening menu
	 * @returns {{}}
	 * TODO: currently opens menu "maximum as possible", make this open so that you cannot see next element
	 */
	calculateMetric() {

		if (this.refs.comboSelect) {

			let comboSelect = this.refs.comboSelect;
			let viewportOffset = comboSelect.getBoundingClientRect();
			let top = viewportOffset.top;
			//TODO: elementHeight is accurate only if height of an element is same as height of header
			let elementHeight = comboSelect.clientHeight;
			let windowHeight = window.innerHeight;
			let bottom = windowHeight - (top + elementHeight);
			let overflow = true;
			let maxHeight = null;

			let direction, height;

			if (bottom + 100 > top) {
				direction = 'down';
				height = bottom - 15 - 77;
			} else {
				direction = 'top';
				height = top - 15 - 77;
			}

			if (elementHeight * this.state.data.length < height) {
				height = 'auto';
				overflow = false;
			}

			if ((this.props.scrollHeight || this.props.scrollMaxHeight) && this.props.preferredDirection) {
				direction = this.props.preferredDirection;
				height = this.props.scrollHeight || 'auto';
				maxHeight = this.props.scrollMaxHeight || null;
			}

			return this.openMenu(direction, height, maxHeight, overflow, elementHeight);
		}
	}

	/**
	 * It creates styles for opening menu
	 * @param direction
	 * @param height
	 * @param overflow
	 * @param elementHeight
	 * @returns {{}}
	 */
	openMenu(direction, height, maxHeight, overflow, elementHeight) {

		let style = {
			body: {},
			scroll: {},
			search: {},
			controls: {}
		};

		style.scroll.height = height;
		style.scroll.maxHeight = maxHeight;
		style.scroll.overflowY = overflow ? 'scroll' : 'visible';

		if (direction == 'top') {

			style.body.bottom = 41;
			style.body.paddingBottom = this.ifSearch(style) ? 45 : 0;
			style.body.paddingTop = this.props.controls && this.state.type == 'multiselect' ? 45 : 0;

			style.search.bottom = 46;

			style.controls.top = -(height + style.body.paddingTop + style.body.paddingBottom);

		} else {

			let elasticHeight = height && height != 'auto' ? height : elementHeight * (this.state.data.length > 0 ? this.state.data.length : 1);

			style.body.top = 41;
			style.body.paddingTop = this.ifSearch(style) ? 45 : 0;
			style.body.paddingBottom = this.props.controls && this.state.type == 'multiselect' ? 45 : 0;

			style.search.top = 48;

			style.controls.top = elasticHeight + style.body.paddingTop + style.body.paddingBottom;

		}

		return style;

	}

	/**
	 * Logic for selecting item(s) in select vs multiselect
	 * @param item
	 */
	selectItem(item) {

		let text = item.text;
		let value = item.value;

		if (this.state.type == 'select') {

			this.setState({text: text, value: value}, () => {
				this.toggleMenu();
				this.props.onChange ? this.props.onChange(value, text) : '';
			});

		} else {

			if (typeof this.state.text == 'string') {

				this.setState({
					text: [text],
					value: [value]
				}, () => {
					this.props.onChange ? this.props.onChange([value], text) : '';
				});

			} else {

				let splice;

				this.state.text.map(function (textItem, i) {
					if (text == textItem) {
						splice = i;
					}
				});

				let texts = this.state.text.slice();
				let values = this.state.value.slice();

				if (splice || splice == 0) {
					texts.splice(splice, 1);
					values.splice(splice, 1);
				} else {
					texts.push(text);
					values.push(value);
				}

				this.setState({
					text: texts,
					value: values
				}, () => {
					this.props.onChange ? this.props.onChange(values, texts) : '';
				});

			}
		}

        if (this.refs.select) this.refs.select.value = text;
    }

	/**
	 * Control scrolling within open menu with arrowZ
	 */
	controlScrolling() {

		const comboSelectBody = this.refs.body;
		const focusedItem = this.refs.comboSelect.getElementsByClassName('combo-select-item')[this.focus];
		const specialClassElement = this.refs.comboSelect.getElementsByClassName(specialClass)[0];

		let paddingTop = parseInt(comboSelectBody.style.paddingTop);
		let paddingBottom = parseInt(comboSelectBody.style.paddingBottom);

		paddingTop = paddingTop > -1 ? paddingTop : 0;
		paddingBottom = paddingBottom > -1 ? paddingBottom : 0;

		let windowHeight = comboSelectBody.clientHeight - paddingTop - paddingBottom;
		let elementHeight = focusedItem.clientHeight;
		let elementOffsetTop = focusedItem.offsetTop - paddingTop;
		let elementCountPerWindow = Math.floor(windowHeight / elementHeight);
		let scrollTop = specialClassElement.scrollTop;

		if (elementOffsetTop > windowHeight + scrollTop - elementHeight) {
			specialClassElement.scrollTop = elementOffsetTop - (elementCountPerWindow - 1) * elementHeight;
		} else if (elementOffsetTop < scrollTop) {
			specialClassElement.scrollTop = elementOffsetTop;
		} else if (this.focus == 0) {
			specialClassElement.scrollTop = 0;
		}
	}

	/**
	 * Event for eny keypress once menu is open
	 * @param event
	 */
	globalKeyDown(event) {
		if (this.open) {

			switch (event.keyCode) {
				case 38:
					// Up
					event.preventDefault();
					if (this.state.data && this.state.data.length > 0) {

						if (this.focus > this.state.data.length) {
							this.focusItem(0);
						} else {
							this.focusItem(this.focus < 1 ? this.state.data.length - 1 : this.focus - 1);
						}
						this.controlScrolling();
					}
					break;
				case 40:
					// Down
					event.preventDefault();
					if (this.state.data && this.state.data.length > 0) {

						if (this.focus > this.state.data.length) {
							this.focusItem(0);
						} else {
							this.focusItem(this.focus == this.state.data.length - 1 ? this.focus = 0 : this.focus + 1);
						}
						this.controlScrolling();
					}
					break;
				case 37:
					// Left
					event.preventDefault();
					break;
				case 39:
					// Right
					event.preventDefault();
					break;
				case 32:
					// Space
					event.preventDefault();
					this.selectItem(this.state.data[this.focus]);
					break;
				case 13:
					// Enter
					event.preventDefault();
					if (this.state.data && this.state.data.length > 0 && this.focus > -1) {
						this.selectItem(this.state.data[this.focus]);
					}
					break;
				case 9:
					// Tab
					event.preventDefault();
					break;
				case 27:
					// Escape
					event.preventDefault();
					this.toggleMenu();
					break;
			}
		}
	}

	mapAllData(data) {

		let mappedData = [];

		if (data)
			mappedData = data.map(function (item) {
				return this.mapSingleData(item);
			}.bind(this));

		return mappedData;
	}

	mapSingleData(item) {

		let text = '';
		let value = '';

		if (typeof item == 'object') {

			if (typeof this.map.text == 'function') {

				text = this.map.text(item);
				if (typeof this.map.value == 'function') {
					value = this.map.value(item);
				} else {
					value = item[this.map.value];
				}

			} else if (typeof this.map.value == 'function') {

				value = this.map.value(item);
				if (typeof this.map.text == 'function') {
					text = this.map.text(item);
				} else {
					text = item[this.map.text];
				}

			} else if (this.map.value === true) {

				text = item[this.map.text];
				value = item;

			} else {

				text = item[this.map.text];
				value = item[this.map.value];

			}

		} else {

			text = item;
			value = item;

		}

		return {text: text, value: value}
	}

	render() {

		let head = this._generateHead();
		let body = this._generateBody();

		return (
			<div ref="comboSelect" className="combo-select">
				{head}
				<div style={{ display: 'none' }} className="combo-select-body-holder" ref="holder">{body}</div>
			</div>
		);
	}
}

ComboSelect
	.propTypes = {
	text: PropTypes.any,
	search: PropTypes.string,
	type: PropTypes.string,
	icon: PropTypes.string,
	iconSelectInactive: PropTypes.any,
	iconSelectActive: PropTypes.any,
	data: PropTypes.array.isRequired,
	onChange: PropTypes.func,
	map: PropTypes.object,
	sort: PropTypes.string,
	controls: PropTypes.bool,
	value: PropTypes.any,
	disabled: PropTypes.bool,
	onToggle: PropTypes.func,
	borderActive: PropTypes.string,
	defaultText: PropTypes.any,
	scrollHeight: PropTypes.number,
	scrollMaxHeight: PropTypes.number,
	preferredDirection: PropTypes.oneOf(['top', 'down'])
};
