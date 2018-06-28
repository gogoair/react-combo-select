import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ComboSelectItem from './ComboSelectItem';
import ComboSelectGroup from './ComboSelectGroup';
import { transformDataAttributes, throttle } from '../helpers';
import DropDownIcon from './svg/DropDownIcon';

// TODO: move to this.specialClass
let specialClass = 'combo-select-body-scroll';

export default class ComboSelect extends Component {
	constructor(props) {
		super(props);

		this.focus = -1;
		this.scroll = 0;
		this.defaultText = props.text ? props.text : props.defaultText ? props.defaultText : 'Select';
		this.open = false;
		this.searchTimeout = null;
		this.useCustomIcon = props.icon && props.icon !== true && props.icon !== 'on';
		this.icon = props.icon ? props.icon : 'fa fa-chevron-circle-down';
		this.map =
			this.props.map && this.props.map.text && this.props.map.value
				? this.props.map
				: {
						value: 'value',
						text: 'text',
				  };
		this.borderActive = this.props.borderActive ? this.props.borderActive : '#40b4e5';
		this.iconSelectActive =
			props.iconSelectActive === false || (props.iconSelectActive === 'off' ? true : props.iconSelectActive);
		this.iconSelectInactive =
			props.iconSelectInactive === false || (props.iconSelectInactive === 'off' ? true : props.iconSelectInactive);

		this.mappedData = this.sortData(this.mapAllData(props.data));
		this.selectedItems = this.findSelectedItems(this.mappedData, props.text, props.value);

		// Refs
		this.headRef = null;
		this.selectRef = null;
		this.searchInputRef = null;
		this.comboSelectRef = null;
		this.bodyRef = null;
		this.scrollRef = null;
		this.holderRef = null;

		this.state = {
			data: this.mappedData,
			text: this.selectedItems.text,
			value: this.selectedItems.value,
			type: props.type && (props.type == 'select' || props.type == 'multiselect') ? props.type : 'select',
			selected: -1,
			search:
				this.props.search && (this.props.search === 'on' || this.props.search == 'smart' || this.props.search === 'off')
					? this.props.search
					: 'off',
		};

		this.processDataAttributes();
	}

