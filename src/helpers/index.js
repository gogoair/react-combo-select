import React from 'react';

import CircleIcon from '../Components/svg/CircleIcon';
import CircleIconChecked from '../Components/svg/CircleIconChecked';
import SquareIcon from '../Components/svg/SquareIcon';
import SquareIconChecked from '../Components/svg/SquareIconChecked';

// if stringOrFunction is string result will be that string
// if stringOrFunction is function result will be stringOrFunction(data)
const transformOneDataAttribute = (stringOrFunction, data) => {
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
export const transformDataAttributes = (transformer, data) => {
	const returnValue = {};
	Object.keys(transformer).forEach(key => {
		returnValue['data-' + key] = transformOneDataAttribute(transformer[key], data);
	});
	return returnValue;
};

export const formatLength = numberOrString => {
	if (typeof numberOrString === 'number') {
		return numberOrString + 'px';
	}
	return numberOrString;
};

export const generateInput = ({ selected, type, iconSelectActive, iconSelectInactive, handleClick }) => {
	let input;

	if (type == 'select') {
		if (selected) {
			if (iconSelectActive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = <CircleIconChecked onClick={handleClick} />;
			} else if (iconSelectActive === false || iconSelectActive === 'off') {
				input = '';
			} else {
				input = <i className={iconSelectActive} />;
			}
		} else {
			if (iconSelectInactive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = <CircleIcon onClick={handleClick} />;
			} else if (iconSelectInactive === false || iconSelectInactive === 'off') {
				input = '';
			} else {
				input = <i className={iconSelectInactive} />;
			}
		}
	} else {
		// multiselect
		const onClick = (event) => {
			event.stopPropagation();
			handleClick && handleClick(event);
		};

		if (selected) {
			if (iconSelectActive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = <SquareIconChecked onClick={onClick} />;
			} else if (iconSelectActive === false || iconSelectActive === 'off') {
				input = '';
			} else {
				input = <i className={iconSelectActive} />;
			}
		} else {
			if (iconSelectInactive === true || iconSelectActive === undefined || iconSelectActive === null) {
				input = <SquareIcon onClick={onClick} />;
			} else if (iconSelectInactive === false || iconSelectInactive === 'off') {
				input = '';
			} else {
				input = <i className={iconSelectInactive} />;
			}
		}
	}
	return input;
};

export const throttle = (func, limit) => {
	let lastFunc;
	let lastRan;
	return function() {
		const context = this;
		const args = arguments;
		if (!lastRan) {
			func.apply(context, args);
			lastRan = Date.now();
		} else {
			clearTimeout(lastFunc);
			lastFunc = setTimeout(function() {
				if (Date.now() - lastRan >= limit) {
					func.apply(context, args);
					lastRan = Date.now();
				}
			}, limit - (Date.now() - lastRan));
		}
	};
};
