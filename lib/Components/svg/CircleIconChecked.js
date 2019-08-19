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
		_extends({}, props, { className: 'SvgIconCircleIconChecked' }),
		_react2.default.createElement('path', {
			fill: _index.enabledColor,
			d: 'M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M396.1,203.2L223.5,374.4c-4.7,4.7-12.3,4.6-17-0.1l-90.8-91.5c-4.7-4.7-4.6-12.3,0.1-17l22.7-22.5c4.7-4.7,12.3-4.6,17,0.1l59.8,60.3l141.4-140.2c4.7-4.7,12.3-4.6,17,0.1l22.5,22.7C400.9,191,400.8,198.6,396.1,203.2z'
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

	__REACT_HOT_LOADER__.register(DropDownIcon, 'DropDownIcon', 'src/Components/svg/CircleIconChecked.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/Components/svg/CircleIconChecked.jsx');
}();

;