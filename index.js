export function add(a, b) {
	return a + b;
}

function isAllUppercase(myString) {
	return myString === myString.toUpperCase();
}

export function greet(name) {
	if(name === null) {
		return 'Hello, my friend.'
	}
	if (Array.isArray(name)) {
		if(name.length > 2) {
			const lastElement = name.pop()
			return `Hello, ${name.join(', ')}, and ${lastElement}.`
		}
		return `Hello, ${name.join(' and ')}.`;
	}
	if(isAllUppercase(name)) {
		return `HELLO ${name}!`;
	}
	return `Hello, ${name}`;
}
