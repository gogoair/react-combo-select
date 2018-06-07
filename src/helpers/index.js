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
