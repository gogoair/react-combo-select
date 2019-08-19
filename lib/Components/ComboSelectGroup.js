'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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


var ComboSelectGroup = function (_Component) {
	_inherits(ComboSelectGroup, _Component);

	function ComboSelectGroup() {
		_classCallCheck(this, ComboSelectGroup);

		return _possibleConstructorReturn(this, (ComboSelectGroup.__proto__ || Object.getPrototypeOf(ComboSelectGroup)).apply(this, arguments));
	}

	_createClass(ComboSelectGroup, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    _props$item = _props.item,
			    data = _props$item.data,
			    groupName = _props$item.groupName,
			    selected = _props.selected,
			    index = _props.index,
			    focus = _props.focus,
			    type = _props.type,
			    selectItem = _props.selectItem,
			    focusItem = _props.focusItem,
			    iconSelectActive = _props.iconSelectActive,
			    iconSelectInactive = _props.iconSelectInactive,
			    restProps = _objectWithoutProperties(_props, ['item', 'selected', 'index', 'focus', 'type', 'selectItem', 'focusItem', 'iconSelectActive', 'iconSelectInactive']);

			return _react2.default.createElement(
				'div',
				{ className: 'combo-select-group' },
				_react2.default.createElement(
					'h4',
					{ tabIndex: '-1' },
					groupName
				),
				_react2.default.createElement(
					'div',
					{ className: 'combo-select-group__wrapper', role: 'list' },
					data && data.map(function (option, i) {
						return _react2.default.createElement(
							'span',
							{
								key: option.value,
								role: 'option',
								onClick: function onClick() {
									return selectItem(option);
								},
								onKeyDown: function onKeyDown(e) {
									return console.log(e);
								},
								className: 'combo-select-group__item' + (option.selected || focus === index ? ' selected' : ''),
								onMouseEnter: function onMouseEnter() {
									return focusItem(i + index);
								}
							},
							(0, _helpers.generateInput)({
								selected: option.selected,
								type: type,
								iconSelectActive: iconSelectActive,
								iconSelectInactive: iconSelectInactive,
								handleClick: function handleClick() {
									return selectItem(option);
								}
							}),
							_react2.default.createElement('span', { style: { margin: '0 3px' } }),
							option.text
						);
					})
				)
			);
		}
	}]);

	return ComboSelectGroup;
}(_react.Component);

var _default = ComboSelectGroup;
exports.default = _default;


ComboSelectGroup.propTypes = {
	item: _propTypes2.default.shape({
		text: _propTypes2.default.string,
		selected: _propTypes2.default.bool
	}),
	type: _propTypes2.default.string,
	selectItem: _propTypes2.default.func,
	iconSelectActive: _propTypes2.default.any,
	iconSelectInactive: _propTypes2.default.any
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ComboSelectGroup, 'ComboSelectGroup', 'src/Components/ComboSelectGroup.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/Components/ComboSelectGroup.jsx');
}();

;