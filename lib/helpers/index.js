'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.throttle = exports.generateInput = exports.formatLength = exports.transformDataAttributes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CircleIcon = require('../Components/svg/CircleIcon');

var _CircleIcon2 = _interopRequireDefault(_CircleIcon);

var _CircleIconChecked = require('../Components/svg/CircleIconChecked');

var _CircleIconChecked2 = _interopRequireDefault(_CircleIconChecked);

var _SquareIcon = require('../Components/svg/SquareIcon');

var _SquareIcon2 = _interopRequireDefault(_SquareIcon);

var _SquareIconChecked = require('../Components/svg/SquareIconChecked');

var _SquareIconChecked2 = _interopRequireDefault(_SquareIconChecked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// if stringOrFunction is string result will be that string
// if stringOrFunction is function result will be stringOrFunction(data)
var transformOneDataAttribute = function transformOneDataAttribute(stringOrFunction, data) {
	if (typeof stringOrFunction === 'string') {
		return stringOrFunction;
	} else if (typeof stringOrFunction === 'function') {
		return stringOrFunction(data);
	}
	throw new Error('dataAttr grand children must be string or function');
};

/*
    SAMPLE:

	transformer = {
		prop1: string | function
		prop2: string | function
		...
	}

	result = {
		data-prop1: transformer[prop1], // if prop1 is string
		data-prop2: transformer[prop1](data) // if prop2 is function
	}

	if prop is string result object[prop] will be that string
	if prop is function result object[prop] will be prop(data)
*/
var transformDataAttributes = exports.transformDataAttributes = function transformDataAttributes(transformer, data) {
	var returnValue = {};
	Object.keys(transformer).forEach(function (key) {
		returnValue['data-' + key] = transformOneDataAttribute(transformer[key], data);
	});
	return returnValue;
};

var formatLength = exports.formatLength = function formatLength(numberOrString) {
	if (typeof numberOrString === 'number') {
		return numberOrString + 'px';
	}
	return numberOrString;
};

var generateInput = exports.generateInput = function generateInput(_ref) {
	var selected = _ref.selected,
	    type = _ref.type,
	    iconSelectActive = _ref.iconSelectActive,
	    iconSelectInactive = _ref.iconSelectInactive,
	    handleClick = _ref.handleClick;

	var input = void 0;

	if (type == 'select') {
		if (selected) {
			if (iconSelectActive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = _react2.default.createElement(_CircleIconChecked2.default, { onClick: handleClick });
			} else if (iconSelectActive === false || iconSelectActive === 'off') {
				input = '';
			} else {
				input = _react2.default.createElement('i', { className: iconSelectActive });
			}
		} else {
			if (iconSelectInactive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = _react2.default.createElement(_CircleIcon2.default, { onClick: handleClick });
			} else if (iconSelectInactive === false || iconSelectInactive === 'off') {
				input = '';
			} else {
				input = _react2.default.createElement('i', { className: iconSelectInactive });
			}
		}
	} else {
		// multiselect
		var onClick = function onClick(event) {
			event.stopPropagation();
			handleClick && handleClick(event);
		};

		if (selected) {
			if (iconSelectActive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = _react2.default.createElement(_SquareIconChecked2.default, { onClick: onClick });
			} else if (iconSelectActive === false || iconSelectActive === 'off') {
				input = '';
			} else {
				input = _react2.default.createElement('i', { className: iconSelectActive });
			}
		} else {
			if (iconSelectInactive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = _react2.default.createElement(_SquareIcon2.default, { onClick: onClick });
			} else if (iconSelectInactive === false || iconSelectInactive === 'off') {
				input = '';
			} else {
				input = _react2.default.createElement('i', { className: iconSelectInactive });
			}
		}
	}
	return input;
};

var throttle = exports.throttle = function throttle(func, limit) {
	var lastFunc = void 0;
	var lastRan = void 0;
	return function () {
		var context = this;
		var args = arguments;
		if (!lastRan) {
			func.apply(context, args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(function () {
				if (Date.now() - lastRan >= limit) {
					func.apply(context, args);
					lastRan = Date.now();
				}
			}, limit - (Date.now() - lastRan));
		}
	};
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(transformOneDataAttribute, 'transformOneDataAttribute', 'src/helpers/index.js');

	__REACT_HOT_LOADER__.register(transformDataAttributes, 'transformDataAttributes', 'src/helpers/index.js');

	__REACT_HOT_LOADER__.register(formatLength, 'formatLength', 'src/helpers/index.js');

	__REACT_HOT_LOADER__.register(generateInput, 'generateInput', 'src/helpers/index.js');

	__REACT_HOT_LOADER__.register(throttle, 'throttle', 'src/helpers/index.js');
}();

;