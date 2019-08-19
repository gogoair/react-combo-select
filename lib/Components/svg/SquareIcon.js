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
		_extends({}, props, { className: 'SvgIconSquareIcon' }),
		_react2.default.createElement('path', {
			fill: _index.disabledColor,
			d: 'M432,32H80c-26.5,0-48,21.5-48,48v352c0,26.5,21.5,48,48,48h352c26.5,0,48-21.5,48-48V80C480,53.5,458.5,32,432,32z M432,432H80V80h352V432z'
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

	__REACT_HOT_LOADER__.register(DropDownIcon, 'DropDownIcon', 'src/Components/svg/SquareIcon.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/Components/svg/SquareIcon.jsx');
}();

;