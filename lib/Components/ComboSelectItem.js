'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable  */

var ComboSelectItem = function (_Component) {
	_inherits(ComboSelectItem, _Component);

	function ComboSelectItem() {
		_classCallCheck(this, ComboSelectItem);

		return _possibleConstructorReturn(this, (ComboSelectItem.__proto__ || Object.getPrototypeOf(ComboSelectItem)).apply(this, arguments));
	}

	_createClass(ComboSelectItem, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    item = _props.item,
			    selected = _props.selected,
			    index = _props.index,
			    focused = _props.focused,
			    type = _props.type,
			    selectItem = _props.selectItem,
			    focusItem = _props.focusItem,
			    iconSelectActive = _props.iconSelectActive,
			    iconSelectInactive = _props.iconSelectInactive,
			    restProps = _objectWithoutProperties(_props, ['item', 'selected', 'index', 'focused', 'type', 'selectItem', 'focusItem', 'iconSelectActive', 'iconSelectInactive']);

			var id = this.props.item && this.props.item.value && this.props.item.value.id ? this.props.item.value.id : null;
			var input = (0, _helpers.generateInput)({
				selected: this.props.selected,
				type: this.props.type,
				iconSelectActive: this.props.iconSelectActive,
				iconSelectInactive: this.props.iconSelectInactive,
				handleClick: function handleClick() {
					return selectItem(item);
				}
			});

			return _react2.default.createElement(
				'div',
				_extends({}, restProps, {
					key: id ? id : index,
					className: 'combo-select-item' + (selected || focused ? ' selected' : '') + (input == '' ? ' no-icon' : ''),
					onClick: function onClick() {
						return selectItem(item);
					},
					onMouseEnter: function onMouseEnter() {
						return focusItem(index);
					},
					role: 'option'
				}),
				input,
				item.text
			);
		}
	}]);

	return ComboSelectItem;
}(_react.Component);

var _default = ComboSelectItem;
exports.default = _default;


ComboSelectItem.propTypes = {
	item: _propTypes2.default.any,
	index: _propTypes2.default.number,
	focused: _propTypes2.default.bool,
	selected: _propTypes2.default.bool,
	type: _propTypes2.default.string,
	selectItem: _propTypes2.default.func,
	focusItem: _propTypes2.default.func,
	iconSelectActive: _propTypes2.default.any,
	iconSelectInactive: _propTypes2.default.any
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ComboSelectItem, 'ComboSelectItem', 'src/Components/ComboSelectItem.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/Components/ComboSelectItem.jsx');
}();

;