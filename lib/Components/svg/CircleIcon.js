'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./ReactSvgIcon/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDownIcon = function DropDownIcon(props) {
	return _react2.default.createElement(
		_index2.default,
		_extends({}, props, { className: 'SvgIconCircleIcon' }),
		_react2.default.createElement('path', {
			fill: _index.disabledColor,
			d: 'M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M256,456c-110.5,0-200-89.5-200-200S145.5,56,256,56s200,89.5,200,200S366.5,456,256,456z'
		})
	);
};

var _default = DropDownIcon;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DropDownIcon, 'DropDownIcon', 'src/Components/svg/CircleIcon.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/Components/svg/CircleIcon.jsx');
}();

;