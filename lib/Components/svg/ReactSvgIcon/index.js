'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.enabledColor = exports.disabledColor = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../../../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var disabledColor = exports.disabledColor = '#d1d3d4';
var enabledColor = exports.enabledColor = '#45b3e3';

var ReactSvgIcon = function ReactSvgIcon() {
	var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	var width = props.width,
	    height = props.height,
	    children = props.children,
	    restProps = _objectWithoutProperties(props, ['width', 'height', 'children']);

	return _react2.default.createElement(
		'svg',
		_extends({
			xmlns: 'http://www.w3.org/2000/svg',
			xmlnsXlink: 'http://www.w3.org/1999/xlink',
			viewBox: '0 0 512 512'
		}, restProps, {
			width: width && (0, _helpers.formatLength)(width) || '1em',
			height: height && (0, _helpers.formatLength)(height) || '1em'
		}),
		children
	);
};

ReactSvgIcon.propTypes = {
	width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	children: _propTypes2.default.node
};

var _default = ReactSvgIcon;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(disabledColor, 'disabledColor', 'src/Components/svg/ReactSvgIcon/index.jsx');

	__REACT_HOT_LOADER__.register(enabledColor, 'enabledColor', 'src/Components/svg/ReactSvgIcon/index.jsx');

	__REACT_HOT_LOADER__.register(ReactSvgIcon, 'ReactSvgIcon', 'src/Components/svg/ReactSvgIcon/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', 'src/Components/svg/ReactSvgIcon/index.jsx');
}();

;