export const formatLength = (numberOrString) => {
	if (typeof numberOrString === 'number') {
		return numberOrString + 'px';
	}
	return numberOrString;
}