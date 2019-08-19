'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ComboSelectItem = require('./ComboSelectItem');

var _ComboSelectItem2 = _interopRequireDefault(_ComboSelectItem);

var _ComboSelectGroup = require('./ComboSelectGroup');

var _ComboSelectGroup2 = _interopRequireDefault(_ComboSelectGroup);

var _helpers = require('../helpers');

var _DropDownIcon = require('./svg/DropDownIcon');

var _DropDownIcon2 = _interopRequireDefault(_DropDownIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: move to this.specialClass
var specialClass = 'combo-select-body-scroll';

var ComboSelect = function (_Component) {
	_inherits(ComboSelect, _Component);

	function ComboSelect(props) {
		_classCallCheck(this, ComboSelect);

		var _this = _possibleConstructorReturn(this, (ComboSelect.__proto__ || Object.getPrototypeOf(ComboSelect)).call(this, props));

		_this.componentDidUpdate = function () {
			return _this.__componentDidUpdate__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.getNumberOfItems = function () {
			return _this.__getNumberOfItems__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.resetValues = function () {
			return _this.__resetValues__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.processDataAttributes = function () {
			return _this.__processDataAttributes__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.selectFocus = function () {
			return _this.__selectFocus__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.deSelectFocus = function () {
			return _this.__deSelectFocus__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.globalWheel = function () {
			return _this.__globalWheel__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.globalMouseClick = function () {
			return _this.__globalMouseClick__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.checkParentElement = function () {
			return _this.__checkParentElement__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this._generateHead = function () {
			return _this.___generateHead__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this._generateBody = function () {
			return _this.___generateBody__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.findSelectedGroupItems = function () {
			return _this.__findSelectedGroupItems__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.findSelectedItems = function () {
			return _this.__findSelectedItems__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.findSelectedItem = function () {
			return _this.__findSelectedItem__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.findSelectedByKey = function () {
			return _this.__findSelectedByKey__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.ifSearch = function () {
			return _this.__ifSearch__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.alphanumSort = function () {
			return _this.__alphanumSort__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.sortGroupData = function () {
			return _this.__sortGroupData__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.sortData = function () {
			return _this.__sortData__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.filterGroupsBySearch = function () {
			return _this.__filterGroupsBySearch__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.filterBySearch = function () {
			return _this.__filterBySearch__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.requiredSelectKeydown = function () {
			return _this.__requiredSelectKeydown__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.toggleMenu = function () {
			return _this.__toggleMenu__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.focusItem = function () {
			return _this.__focusItem__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.calculateMetric = function () {
			return _this.__calculateMetric__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.openMenu = function () {
			return _this.__openMenu__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.selectGroupItem = function () {
			return _this.__selectGroupItem__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.selectItem = function () {
			return _this.__selectItem__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.controlScrolling = function () {
			return _this.__controlScrolling__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.globalKeyDown = function () {
			return _this.__globalKeyDown__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.mapAllData = function () {
			return _this.__mapAllData__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.mapSingleData = function () {
			return _this.__mapSingleData__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.mapGroupData = function () {
			return _this.__mapGroupData__REACT_HOT_LOADER__.apply(_this, arguments);
		};

		_this.focus = -1;
		_this.scroll = 0;
		_this.defaultText = props.text ? props.text : props.defaultText ? props.defaultText : 'Select';
		_this.open = false;
		_this.searchTimeout = null;
		_this.useCustomIcon = props.icon && props.icon !== true && props.icon !== 'on';
		_this.icon = props.icon ? props.icon : 'fa fa-chevron-circle-down';
		_this.map = _this.props.map && _this.props.map.text && _this.props.map.value ? _this.props.map : {
			value: 'value',
			text: 'text'
		};
		_this.borderActive = _this.props.borderActive ? _this.props.borderActive : '#40b4e5';
		_this.iconSelectActive = props.iconSelectActive === false || (props.iconSelectActive === 'off' ? true : props.iconSelectActive);
		_this.iconSelectInactive = props.iconSelectInactive === false || (props.iconSelectInactive === 'off' ? true : props.iconSelectInactive);

		_this.mappedData = _this.sortData(_this.mapAllData(props.data));
		_this.selectedItems = _this.findSelectedItems(_this.mappedData, props.text, props.value);

		// Refs
		_this.headRef = null;
		_this.selectRef = null;
		_this.searchInputRef = null;
		_this.comboSelectRef = null;
		_this.bodyRef = null;
		_this.scrollRef = null;
		_this.holderRef = null;

		_this.state = {
			totalGroupItems: 0,
			groupItems: [],
			data: _this.mappedData,
			text: _this.selectedItems.text,
			value: _this.selectedItems.value,
			type: props.type && (props.type == 'select' || props.type == 'multiselect') ? props.type : 'select',
			selected: -1,
			search: _this.props.search && (_this.props.search === 'on' || _this.props.search === 'smart' || _this.props.search === 'off') ? _this.props.search : 'off'
		};

		_this.processDataAttributes();
		return _this;
	}

	_createClass(ComboSelect, [{
		key: '__mapGroupData__REACT_HOT_LOADER__',
		value: function __mapGroupData__REACT_HOT_LOADER__() {
			return this.__mapGroupData__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__mapSingleData__REACT_HOT_LOADER__',
		value: function __mapSingleData__REACT_HOT_LOADER__() {
			return this.__mapSingleData__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__mapAllData__REACT_HOT_LOADER__',
		value: function __mapAllData__REACT_HOT_LOADER__() {
			return this.__mapAllData__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__globalKeyDown__REACT_HOT_LOADER__',
		value: function __globalKeyDown__REACT_HOT_LOADER__() {
			return this.__globalKeyDown__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__controlScrolling__REACT_HOT_LOADER__',
		value: function __controlScrolling__REACT_HOT_LOADER__() {
			return this.__controlScrolling__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__selectItem__REACT_HOT_LOADER__',
		value: function __selectItem__REACT_HOT_LOADER__() {
			return this.__selectItem__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__selectGroupItem__REACT_HOT_LOADER__',
		value: function __selectGroupItem__REACT_HOT_LOADER__() {
			return this.__selectGroupItem__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__openMenu__REACT_HOT_LOADER__',
		value: function __openMenu__REACT_HOT_LOADER__() {
			return this.__openMenu__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__calculateMetric__REACT_HOT_LOADER__',
		value: function __calculateMetric__REACT_HOT_LOADER__() {
			return this.__calculateMetric__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__focusItem__REACT_HOT_LOADER__',
		value: function __focusItem__REACT_HOT_LOADER__() {
			return this.__focusItem__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__toggleMenu__REACT_HOT_LOADER__',
		value: function __toggleMenu__REACT_HOT_LOADER__() {
			return this.__toggleMenu__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__requiredSelectKeydown__REACT_HOT_LOADER__',
		value: function __requiredSelectKeydown__REACT_HOT_LOADER__() {
			return this.__requiredSelectKeydown__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__filterBySearch__REACT_HOT_LOADER__',
		value: function __filterBySearch__REACT_HOT_LOADER__() {
			return this.__filterBySearch__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__filterGroupsBySearch__REACT_HOT_LOADER__',
		value: function __filterGroupsBySearch__REACT_HOT_LOADER__() {
			return this.__filterGroupsBySearch__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__sortData__REACT_HOT_LOADER__',
		value: function __sortData__REACT_HOT_LOADER__() {
			return this.__sortData__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__sortGroupData__REACT_HOT_LOADER__',
		value: function __sortGroupData__REACT_HOT_LOADER__() {
			return this.__sortGroupData__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__alphanumSort__REACT_HOT_LOADER__',
		value: function __alphanumSort__REACT_HOT_LOADER__() {
			return this.__alphanumSort__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__ifSearch__REACT_HOT_LOADER__',
		value: function __ifSearch__REACT_HOT_LOADER__() {
			return this.__ifSearch__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__findSelectedByKey__REACT_HOT_LOADER__',
		value: function __findSelectedByKey__REACT_HOT_LOADER__() {
			return this.__findSelectedByKey__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__findSelectedItem__REACT_HOT_LOADER__',
		value: function __findSelectedItem__REACT_HOT_LOADER__() {
			return this.__findSelectedItem__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__findSelectedItems__REACT_HOT_LOADER__',
		value: function __findSelectedItems__REACT_HOT_LOADER__() {
			return this.__findSelectedItems__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__findSelectedGroupItems__REACT_HOT_LOADER__',
		value: function __findSelectedGroupItems__REACT_HOT_LOADER__() {
			return this.__findSelectedGroupItems__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '___generateBody__REACT_HOT_LOADER__',
		value: function ___generateBody__REACT_HOT_LOADER__() {
			return this.___generateBody__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '___generateHead__REACT_HOT_LOADER__',
		value: function ___generateHead__REACT_HOT_LOADER__() {
			return this.___generateHead__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__checkParentElement__REACT_HOT_LOADER__',
		value: function __checkParentElement__REACT_HOT_LOADER__() {
			return this.__checkParentElement__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__globalMouseClick__REACT_HOT_LOADER__',
		value: function __globalMouseClick__REACT_HOT_LOADER__() {
			return this.__globalMouseClick__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__globalWheel__REACT_HOT_LOADER__',
		value: function __globalWheel__REACT_HOT_LOADER__() {
			return this.__globalWheel__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__deSelectFocus__REACT_HOT_LOADER__',
		value: function __deSelectFocus__REACT_HOT_LOADER__() {
			return this.__deSelectFocus__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__selectFocus__REACT_HOT_LOADER__',
		value: function __selectFocus__REACT_HOT_LOADER__() {
			return this.__selectFocus__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__processDataAttributes__REACT_HOT_LOADER__',
		value: function __processDataAttributes__REACT_HOT_LOADER__() {
			return this.__processDataAttributes__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__resetValues__REACT_HOT_LOADER__',
		value: function __resetValues__REACT_HOT_LOADER__() {
			return this.__resetValues__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__getNumberOfItems__REACT_HOT_LOADER__',
		value: function __getNumberOfItems__REACT_HOT_LOADER__() {
			return this.__getNumberOfItems__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: '__componentDidUpdate__REACT_HOT_LOADER__',
		value: function __componentDidUpdate__REACT_HOT_LOADER__() {
			return this.__componentDidUpdate__REACT_HOT_LOADER__.apply(this, arguments);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
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

			// Get the total number of all items inside groups
			if (this.props.groups === 'enabled') {
				this.getNumberOfItems();
			}

			/**
    * Inner scroll, scroll to top
    * @type {number}
    */
			this.comboSelectRef.getElementsByClassName(specialClass).scrollTop = 0;
		}
	}, {
		key: '__componentDidUpdate__REACT_HOT_LOADER__',
		value: function __componentDidUpdate__REACT_HOT_LOADER__(prevProps, prevState) {
			if (this.state.data !== prevState.data) {
				this.getNumberOfItems();
			}
			// Add all option data from groups to an array so that options can be selected with enter/space
			if (this.props.groups === 'enabled' && this.state.data.length > 0 && this.state.totalGroupItems > 0) {
				var groupItems = [];
				this.state.data.forEach(function (group) {
					if (group.data) {
						groupItems.push.apply(groupItems, _toConsumableArray(group.data));
					}
				});
				if (groupItems.length !== prevState.groupItems.length) {
					this.setState({ groupItems: groupItems });
				}
			} else if (this.props.groups === 'enabled' && !this.state.data.length > 0 && this.state.totalGroupItems === 0) {
				this.setState({ groupItems: [] });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('keydown', this.globalKeyDown);
			window.removeEventListener('click', this.globalMouseClick);
			window.removeEventListener('touchstart', this.globalMouseClick);
			window.removeEventListener('wheel', this.globalWheel);
			this.selectRef.removeEventListener('keydown', this.requiredSelectKeydown);
			this.selectRef.removeEventListener('focus', this.selectFocus);
			this.selectRef.removeEventListener('focusout', this.deSelectFocus);
		}
	}, {
		key: 'UNSAFE_componentWillReceiveProps',
		value: function UNSAFE_componentWillReceiveProps(newProps) {
			if (newProps.text !== this.props.text || newProps.defaultText !== this.props.defaultText) {
				this.defaultText = newProps.text ? newProps.text : newProps.defaultText ? newProps.defaultText : 'Select';
			}

			if (newProps.value !== this.state.value) {
				if (Array.isArray(newProps.data) && newProps.data.length) {
					var mappedData = this.sortData(this.mapAllData(newProps.data));
					var selectedItems = this.findSelectedItems(mappedData, newProps.text, newProps.value);
					this.processDataAttributes(newProps);

					this.mappedData = mappedData;

					return this.setState({
						data: mappedData,
						text: selectedItems.text,
						value: selectedItems.value
					});
				} else {
					return this.setState({
						data: [],
						text: [],
						value: []
					});
				}
			}
		}

		/**
   * Calculate number of items across all groups
   * Used for selecting/deselecting group items via keyboard
   * @memberof ComboSelect
   */

	}, {
		key: '__getNumberOfItems__REACT_HOT_LOADER__',


		/**
   * Resets value of Combo Select via ref
   * @memberof ComboSelect
   */
		value: function __getNumberOfItems__REACT_HOT_LOADER__() {
			var totalGroupItems = this.state.data.reduce(function (acc, currValue, currIndex) {
				if (!currValue.data) return acc;

				return acc + currValue.data.length;
			}, 0);

			return this.setState({ totalGroupItems: totalGroupItems });
		}
	}, {
		key: '__resetValues__REACT_HOT_LOADER__',
		value: function __resetValues__REACT_HOT_LOADER__() {
			var _this2 = this;

			var data = [].concat(_toConsumableArray(this.state.data));
			if (this.props.groups) data = this.findSelectedGroupItems(this.state.data, true);
			this.focusItem(this.focus, true);

			return this.setState({
				data: data,
				text: '',
				value: ''
			}, function () {
				_this2.props.onChange ? _this2.props.onChange('', '') : '';
			});
		}
	}, {
		key: '__processDataAttributes__REACT_HOT_LOADER__',


		/**
   * Focus event for select
   */
		value: function __processDataAttributes__REACT_HOT_LOADER__(newProps) {
			var props = newProps || this.props;
			var allowedKeys = ['wrapper', 'dropDownHeader', 'listItem'];

			if (!props.dataAttr) {
				this.wrapperDataTransformer = {};
				this.dropDownHeaderDataTransformer = {};
				this.listItemDataTransformer = {};
			} else {
				var dataAttr = props.dataAttr;

				Object.keys(dataAttr).forEach(function (key) {
					if (!allowedKeys.includes(key)) {
						throw new Error('Unknown dataAttr property: ' + key);
					}
				});

				this.wrapperDataTransformer = dataAttr.wrapper || {};
				this.dropDownHeaderDataTransformer = dataAttr.dropDownHeader || {};
				this.listItemDataTransformer = dataAttr.listItem || {};
			}
		}
	}, {
		key: '__selectFocus__REACT_HOT_LOADER__',


		/**
   * Focus-out event for select
   */
		value: function __selectFocus__REACT_HOT_LOADER__() {
			if (this.headRef) {
				this.borderColor = this.headRef.style.borderColor;
				this.headRef.style.borderColor = this.borderActive;
			}
			return null;
		}
	}, {
		key: '__deSelectFocus__REACT_HOT_LOADER__',


		/**
   * Global wheel event
   * @param event
   */
		value: function __deSelectFocus__REACT_HOT_LOADER__() {
			if (this.headRef) {
				this.headRef.style.borderColor = this.borderColor;
			}
			return null;
		}
	}, {
		key: '__globalWheel__REACT_HOT_LOADER__',


		/**
   * Global mouse event, here is also serves to control opening/closing menu and picking item on select/multiselect
   * @param event
   */
		value: function __globalWheel__REACT_HOT_LOADER__(event) {
			if (this.open) {
				var target = event.target;
				// Safety fuse
				var i = 0;
				var outside = true;
				var elementHeight = void 0;
				var data = void 0;
				var maximumScroll = void 0;

				if (!this.props.groups) {
					data = this.state.data.length;
					elementHeight = this.comboSelectRef.getElementsByClassName('combo-select-item')[0].clientHeight;
					maximumScroll = data * elementHeight;
				} else {
					data = this.state.data.reduce(function (acc, curr) {
						return acc + curr.data.length + 1;
					}, 0);
					elementHeight = this.comboSelectRef.getElementsByClassName('combo-select-group__item')[0].clientHeight;
					maximumScroll = data * elementHeight * 2;
				}
				var menuHeight = this.scrollRef.clientHeight;
				var potentialScrollBottom = this.comboSelectRef.getElementsByClassName(specialClass)[0].scrollTop + menuHeight + event.deltaY;

				if (potentialScrollBottom <= maximumScroll && this.comboSelectRef.getElementsByClassName(specialClass)[0].scrollTop + event.deltaY > 0) {
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
		}
	}, {
		key: '__globalMouseClick__REACT_HOT_LOADER__',


		/**
   * Check if there is an parent element
   * @param target
   * @returns {boolean}
   */
		value: function __globalMouseClick__REACT_HOT_LOADER__(event) {
			if (event) {
				var target = event.target;
				// Safety fuse
				var i = 0;
				var hideMenu = true;

				while (this.checkParentElement(target) && i < 10) {
					target = target.parentElement;
					i++;
					if (target == this.comboSelectRef) {
						hideMenu = false;
					}
				}

				if (this.open && hideMenu) {
					if (target.className && typeof target.className == 'string' && target.className.indexOf('combo-select-item') > -1) {
						// nothing
					} else if (target.className && typeof target.className == 'string' && target.className.indexOf('combo-select-group__item') > -1) {
						// nothing
					} else {
						event.preventDefault();
						this.toggleMenu();
					}
				}
			}
			return null;
		}
	}, {
		key: '__checkParentElement__REACT_HOT_LOADER__',


		/**
   * Generate head (texts)
   * @returns {XML|*}
   */
		value: function __checkParentElement__REACT_HOT_LOADER__(target) {
			return !!target.parentElement;
		}
	}, {
		key: '___generateHead__REACT_HOT_LOADER__',


		/**
   * Generate body (menu)
   * @returns {XML}
   */
		value: function ___generateHead__REACT_HOT_LOADER__() {
			var _this3 = this;

			var head = void 0;
			var stateText = this.state.text;

			if ((typeof stateText === 'undefined' ? 'undefined' : _typeof(stateText)) === 'object') {
				stateText.length > 3 ? stateText = stateText.length + ' selected' : (stateText = stateText.slice(), stateText = stateText.join(', '));
			}

			var options = this.state.data.map(function (item, i) {
				return _react2.default.createElement(
					'option',
					{ key: i, value: item.text },
					item.text
				);
			});

			var _props = this.props,
			    data = _props.data,
			    type = _props.type,
			    onChange = _props.onChange,
			    search = _props.search,
			    value = _props.value,
			    onToggle = _props.onToggle,
			    text = _props.text,
			    map = _props.map,
			    sort = _props.sort,
			    iconSelectInactive = _props.iconSelectInactive,
			    iconSelectActive = _props.iconSelectActive,
			    defaultText = _props.defaultText,
			    scrollHeight = _props.scrollHeight,
			    scrollMaxHeight = _props.scrollMaxHeight,
			    preferredDirection = _props.preferredDirection,
			    dataAttr = _props.dataAttr,
			    other = _objectWithoutProperties(_props, ['data', 'type', 'onChange', 'search', 'value', 'onToggle', 'text', 'map', 'sort', 'iconSelectInactive', 'iconSelectActive', 'defaultText', 'scrollHeight', 'scrollMaxHeight', 'preferredDirection', 'dataAttr']);

			if (this.state.value === 0 || this.state.value && (this.state.value instanceof Array && this.state.value.length > 0 || !(this.state.value instanceof Array))) {
				head = _react2.default.createElement(
					'div',
					{ onClick: this.toggleMenu },
					_react2.default.createElement(
						'div',
						_extends({}, (0, _helpers.transformDataAttributes)(this.dropDownHeaderDataTransformer, this.props), {
							className: (this.props.disabled ? ' disabled ' : '') + 'combo-select-head',
							ref: function ref(el) {
								_this3.headRef = el;
							}
						}),
						stateText ? stateText : this.defaultText,
						this.useCustomIcon ? _react2.default.createElement('i', { className: this.icon }) : _react2.default.createElement(_DropDownIcon2.default, null)
					),
					_react2.default.createElement(
						'select',
						_extends({}, other, {
							className: 'combo-select-required-select',
							ref: function ref(el) {
								_this3.selectRef = el;
							}
						}),
						options
					)
				);
			} else {
				head = _react2.default.createElement(
					'div',
					{ onClick: this.toggleMenu },
					_react2.default.createElement(
						'div',
						_extends({}, (0, _helpers.transformDataAttributes)(this.dropDownHeaderDataTransformer, this.props), {
							className: (this.props.disabled ? ' disabled ' : '') + 'combo-select-head',
							ref: function ref(el) {
								_this3.headRef = el;
							}
						}),
						stateText ? stateText : this.defaultText,
						this.useCustomIcon ? _react2.default.createElement('i', { className: this.icon }) : _react2.default.createElement(_DropDownIcon2.default, null)
					),
					_react2.default.createElement(
						'select',
						_extends({}, other, {
							className: 'combo-select-required-select',
							ref: function ref(el) {
								_this3.selectRef = el;
							}
						}),
						_react2.default.createElement('option', { value: '' })
					)
				);
			}
			return head;
		}
	}, {
		key: '___generateBody__REACT_HOT_LOADER__',


		/**
   * @data: array of groups
   * @deselectMode: boolean
   *
   * Deselect mode's purpose is to deselect all selected groups while in 'select' type
   * it returns groups array with all groups items selected: false. Used in this.selectGroupItem()
   */
		value: function ___generateBody__REACT_HOT_LOADER__() {
			var _this4 = this;

			var style = this.calculateMetric();
			var body = '';
			var startIndex = function startIndex(i, groups) {
				return groups.reduce(function (acc, currValue, currIndex) {
					if (i > currIndex) {
						return acc + currValue.data.length;
					}
					return acc;
				}, 0);
			};

			if (Array.isArray(this.state.data)) {
				body = this.state.data.map(function (item, i) {
					var focused = false;
					_this4.focus == i ? focused = true : '';

					return !_this4.props.groups ? _react2.default.createElement(
						'div',
						{ key: i },
						_react2.default.createElement(_ComboSelectItem2.default, _extends({}, (0, _helpers.transformDataAttributes)(_this4.listItemDataTransformer, item), {
							item: item,
							selected: _this4.findSelectedByKey(item, _this4.state.text, 'text'),
							role: 'listbox',
							index: i,
							focused: focused,
							type: _this4.state.type,
							selectItem: _this4.selectItem,
							focusItem: _this4.focusItem,
							iconSelectActive: _this4.iconSelectActive,
							iconSelectInactive: _this4.iconSelectInactive
						}))
					) : _react2.default.createElement(_ComboSelectGroup2.default, _extends({
						type: _this4.state.type,
						key: item.groupName,
						role: 'listbox'
					}, (0, _helpers.transformDataAttributes)(_this4.listItemDataTransformer, item), {
						item: item,
						index: startIndex(i, _this4.state.data),
						focused: focused,
						focus: _this4.focus,
						focusItem: _this4.focusItem,
						selectItem: _this4.selectItem,
						iconSelectActive: _this4.iconSelectActive,
						iconSelectInactive: _this4.iconSelectInactive
					}));
				});
			}

			var search = this.ifSearch(style) ? _react2.default.createElement('input', {
				type: 'text',
				style: style ? style.search : {},
				'aria-label': 'search text',
				ref: function ref(el) {
					_this4.searchInputRef = el;
				},
				className: 'search-input',
				onKeyDown: function onKeyDown(event) {
					if (event.keyCode == 32) {
						event.stopPropagation();
					} else if (_this4.focus < 0 && event.keyCode == 13) {
						event.preventDefault();
						event.stopPropagation();
					}
				},
				onChange: function onChange() {
					return (0, _helpers.throttle)(_this4.filterBySearch(), 200);
				}
			}) : '';

			return _react2.default.createElement(
				'div',
				null,
				search,
				_react2.default.createElement(
					'div',
					{
						className: 'combo-select-body',
						ref: function ref(el) {
							_this4.bodyRef = el;
						},
						style: style ? style.body : {}
					},
					_react2.default.createElement(
						'div',
						{
							style: style ? style.scroll : {},
							className: 'combo-select-body-scroll',
							ref: function ref(el) {
								_this4.scrollRef = el;
							}
						},
						body && body.length > 0 ? body : _react2.default.createElement(
							'div',
							{ className: 'combo-select-item' },
							'There are no eligible items'
						)
					)
				)
			);
		}
	}, {
		key: '__findSelectedGroupItems__REACT_HOT_LOADER__',


		/**
   * Connect text and value if component received only one of them
   * @param data
   * @param text
   * @param value
   */
		value: function __findSelectedGroupItems__REACT_HOT_LOADER__(data, deselectMode) {
			var _this5 = this;

			var selectedItems = {
				text: [],
				value: []
			};

			data.forEach(function (group) {
				if (group.data) {
					group.data.forEach(function (groupItem) {
						if (deselectMode) {
							if (groupItem.selected) {
								groupItem.selected = false;
							}
						} else {
							if (groupItem.selected) {
								if (_this5.props.type === 'select') {
									selectedItems.text = groupItem.text;
									selectedItems.value = groupItem.value;
								} else {
									selectedItems.text.push(groupItem.text);
									selectedItems.value.push(groupItem.value);
								}
							}
						}
					});
				}
			});

			if (deselectMode) return data;

			return selectedItems;
		}
	}, {
		key: '__findSelectedItems__REACT_HOT_LOADER__',


		/**
   * Find selected item comparing text or value with item
   * @param item
   * @param text
   * @param value
   * @returns {boolean}
   */
		value: function __findSelectedItems__REACT_HOT_LOADER__(data, text, value) {
			var _this6 = this;

			var selectedItems = {
				text: [],
				value: []
			};

			if (this.props.groups) {
				selectedItems = this.findSelectedGroupItems(data);
			} else {
				data.forEach(function (item) {
					if (_this6.findSelectedItem(item, text, value)) {
						selectedItems.text.push(item.text);
						selectedItems.value.push(item.value);
					}
				});
			}

			return selectedItems;
		}
	}, {
		key: '__findSelectedItem__REACT_HOT_LOADER__',


		/**
   * Check if item is selected
   * @param item
   * @param keyData
   * @param key
   * @returns {boolean}
   */
		value: function __findSelectedItem__REACT_HOT_LOADER__(item, text, value) {
			var match = false;

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
	}, {
		key: '__findSelectedByKey__REACT_HOT_LOADER__',


		/**
   * Should search be shown or not?
   * @param style
   * @returns {boolean|*|NodeList}
   */
		value: function __findSelectedByKey__REACT_HOT_LOADER__(item, keyData, key) {
			var selected = void 0;

			if (Array.isArray(keyData)) {
				for (var i in keyData) {
					if (item[key] == keyData[i]) {
						selected = true;
					}
				}
			} else {
				if ((typeof keyData === 'undefined' ? 'undefined' : _typeof(keyData)) === 'object') {
					selected = true;
					for (var itemKey in keyData) {
						if (item[key][itemKey] !== keyData[itemKey]) {
							selected = false;
							break;
						}
					}
				} else if (item[key] == keyData) {
					selected = true;
				}
			}
			return selected;
		}
	}, {
		key: '__ifSearch__REACT_HOT_LOADER__',


		/**
   * Alphanumerical sorting logic
   * @param ar
   * @returns {*}
   */
		value: function __ifSearch__REACT_HOT_LOADER__(style) {
			return this.state.search == 'on' || this.state.search == 'smart' && (!style || style.scroll.height != 'auto' || this.searchInputRef && this.searchInputRef.value);
		}
	}, {
		key: '__alphanumSort__REACT_HOT_LOADER__',


		/**
   * Sorts group data, only string and numeric sort for now
   * @memberof ComboSelect
   */
		value: function __alphanumSort__REACT_HOT_LOADER__(ar) {
			for (var z = 0, t; t = ar[z]; z++) {
				ar[z] = [];
				var x = 0,
				    y = -1,
				    n = 0,
				    i,
				    j;

				while (i = (j = t.text.toString().charAt(x++)).charCodeAt(0)) {
					var m = i == 46 || i >= 48 && i <= 57;
					if (m !== n) {
						ar[z][++y] = '';
						n = m;
					}
					ar[z][y] += j;
				}

				var text = ar[z];
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
						var c = Number(aa),
						    d = Number(bb);
						if (c == aa && d == bb) {
							return c - d;
						} else return aa > bb ? 1 : -1;
					}
				}
				return a.length - b.length;
			});

			for (var _y = 0; _y < ar.length; _y++) {
				ar[_y].text = ar[_y].text.join('');
			}return ar;
		}
	}, {
		key: '__sortGroupData__REACT_HOT_LOADER__',


		/**
   * Sort data alphabetically or numerically
   * @param data
   * @returns {*}
   */
		value: function __sortGroupData__REACT_HOT_LOADER__(data, sortMethod) {
			var sortedData = [];

			if (data) {
				var sort = sortMethod ? sortMethod : 'string';
				// No alphanum sort for groups right now

				if (sort == 'string') {
					sortedData = data.map(function (group) {
						if (group.data.length) {
							var options = group.data.sort(function (a, b) {
								return a.text.toString() > b.text.toString() ? 1 : b.text.toString() > a.text.toString() ? -1 : 0;
							});
							return _extends({}, group, { data: options });
						}
					});
				} else if (sort == 'number') {
					sortedData = data.map(function (group) {
						if (group.data.length) {
							var options = group.data.sort(function (a, b) {
								return a.text - b.text;
							});
							return _extends({}, group, { data: options });
						}
					});
				} else {
					// eslint-disable-next-line
					console.warn("WIP ** Groups mode can't use other sort methods than 'string' or 'number'.");
					sortedData = data;
				}
			}

			this.focus = -1;
			// NOTE: Sort groups by names externally?
			return sortedData.sort(function (a, b) {
				return a.groupName.localeCompare(b.groupName);
			});
		}
	}, {
		key: '__sortData__REACT_HOT_LOADER__',


		/**
   * Filter group data to match searched term
   */
		value: function __sortData__REACT_HOT_LOADER__(data) {
			if (this.props.sort === false || this.props.sort === 'off') {
				return data;
			}
			var sortedData = [];

			if (this.props.groups) {
				sortedData = this.sortGroupData(data, this.props.sort);
			} else {
				if (data && data[0]) {
					var sort = this.props.sort ? this.props.sort : 'alphanum';

					if (sort == 'string') {
						sortedData = data.sort(function (a, b) {
							return a.text.toString() > b.text.toString() ? 1 : b.text.toString() > a.text.toString() ? -1 : 0;
						});
					} else if (sort == 'number') {
						sortedData = data.sort(function (a, b) {
							return a.text - b.text;
						});
					} else {
						sortedData = this.alphanumSort(data);
					}
				}
			}

			this.focus = -1;
			return sortedData;
		}
	}, {
		key: '__filterGroupsBySearch__REACT_HOT_LOADER__',


		/**
   * Filter data to match searched term
   */
		value: function __filterGroupsBySearch__REACT_HOT_LOADER__(filter) {
			var data = [];

			for (var group in this.mappedData) {
				if (this.mappedData.hasOwnProperty(group)) {
					data.push({
						groupName: this.mappedData[group].groupName,
						data: []
					});

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = this.mappedData[group].data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var item = _step.value;

							if (item.text.toString().toLowerCase().indexOf(filter) > -1) {
								data[group].data.push(item);
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			}
			return this.setState({ data: data });
		}
	}, {
		key: '__filterBySearch__REACT_HOT_LOADER__',


		/**
   * On any keydown, but tab, that is pressed on inner required select disable it and open custom select
   * @param event
   */
		value: function __filterBySearch__REACT_HOT_LOADER__() {
			if (!this.searchInputRef) return;
			var filter = this.searchInputRef.value.toLowerCase();
			var data = [];

			if (this.props.groups) {
				return this.filterGroupsBySearch(filter);
			} else {
				for (var i in this.mappedData) {
					if (this.mappedData[i].text.toString().toLowerCase().indexOf(filter) > -1) {
						data.push(this.mappedData[i]);
					}
				}
			}
			return this.setState({ data: data });
		}
	}, {
		key: '__requiredSelectKeydown__REACT_HOT_LOADER__',


		/**
   * Open/close menu, with overflow hidden
   */
		value: function __requiredSelectKeydown__REACT_HOT_LOADER__(event) {
			// space, up, down
			if (!this.props.disabled && !this.open && (event.keyCode === 13 || event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 32)) {
				event.preventDefault();
				event.stopPropagation();
				this.toggleMenu();
			}
		}
	}, {
		key: '__toggleMenu__REACT_HOT_LOADER__',


		/**
   * Push state for focus on mouseover/keyboard control
   * @param focus
   */
		value: function __toggleMenu__REACT_HOT_LOADER__() {
			if (!this.props.disabled) {
				var comboSelect = this.comboSelectRef;

				this.open = !this.open;

				if (this.holderRef) {
					this.holderRef.style.display = this.open ? 'block' : 'none';
				}

				if (this.open) {
					var style = this.calculateMetric();

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
					if (style && style.search && style.search.top != 'auto' && !comboSelect.getElementsByClassName('search-input')[0]) {
						this.forceUpdate();
					}
				} else {
					if (navigator.userAgent.match(/Tablet|iPad/i)) {
						// do tablet stuff
					} else if (navigator.userAgent.match(/IEMobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Mobile Safari|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
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
		}
	}, {
		key: '__focusItem__REACT_HOT_LOADER__',


		/**
   * Calculates metric for opening menu
   * @returns {{}}
   * TODO: currently opens menu 'maximum as possible', make this open so that you cannot see next element
   * NOTE: There be dragons
   */
		value: function __focusItem__REACT_HOT_LOADER__(focus, deFocus) {
			if (deFocus) {
				var items = this.comboSelectRef.getElementsByClassName('combo-select-item');
				if (items && this.focus >= 0 && items[this.focus]) {
					items[this.focus].style.backgroundColor = '';
					this.focus = -1;
				}
			} else if (this.state.data.length > 0) {
				if (!this.props.groups) {
					var _items = this.comboSelectRef.getElementsByClassName('combo-select-item');
					if (_items && this.focus >= 0 && _items[this.focus]) {
						_items[this.focus].style.backgroundColor = '';
					}
					_items[focus].style.backgroundColor = '#f7f7f7';
					this.focus = focus;
				} else {
					var _items2 = this.comboSelectRef.getElementsByClassName('combo-select-group__item');
					if (_items2 && this.focus >= 0 && _items2[this.focus]) {
						_items2[this.focus].style.backgroundColor = '';
					}
					_items2[focus].style.backgroundColor = '#f7f7f7';
					this.focus = focus;
				}
			}
		}
	}, {
		key: '__calculateMetric__REACT_HOT_LOADER__',


		/**
   * It creates styles for opening menu
   * @param direction
   * @param height
   * @param overflow
   * @param elementHeight
   * @returns {{}}
   */
		value: function __calculateMetric__REACT_HOT_LOADER__() {
			if (this.comboSelectRef) {
				// add minimum distance from top or bottom
				var buffer = 100;
				var comboSelect = this.comboSelectRef;
				var viewportOffset = comboSelect.getBoundingClientRect();
				var top = viewportOffset.top;
				//TODO: elementHeight is accurate only if height of an element is same as height of header
				var elementHeight = comboSelect.clientHeight;
				var windowHeight = window.innerHeight;
				var bottom = windowHeight - (top + elementHeight);
				var overflow = true;
				var maxHeight = null;
				var direction = void 0;
				var height = void 0;

				if (bottom > top) {
					direction = 'down';
					height = bottom - buffer;
				} else {
					direction = 'top';
					height = top - buffer;
				}

				if (this.props.groups) {
					var groupItemsLength = this.state.data.reduce(function (acc, curr) {
						return acc + curr.data.length;
					}, 0);
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
		}
	}, {
		key: '__openMenu__REACT_HOT_LOADER__',
		value: function __openMenu__REACT_HOT_LOADER__(direction, height, maxHeight, overflow, elementHeight) {
			var style = {
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
				var elasticHeight = void 0;

				if (this.props.groups) {
					var groupItemsLength = this.state.data.reduce(function (acc, curr) {
						return acc + curr.data.length;
					}, 0);
					elasticHeight = height && height != 'auto' ? height : elementHeight * (groupItemsLength > 0 ? groupItemsLength : 1);
				} else {
					elasticHeight = height && height != 'auto' ? height : elementHeight * (this.state.data.length > 0 ? this.state.data.length : 1);
				}

				style.body.top = 41;
				style.body.paddingTop = this.ifSearch(style) ? 45 : 0;

				style.body.paddingBottom = this.props.controls && this.state.type == 'multiselect' ? 45 : 0;

				style.search.top = 48;

				style.controls.top = elasticHeight + style.body.paddingTop + style.body.paddingBottom;
			}
			return style;
		}
	}, {
		key: '__selectGroupItem__REACT_HOT_LOADER__',


		/**
   * Logic for selecting item(s) in select vs multiselect
   * @param item
   */
		value: function __selectGroupItem__REACT_HOT_LOADER__(item) {
			var _this7 = this;

			if (!item && !Array.isArray(item)) return null;

			var text = item.text,
			    value = item.value,
			    selected = item.selected,
			    parent = item.parent;

			var updatedData = [].concat(_toConsumableArray(this.state.data));
			// Because of this names of the groups should be unique, because we're using only the first result when we isolate group by it's name
			var groupData = updatedData.filter(function (group) {
				return group.groupName === parent;
			});
			var itemData = groupData[0].data.filter(function (datum) {
				return datum.value === value;
			})[0];

			if (this.state.type === 'select') {
				updatedData = this.findSelectedGroupItems(updatedData, true);
				itemData.selected = !itemData.selected;

				if (!this.state.text) {
					return this.setState({
						data: updatedData,
						text: text,
						value: value
					}, function () {
						if (_this7.selectRef) _this7.selectRef.value = text;
						return _this7.props.onChange ? _this7.props.onChange(value, text) : '';
					});
				}

				return this.setState({ data: updatedData, text: text, value: value }, function () {
					_this7.toggleMenu();
					if (_this7.selectRef) _this7.selectRef.value = text;
					return _this7.props.onChange ? _this7.props.onChange(value, text) : '';
				});
			} else {
				itemData.selected = !itemData.selected;

				if (!this.state.text) {
					return this.setState({
						data: updatedData,
						text: [text],
						value: [value]
					}, function () {
						if (_this7.selectRef) _this7.selectRef.value = text;
						return _this7.props.onChange ? _this7.props.onChange([].concat(_toConsumableArray(value)), text) : '';
					});
				}

				var index = this.state.text.findIndex(function (txtItem) {
					return text === txtItem;
				});
				var texts = [].concat(_toConsumableArray(this.state.text));
				var values = [].concat(_toConsumableArray(this.state.value));

				if (index !== -1) {
					texts.splice(index, 1);
					values.splice(index, 1);
				} else {
					texts.push(text);
					values.push(value);
				}

				return this.setState({
					data: updatedData,
					text: texts,
					value: values
				}, function () {
					if (_this7.selectRef) _this7.selectRef.value = text;
					return _this7.props.onChange ? _this7.props.onChange(values, texts) : '';
				});
			}
		}
	}, {
		key: '__selectItem__REACT_HOT_LOADER__',


		/**
   * Control scrolling within open menu with arrowZ
   */
		value: function __selectItem__REACT_HOT_LOADER__(item) {
			var _this8 = this;

			if (!item) return;

			if (this.props.groups) return this.selectGroupItem(item);

			var text = item.text,
			    value = item.value;


			if (this.state.type === 'select') {
				this.setState({ text: text, value: value }, function () {
					_this8.toggleMenu();
					_this8.props.onChange ? _this8.props.onChange(value, text) : '';
				});
			} else {
				if (typeof this.state.text === 'string') {
					this.setState({
						text: [text],
						value: [value]
					}, function () {
						_this8.props.onChange ? _this8.props.onChange([value], text) : '';
					});
				} else {
					var splice = void 0;

					this.state.text.map(function (textItem, i) {
						if (text == textItem) {
							splice = i;
						}
					});

					var texts = this.state.text.slice();
					var values = this.state.value.slice();

					if (splice || splice === 0) {
						texts.splice(splice, 1);
						values.splice(splice, 1);
					} else {
						texts.push(text);
						values.push(value);
					}

					this.setState({
						text: texts,
						value: values
					}, function () {
						_this8.props.onChange ? _this8.props.onChange(values, texts) : '';
					});
				}
			}

			if (this.selectRef) this.selectRef.value = text;
		}
	}, {
		key: '__controlScrolling__REACT_HOT_LOADER__',


		/**
   * Event for eny keypress once menu is open
   * @param event
   */
		value: function __controlScrolling__REACT_HOT_LOADER__() {
			var focusedItem = void 0;
			var comboSelectBody = this.bodyRef;
			if (this.props.groups) {
				focusedItem = this.comboSelectRef.getElementsByClassName('combo-select-group__item')[this.focus];
			} else {
				focusedItem = this.comboSelectRef.getElementsByClassName('combo-select-item')[this.focus];
			}
			var specialClassElement = this.comboSelectRef.getElementsByClassName(specialClass)[0];

			var paddingTop = parseInt(comboSelectBody.style.paddingTop);
			var paddingBottom = parseInt(comboSelectBody.style.paddingBottom);

			paddingTop = paddingTop > -1 ? paddingTop : 0;
			paddingBottom = paddingBottom > -1 ? paddingBottom : 0;

			var windowHeight = comboSelectBody.clientHeight - paddingTop - paddingBottom;
			var elementHeight = focusedItem.clientHeight;
			var elementOffsetTop = focusedItem.offsetTop - paddingTop;
			var elementCountPerWindow = Math.floor(windowHeight / elementHeight);
			var scrollTop = specialClassElement.scrollTop;

			if (elementOffsetTop > windowHeight + scrollTop - elementHeight) {
				specialClassElement.scrollTop = elementOffsetTop - (elementCountPerWindow - 1) * elementHeight;
			} else if (elementOffsetTop < scrollTop) {
				specialClassElement.scrollTop = elementOffsetTop;
			} else if (this.focus === 0) {
				specialClassElement.scrollTop = 0;
			}
		}
	}, {
		key: '__globalKeyDown__REACT_HOT_LOADER__',
		value: function __globalKeyDown__REACT_HOT_LOADER__(event) {
			if (this.open) {
				switch (event.keyCode) {
					case 38:
					// Up
					case event.shiftKey && 9:
						// Shift + Tab
						event.preventDefault();

						if (this.props.groups === 'enabled') {
							if (this.state.totalGroupItems > 0) {
								if (this.focus > this.state.totalGroupItems) {
									this.focusItem(0);
								} else {
									this.focusItem(this.focus < 1 ? this.state.totalGroupItems - 1 : this.focus - 1);
								}
								this.controlScrolling();
							}
						} else {
							if (this.state.data.length > 0) {
								if (this.focus > this.state.data.length) {
									this.focusItem(0);
								} else {
									this.focusItem(this.focus < 1 ? this.state.data.length - 1 : this.focus - 1);
								}
								this.controlScrolling();
							}
						}
						break;
					case 40:
					// Down
					case 9:
						// Tab
						event.preventDefault();

						if (this.props.groups === 'enabled') {
							if (this.state.totalGroupItems > 0) {
								if (this.focus > this.state.totalGroupItems) {
									this.focusItem(0);
								} else {
									this.focusItem(this.focus == this.state.totalGroupItems - 1 ? this.focus = 0 : this.focus + 1);
								}
								this.controlScrolling();
							}
						} else {
							if (this.state.data.length > 0) {
								if (this.focus > this.state.data.length) {
									this.focusItem(0);
								} else {
									this.focusItem(this.focus == this.state.data.length - 1 ? this.focus = 0 : this.focus + 1);
								}
								this.controlScrolling();
							}
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
					case 13:
						// Enter
						event.preventDefault();
						if (this.props.groups === 'enabled') {
							if (this.state.totalGroupItems > 0 && this.focus > -1) {
								this.selectItem(this.state.groupItems[this.focus]);
							}
						} else {
							if (this.state.data && this.state.data.length > 0 && this.focus > -1) {
								this.selectItem(this.state.data[this.focus]);
							}
						}
						break;
					case 27:
						// Escape
						event.preventDefault();
						this.toggleMenu();
						break;
				}
			}
		}
	}, {
		key: '__mapAllData__REACT_HOT_LOADER__',
		value: function __mapAllData__REACT_HOT_LOADER__() {
			var _this9 = this;

			var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			var mappedData = [];

			if (Array.isArray(data)) {
				if (this.props.groups) mappedData = data.map(function (group) {
					return _this9.mapGroupData(group);
				});else mappedData = data.map(function (item) {
					return _this9.mapSingleData(item);
				});
			}

			return mappedData;
		}
	}, {
		key: '__mapSingleData__REACT_HOT_LOADER__',
		value: function __mapSingleData__REACT_HOT_LOADER__(item, parent) {
			var text = '';
			var value = '';

			if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object') {
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
				var groupItem = {
					text: text,
					value: value,
					selected: false,
					parent: parent
				};
				if (this.props.value) {
					if (this.props.type === 'multiselect') {
						if (this.props.value.includes(item.value)) {
							groupItem.selected = true;
						}
					} else {
						if (this.props.value === item.value) {
							groupItem.selected = true;
						}
					}
				}
				return groupItem;
			} else return { text: text, value: value };
		}
	}, {
		key: '__mapGroupData__REACT_HOT_LOADER__',
		value: function __mapGroupData__REACT_HOT_LOADER__(group) {
			var _this10 = this;

			if (group.options.length) {
				var data = group.options.map(function (option) {
					return _this10.mapSingleData(option, group.groupName);
				});
				return { groupName: group.groupName, data: data };
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this11 = this;

			var head = this._generateHead();
			var body = this._generateBody();

			return _react2.default.createElement(
				'div',
				_extends({}, (0, _helpers.transformDataAttributes)(this.wrapperDataTransformer, this.props), {
					ref: function ref(el) {
						_this11.comboSelectRef = el;
					},
					className: 'combo-select'
				}),
				head,
				_react2.default.createElement(
					'div',
					{
						style: { display: 'none' },
						className: 'combo-select-body-holder',
						ref: function ref(el) {
							_this11.holderRef = el;
						}
					},
					body
				)
			);
		}
	}]);

	return ComboSelect;
}(_react.Component);

var _default = ComboSelect;
exports.default = _default;


ComboSelect.propTypes = {
	groups: _propTypes2.default.string,
	text: _propTypes2.default.any,
	search: _propTypes2.default.string,
	type: _propTypes2.default.string,
	icon: _propTypes2.default.string,
	iconSelectInactive: _propTypes2.default.any,
	iconSelectActive: _propTypes2.default.any,
	data: _propTypes2.default.array.isRequired,
	onChange: _propTypes2.default.func,
	map: _propTypes2.default.object,
	sort: _propTypes2.default.string,
	controls: _propTypes2.default.bool,
	value: _propTypes2.default.any,
	disabled: _propTypes2.default.bool,
	onToggle: _propTypes2.default.func,
	borderActive: _propTypes2.default.string,
	defaultText: _propTypes2.default.any,
	scrollHeight: _propTypes2.default.number,
	scrollMaxHeight: _propTypes2.default.number,
	preferredDirection: _propTypes2.default.oneOf(['top', 'down']),
	dataAttr: _propTypes2.default.object
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(specialClass, 'specialClass', 'src/Components/ComboSelect.jsx');

	__REACT_HOT_LOADER__.register(ComboSelect, 'ComboSelect', 'src/Components/ComboSelect.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/Components/ComboSelect.jsx');
}();

;