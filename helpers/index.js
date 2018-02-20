

// if stringOrFunction is string result will be that string
// if stringOrFunction is function result will be stringOrFunction(data)
const transformOneDataAttribute = (stringOrFunction, data) => {
	if (typeof stringOrFunction === 'string') {
		return stringOrFunction;
	}
	else if (typeof stringOrFunction === 'function') {
		return stringOrFunction(data);
	}
	throw new Error('dataAttr grand children must be string or function');
}

/*
	transformer = {
		prop1: string | function
		prop2: string | function
		...
	}

	result = {
		data-prop1: transformer[prop1], // if prop1 is string
		data-prop2: transformer[prop1](data) // if prop2 is function
	}
*/
export const transformDataAttributes = (transformer, data) => {
	const returnValue = {};
	Object.keys(transformer).forEach((key) => {
		returnValue['data-' + key] = transformOneDataAttribute(transformer[key], data);
	});
	return returnValue;
}