	componentDidMount() {
		/**
		 * Binding events
		 */
		window.addEventListener('keydown', this.globalKeyDown);
		window.addEventListener('click', this.globalMouseClick);
		window.addEventListener('touchstart', this.globalMouseClick);
		window.addEventListener('wheel', this.globalWheel);
		this.selectRef.addEventListener('keydown', this.requiredSelectKeydown);
		this.selectRef.addEventListener('focus', this.selectFocus);
		this.selectRef.addEventListener('focusout', this.deSelectFocus);

		/**
		 * Inner scroll, scroll to top
		 * @type {number}
		 */
		this.comboSelectRef.getElementsByClassName(specialClass).scrollTop = 0;
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.globalKeyDown);
		window.removeEventListener('click', this.globalMouseClick);
		window.removeEventListener('touchstart', this.globalMouseClick);
		window.removeEventListener('wheel', this.globalWheel);
		this.selectRef.removeEventListener('keydown', this.requiredSelectKeydown);
		this.selectRef.removeEventListener('focus', this.selectFocus);
		this.selectRef.removeEventListener('focusout', this.deSelectFocus);
	}

	// TODO: Remove this, switch to gdsfp
	componentWillReceiveProps(newProps) {
		const dataChanged = newProps.data !== this.props.data;
		const stateUpdate = {};
		let changed = false;

		if (dataChanged) {
			this.mappedData = this.sortData(this.mapAllData(newProps.data));
			stateUpdate.data = this.mappedData;
			changed = true;
		}

		this.processDataAttributes(newProps);

		if (dataChanged || newProps.text !== this.props.text || newProps.value !== this.props.value) {
			let selectedItems = this.findSelectedItems(this.mappedData, newProps.text, newProps.value);
			stateUpdate.text = selectedItems.text;
			stateUpdate.value = selectedItems.value;
			changed = true;
		}

		if (changed) {
			this.setState(stateUpdate);
		}

		this.defaultText = newProps.text ? newProps.text : newProps.defaultText ? newProps.defaultText : 'Select';
	}

	processDataAttributes = newProps => {
		const props = newProps || this.props;
		const allowedKeys = ['wrapper', 'dropDownHeader', 'listItem'];

		if (!props.dataAttr) {
			this.wrapperDataTransformer = {};
			this.dropDownHeaderDataTransformer = {};
			this.listItemDataTransformer = {};
		} else {
			const { dataAttr } = props;
			Object.keys(dataAttr).forEach(key => {
				if (!allowedKeys.includes(key)) {
					throw new Error(`Unknown dataAttr property: ${key}`);
				}
			});

			this.wrapperDataTransformer = dataAttr.wrapper || {};
			this.dropDownHeaderDataTransformer = dataAttr.dropDownHeader || {};
			this.listItemDataTransformer = dataAttr.listItem || {};
		}
	};

	/**
	 * Focus event for select
	 */
	selectFocus = () => {
		if (this.headRef) {
			this.borderColor = this.headRef.style.borderColor;
			this.headRef.style.borderColor = this.borderActive;
		}
		return null;
	};

	/**
	 * Focus-out event for select
	 */
	deSelectFocus = () => {
		if (this.headRef) {
			this.headRef.style.borderColor = this.borderColor;
		}
		return null;
	};

	/**
	 * Global wheel event
	 * @param event
	 */
	globalWheel = event => {
		if (this.open) {
			let target = event.target;
			// Safety fuse
			let i = 0;
			let outside = true;
			let elementHeight;
			let data;
			let maximumScroll;

			if (!this.props.groups) {
				data = this.state.data.length;
				elementHeight = this.comboSelectRef.getElementsByClassName('combo-select-item')[0].clientHeight;
				maximumScroll = data * elementHeight;
			} else {
				data = this.state.data.reduce((acc, curr) => acc + curr.data.length + 1, 0);
				elementHeight = this.comboSelectRef.getElementsByClassName('combo-select-group__item')[0].clientHeight;
				maximumScroll = data * elementHeight * 2;
			}
			let menuHeight = this.scrollRef.clientHeight;
			let potentialScrollBottom =
				this.comboSelectRef.getElementsByClassName(specialClass)[0].scrollTop + menuHeight + event.deltaY;

			if (
				potentialScrollBottom <= maximumScroll &&
				this.comboSelectRef.getElementsByClassName(specialClass)[0].scrollTop + event.deltaY > 0
			) {
				while (this.checkParentElement(target) && i < 10) {
					target = target.parentElement;
					i++;

					if (target && target == this.scrollRef) {
						outside = false;
					}
				}

				if (outside) {
					event.stopPropagation();
				}
			} else if (this.comboSelectRef.getElementsByClassName(specialClass)[0].scrollTop + event.deltaY <= 0) {
				this.scrollRef.scrollTop = 0;
				event.stopPropagation();
			} else {
				this.scrollRef.scrollTop = 9999999;
				event.stopPropagation();
				event.preventDefault();
			}
		}
	};

	/**
	 * Global mouse event, here is also serves to control opening/closing menu and picking item on select/multiselect
	 * @param event
	 */
	globalMouseClick = event => {
		if (event) {
			let target = event.target;
			// Safety fuse
			let i = 0;
			let hideMenu = true;

			while (this.checkParentElement(target) && i < 10) {
				target = target.parentElement;
				i++;
				if (target == this.comboSelectRef) {
					hideMenu = false;
				}
			}

			if (this.open && hideMenu) {
				if (
					target.className &&
					typeof target.className == 'string' &&
					target.className.indexOf('combo-select-item') > -1
				) {
					// nothing
				} else if (
					target.className &&
					typeof target.className == 'string' &&
					target.className.indexOf('combo-select-group__item') > -1
				) {
					// nothing
				} else {
					event.preventDefault();
					this.toggleMenu();
				}
			}
		}
		return null;
	};

	/**
	 * Check if there is an parent element
	 * @param target
	 * @returns {boolean}
	 */
	checkParentElement = target => !!target.parentElement;

	/**
	 * Generate head (texts)
	 * @returns {XML|*}
	 */
	_generateHead = () => {
		let head;
		let stateText = this.state.text;

		if (typeof stateText === 'object') {
			stateText.length > 3
				? (stateText = stateText.length + ' selected')
				: ((stateText = stateText.slice()), (stateText = stateText.join(', ')));
		}

		let options = this.state.data.map((item, i) => (
			<option key={i} value={item.text}>
				{item.text}
			</option>
		));

		const {
			data,
			type,
			onChange,
			search,
			value,
			onToggle,
			text,
			map,
			sort,
			iconSelectInactive,
			iconSelectActive,
			defaultText,
			scrollHeight,
			scrollMaxHeight,
			preferredDirection,
			dataAttr,
			...other
		} = this.props;

		if (
			this.state.value === 0 ||
			(this.state.value &&
				((this.state.value instanceof Array && this.state.value.length > 0) || !(this.state.value instanceof Array)))
		) {
			head = (
				<div onClick={this.toggleMenu}>
					<div
						{...transformDataAttributes(this.dropDownHeaderDataTransformer, this.props)}
						className={(this.props.disabled ? ' disabled ' : '') + 'combo-select-head'}
						ref={el => {
							this.headRef = el;
						}}
					>
						{stateText ? stateText : this.defaultText}
						{this.useCustomIcon ? <i className={this.icon} /> : <DropDownIcon />}
					</div>
					<select
						{...other}
						className="combo-select-required-select"
						ref={el => {
							this.selectRef = el;
						}}
					>
						{options}
					</select>
				</div>
			);
		} else {
			head = (
				<div onClick={this.toggleMenu}>
					<div
						{...transformDataAttributes(this.dropDownHeaderDataTransformer, this.props)}
						className={(this.props.disabled ? ' disabled ' : '') + 'combo-select-head'}
						ref={el => {
							this.headRef = el;
						}}
					>
						{stateText ? stateText : this.defaultText}
						{this.useCustomIcon ? <i className={this.icon} /> : <DropDownIcon />}
					</div>
					<select
						{...other}
						className="combo-select-required-select"
						ref={el => {
							this.selectRef = el;
						}}
					>
						<option value="" />
					</select>
				</div>
			);
		}
		return head;
	};

	/**
	 * Generate body (menu)
	 * @returns {XML}
	 */

	_generateBody = () => {
		let style = this.calculateMetric();
		let body = '';
		const startIndex = (i, groups) => {
			return groups.reduce((acc, currValue, currIndex) => {
				if (i > currIndex) {
					return acc + currValue.data.length;
				}
				return acc;
			}, 0);
		};

		if (Array.isArray(this.state.data)) {
			body = this.state.data.map((item, i) => {
				let focused = false;
				this.focus == i ? (focused = true) : '';

				return !this.props.groups ? (
					<div key={i}>
						<ComboSelectItem
							{...transformDataAttributes(this.listItemDataTransformer, item)}
							item={item}
							selected={this.findSelectedByKey(item, this.state.text, 'text')}
							index={i}
							focused={focused}
							type={this.state.type}
							selectItem={this.selectItem.bind(this)}
							focusItem={this.focusItem.bind(this)}
							iconSelectActive={this.iconSelectActive}
							iconSelectInactive={this.iconSelectInactive}
						/>
					</div>
				) : (
					<ComboSelectGroup
						type={this.state.type}
						key={item.groupName}
						{...transformDataAttributes(this.listItemDataTransformer, item)}
						item={item}
						index={startIndex(i, this.state.data)}
						focused={focused}
						focusItem={this.focusItem.bind(this)}
						selectItem={this.selectItem.bind(this)}
						iconSelectActive={this.iconSelectActive}
						iconSelectInactive={this.iconSelectInactive}
					/>
				);
			});
		}

		let search = this.ifSearch(style) ? (
			<input
				type="text"
				style={style ? style.search : {}}
				ref={el => {
					this.searchInputRef = el;
				}}
				className="search-input"
				onKeyDown={event => {
					if (event.keyCode == 32) {
						event.stopPropagation();
					} else if (this.focus < 0 && event.keyCode == 13) {
						event.preventDefault();
						event.stopPropagation();
					}
				}}
				onChange={() => throttle(this.filterBySearch(), 200)}
			/>
		) : (
			''
		);

		return (
			<div>
				{search}
				<div
					className="combo-select-body"
					ref={el => {
						this.bodyRef = el;
					}}
					style={style ? style.body : {}}
				>
					<div
						style={style ? style.scroll : {}}
						className="combo-select-body-scroll"
						ref={el => {
							this.scrollRef = el;
						}}
					>
						{body && body.length > 0 ? body : <div className="combo-select-item">There are no eligible items</div>}
					</div>
				</div>
			</div>
		);
	};

	/**
	 * @data: array of groups
	 * @deselectMode: boolean
	 *
	 * Deselect mode's purpose is to deselect all selected groups while in 'select' type
	 * it returns groups array with all groups items selected: false. Used in this.selectGroupItem()
	 */
	findSelectedGroupItems = (data, deselectMode) => {
		const selectedItems = {
			text: [],
			value: [],
		};

		data.forEach(group => {
			if (group.data) {
				group.data.forEach(groupItem => {
					if (deselectMode) {
						if (groupItem.selected) {
							groupItem.selected = false;
						}
					} else {
						if (groupItem.selected) {
							selectedItems.text.push(groupItem.text);
							selectedItems.value.push(groupItem.value);
						}
					}
				});
			}
		});
		if (deselectMode) return data;
		return selectedItems;
	};

	/**
	 * Connect text and value if component received only one of them
	 * @param data
	 * @param text
	 * @param value
	 */
	findSelectedItems = (data, text, value) => {
		let selectedItems = {
			text: [],
			value: [],
		};

		if (this.props.groups) {
			selectedItems = this.findSelectedGroupItems(data);
		} else {
			data.forEach(item => {
				if (this.findSelectedItem(item, text, value)) {
					selectedItems.text.push(item.text);
					selectedItems.value.push(item.value);
				}
			});
		}

		return selectedItems;
	};

	/**
	 * Find selected item comparing text or value with item
	 * @param item
	 * @param text
	 * @param value
	 * @returns {boolean}
	 */
	findSelectedItem = (item, text, value) => {
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
	};

	/**
	 * Check if item is selected
	 * @param item
	 * @param keyData
	 * @param key
	 * @returns {boolean}
	 */
	findSelectedByKey = (item, keyData, key) => {
		let selected;

		if (Array.isArray(keyData)) {
			for (let i in keyData) {
				if (item[key] == keyData[i]) {
					selected = true;
				}
			}
		} else {
			if (typeof keyData === 'object') {
				selected = true;
				for (let itemKey in keyData)
					if (item[key][itemKey] !== keyData[itemKey]) {
						selected = false;
						break;
					}
			} else if (item[key] == keyData) {
				selected = true;
			}
		}
		return selected;
	};

	/**
	 * Should search be shown or not?
	 * @param style
	 * @returns {boolean|*|NodeList}
	 */
	ifSearch = style =>
		this.state.search == 'on' ||
		(this.state.search == 'smart' &&
			(!style || style.scroll.height != 'auto' || (this.searchInputRef && this.searchInputRef.value)));

	/**
	 * Alphanumerical sorting logic
	 * @param ar
	 * @returns {*}
	 */
	alphanumSort = ar => {
		for (var z = 0, t; (t = ar[z]); z++) {
			ar[z] = [];
			var x = 0,
				y = -1,
				n = 0,
				i,
				j;

			while ((i = (j = t.text.toString().charAt(x++)).charCodeAt(0))) {
				var m = i == 46 || (i >= 48 && i <= 57);
				if (m !== n) {
					ar[z][++y] = '';
					n = m;
				}
				ar[z][y] += j;
			}

			let text = ar[z];
			ar[z] = {
				text: text,
				value: t.value,
			};
		}

		ar.sort(function(a, b) {
			a = a.text;
			b = b.text;
			for (var x = 0, aa, bb; (aa = a[x]) && (bb = b[x]); x++) {
				if (aa !== bb) {
					var c = Number(aa),
						d = Number(bb);
					if (c == aa && d == bb) {
						return c - d;
					} else return aa > bb ? 1 : -1;
				}
			}
			return a.length - b.length;
		});

		for (let y = 0; y < ar.length; y++) ar[y].text = ar[y].text.join('');

		return ar;
	};

	sortGroupData = (data, sortMethod) => {
		let sortedData = [];

		if (data) {
			let sort = sortMethod ? sortMethod : 'string';
			// No alphanum sort for groups right now

			if (sort == 'string') {
				sortedData = data.map(group => {
					if (group.data.length) {
						const options = group.data.sort(
							(a, b) => (a.text.toString() > b.text.toString() ? 1 : b.text.toString() > a.text.toString() ? -1 : 0)
						);
						return { ...group, data: options };
					}
				});
			} else if (sort == 'number') {
				sortedData = data.map(group => {
					if (group.data.length) {
						const options = group.data.sort((a, b) => a.text - b.text);
						return { ...group, data: options };
					}
				});
			}
		}

		this.focus = -1;
		return sortedData.sort((a, b) => a.groupName.localeCompare(b.groupName));
	};

	/**
	 * Sort data alphabetically or numerically
	 * @param data
	 * @returns {*}
	 */
	sortData = data => {
		if (this.props.sort === false || this.props.sort === 'off') {
			return data;
		}
		let sortedData = [];

		if (this.props.groups) {
			sortedData = this.sortGroupData(data, this.props.sort);
		} else {
			if (data && data[0]) {
				let sort = this.props.sort ? this.props.sort : 'alphanum';

				if (sort == 'string') {
					sortedData = data.sort(function(a, b) {
						return a.text.toString() > b.text.toString() ? 1 : b.text.toString() > a.text.toString() ? -1 : 0;
					});
				} else if (sort == 'number') {
					sortedData = data.sort(function(a, b) {
						return a.text - b.text;
					});
				} else {
					sortedData = this.alphanumSort(data);
				}
			}
		}

		this.focus = -1;
		return sortedData;
	};

	/**
	 * Filter group data to match searched term
	 */
	filterGroupsBySearch = filter => {
		const data = [];

		for (let group in this.mappedData) {
			if (this.mappedData.hasOwnProperty(group)) {
				data.push({
					groupName: this.mappedData[group].groupName,
					data: [],
				});

				for (const item of this.mappedData[group].data) {
					if (
						item.text
							.toString()
							.toLowerCase()
							.indexOf(filter) > -1
					) {
						data[group].data.push(item);
					}
				}
			}
		}
		return this.setState({ data });
	};

	/**
	 * Filter data to match searched term
	 */
	filterBySearch = () => {
		if (!this.searchInputRef) return;
		let filter = this.searchInputRef.value.toLowerCase();
		let data = [];

		if (this.props.groups) {
			return this.filterGroupsBySearch(filter);
		} else {
			for (let i in this.mappedData) {
				if (
					this.mappedData[i].text
						.toString()
						.toLowerCase()
						.indexOf(filter) > -1
				) {
					data.push(this.mappedData[i]);
				}
			}
		}
		return this.setState({ data });
	};

	/**
	 * On any keydown, but tab, that is pressed on inner required select disable it and open custom select
	 * @param event
	 */
	requiredSelectKeydown = event => {
		// space, up, down
		if (
			!this.props.disabled &&
			!this.open &&
			(event.keyCode === 13 || event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 32)
		) {
			event.preventDefault();
			event.stopPropagation();
			this.toggleMenu();
		}
	};

	/**
	 * Open/close menu, with overflow hidden
	 */
	toggleMenu = () => {
		if (!this.props.disabled) {
			let comboSelect = this.comboSelectRef;

			this.open = !this.open;

			if (this.holderRef) {
				this.holderRef.style.display = this.open ? 'block' : 'none';
			}

			if (this.open) {
				let style = this.calculateMetric();

				// Search
				if (this.ifSearch(style) && comboSelect && this.searchInputRef) {
					this.searchInputRef.style.display = 'block';
					this.searchInputRef.style.top = style.search.top ? style.search.top + 'px' : '';
					this.searchInputRef.style.bottom = style.search.bottom ? style.search.bottom + 'px' : '';
				} else if (comboSelect && this.searchInputRef) {
					this.searchInputRef.style.display = 'none';
				}

				// Body
				if (comboSelect && this.bodyRef) {
					this.bodyRef.style.top = style.body.top ? style.body.top + 'px' : '';
					this.bodyRef.style.bottom = style.body.bottom ? style.body.bottom + 'px' : '';
					this.bodyRef.style.paddingTop = style.body.paddingTop ? style.body.paddingTop + 'px' : '';
					this.bodyRef.style.paddingBottom = style.body.paddingBottom ? style.body.paddingBottom + 'px' : '';
				}

				// Search focus
				if (this.searchInputRef) {
					this.searchInputRef.focus();
				}

				//Scroll
				if (this.scrollRef) {
					this.scrollRef.style.height = style.scroll.height + 'px';
					this.scrollRef.style.maxHeight = style.scroll.maxHeight + 'px';
					this.scrollRef.style.overflowY = style.scroll.overflowY;
				}

				// Is search there?
				if (
					style &&
					style.search &&
					style.search.top != 'auto' &&
					!comboSelect.getElementsByClassName('search-input')[0]
				) {
					this.forceUpdate();
				}
			} else {
				if (navigator.userAgent.match(/Tablet|iPad/i)) {
					// do tablet stuff
				} else if (
					navigator.userAgent.match(
						/IEMobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Mobile Safari|Opera Mini|\bCrMo\/|Opera Mobi/i
					)
				) {
					// do mobile stuff
				} else {
					this.selectRef.focus();
				}
			}

			// Propagate toggle event with data with to outside event
			if (this.props.onToggle) {
				this.props.onToggle(this.open, this.state.value, this.state.text);
			}
		}
	};

	/**
	 * Push state for focus on mouseover/keyboard control
	 * @param focus
	 */
	focusItem = focus => {
		if (this.state.data && this.state.data.length > 0) {
			if (!this.props.groups) {
				const items = this.comboSelectRef.getElementsByClassName('combo-select-item');
				if (items && this.focus >= 0 && items[this.focus]) {
					items[this.focus].style.backgroundColor = '';
				}
				items[focus].style.backgroundColor = '#f7f7f7';
				this.focus = focus;
			} else {
				this.focus = focus;
			}
		}
	};

	/**
	 * Calculates metric for opening menu
	 * @returns {{}}
	 * TODO: currently opens menu 'maximum as possible', make this open so that you cannot see next element
	 */
	calculateMetric = () => {
		if (this.comboSelectRef) {
			// add minimum distance from top or bottom
			const buffer = 100;
			let comboSelect = this.comboSelectRef;
			let viewportOffset = comboSelect.getBoundingClientRect();
			let top = viewportOffset.top;
			//TODO: elementHeight is accurate only if height of an element is same as height of header
			let elementHeight = comboSelect.clientHeight;
			let windowHeight = window.innerHeight;
			let bottom = windowHeight - (top + elementHeight);
			let overflow = true;
			let maxHeight = null;
			let direction;
			let height;

			if (bottom > top) {
				direction = 'down';
				height = bottom - buffer;
			} else {
				direction = 'top';
				height = top - buffer;
			}

			if (this.props.groups) {
				const groupItemsLength = this.state.data.reduce((acc, curr) => acc + curr.data.length, 0);
				if (elementHeight * groupItemsLength < height) {
					height = 'auto';
					overflow = false;
				}
			}

			if (!this.props.groups && elementHeight * this.state.data.length < height) {
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
	};

	/**
	 * It creates styles for opening menu
	 * @param direction
	 * @param height
	 * @param overflow
	 * @param elementHeight
	 * @returns {{}}
	 */
	openMenu = (direction, height, maxHeight, overflow, elementHeight) => {
		let style = {
			body: {},
			scroll: {},
			search: {},
			controls: {},
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
			let elasticHeight;

			if (this.props.groups) {
				const groupItemsLength = this.state.data.reduce((acc, curr) => acc + curr.data.length, 0);
				elasticHeight =
					height && height != 'auto' ? height : elementHeight * (groupItemsLength > 0 ? groupItemsLength : 1);
			} else {
				elasticHeight =
					height && height != 'auto'
						? height
						: elementHeight * (this.state.data.length > 0 ? this.state.data.length : 1);
			}

			style.body.top = 41;
			style.body.paddingTop = this.ifSearch(style) ? 45 : 0;

			style.body.paddingBottom = this.props.controls && this.state.type == 'multiselect' ? 45 : 0;

			style.search.top = 48;

			style.controls.top = elasticHeight + style.body.paddingTop + style.body.paddingBottom;
		}
		return style;
	};

	selectGroupItem = item => {
		const { text, value, selected, parent } = item;
		let updatedData = [...this.state.data];
		// Because of this names of the items and names of the partners should be unique
		const partnerData = updatedData.filter(group => group.groupName === parent);
		const itemData = partnerData[0].data.filter(datum => datum.value === value)[0];

		if (this.state.type === 'select') {
			updatedData = this.findSelectedGroupItems(updatedData, true);
			itemData.selected = !itemData.selected;
			if (!this.state.text) {
				return this.setState(
					{
						data: updatedData,
						text,
						value,
					},
					() => (this.props.onChange ? this.props.onChange(value, text) : '')
				);
			}

			return this.setState({ data: updatedData, text: text, value: value }, () => {
				this.toggleMenu();
				this.props.onChange ? this.props.onChange(value, text) : '';
			});
		} else {
			itemData.selected = !itemData.selected;

			if (!this.state.text) {
				return this.setState(
					{
						data: updatedData,
						text: [text],
						value: [value],
					},
					() => {
						this.props.onChange ? this.props.onChange([...value], text) : '';
					}
				);
			}

			let index = this.state.text.findIndex(txtItem => text === txtItem);
			let texts = [...this.state.text];
			let values = [...this.state.value];

			if (index !== -1) {
				texts.splice(index, 1);
				values.splice(index, 1);
			} else {
				texts.push(text);
				values.push(value);
			}

			return this.setState(
				{
					data: updatedData,
					text: texts,
					value: values,
				},
				() => {
					this.props.onChange ? this.props.onChange(values, texts) : '';
				}
			);
		}
	};

	/**
	 * Logic for selecting item(s) in select vs multiselect
	 * @param item
	 */
	selectItem = item => {
		if (!item) return;

		if (this.props.groups) return this.selectGroupItem(item);

		let { text, value } = item;

		if (this.state.type === 'select') {
			this.setState({ text: text, value: value }, () => {
				this.toggleMenu();
				this.props.onChange ? this.props.onChange(value, text) : '';
			});
		} else {
			if (typeof this.state.text === 'string') {
				this.setState(
					{
						text: [...text],
						value: [...value],
					},
					() => {
						this.props.onChange ? this.props.onChange([...value], text) : '';
					}
				);
			} else {
				let splice;

				this.state.text.map(function(textItem, i) {
					if (text == textItem) {
						splice = i;
					}
				});

				let texts = this.state.text.slice();
				let values = this.state.value.slice();

				if (splice || splice === 0) {
					texts.splice(splice, 1);
					values.splice(splice, 1);
				} else {
					texts.push(text);
					values.push(value);
				}

				this.setState(
					{
						text: texts,
						value: values,
					},
					() => {
						this.props.onChange ? this.props.onChange(values, texts) : '';
					}
				);
			}
		}

		if (this.selectRef) this.selectRef.value = text;
	};

	/**
	 * Control scrolling within open menu with arrowZ
	 */
	controlScrolling = () => {
		let focusedItem;
		const comboSelectBody = this.bodyRef;
		if (this.props.groups) {
			focusedItem = this.comboSelectRef.getElementsByClassName('combo-select-group__item')[this.focus];
		} else {
			focusedItem = this.comboSelectRef.getElementsByClassName('combo-select-item')[this.focus];
		}
		const specialClassElement = this.comboSelectRef.getElementsByClassName(specialClass)[0];

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
		} else if (this.focus === 0) {
			specialClassElement.scrollTop = 0;
		}
	};

	/**
	 * Event for eny keypress once menu is open
	 * @param event
	 */
	globalKeyDown = event => {
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
							this.focusItem(this.focus == this.state.data.length - 1 ? (this.focus = 0) : this.focus + 1);
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
					if (this.state.data[this.focus]) {
						this.selectItem(this.state.data[this.focus]);
					}
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
	};

	mapAllData = data => {
		let mappedData = [];
		if (data) {
			if (this.props.groups) mappedData = data.map(group => this.mapGroupData(group));
			else mappedData = data.map(item => this.mapSingleData(item));
		}
		return mappedData;
	};

	mapSingleData = (item, parent) => {
		let text = '';
		let value = '';

		if (typeof item === 'object') {
			if (typeof this.map.text === 'function') {
				text = this.map.text(item);
				if (typeof this.map.value === 'function') {
					value = this.map.value(item);
				} else {
					value = item[this.map.value];
				}
			} else if (typeof this.map.value === 'function') {
				value = this.map.value(item);
				if (typeof this.map.text === 'function') {
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

		if (parent && this.props.groups) {
			// Transform item here, check for groups, check if item is in incoming data of selected values ,
			// and mark it as { selected: true } if it is
			const groupItem = {
				text,
				value,
				selected: false,
				parent,
			};
			if (this.props.value) {
				if (this.props.value.includes(item.value)) {
					groupItem.selected = true;
				}
			}
			return groupItem;
		} else return { text, value };
	};

	mapGroupData = group => {
		if (group.options.length) {
			const data = group.options.map(option => this.mapSingleData(option, group.groupName));
			return { groupName: group.groupName, data };
		}
	};

	render() {
		let head = this._generateHead();
		let body = this._generateBody();

		return (
			<div
				{...transformDataAttributes(this.wrapperDataTransformer, this.props)}
				ref={el => {
					this.comboSelectRef = el;
				}}
				className="combo-select"
			>
				{head}
				<div
					style={{ display: 'none' }}
					className="combo-select-body-holder"
					ref={el => {
						this.holderRef = el;
					}}
				>
					{body}
				</div>
			</div>
		);
	}
}

ComboSelect.propTypes = {
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
	preferredDirection: PropTypes.oneOf(['top', 'down']),
	dataAttr: PropTypes.object,
};
