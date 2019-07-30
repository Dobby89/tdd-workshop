export function add(a, b) {
	return a + b;
}

function isAllUppercase(myString) {
	return myString === myString.toUpperCase();
}

function namesByCase(arr) {
	return arr.reduce(
		(acc, name) => {
			if (isAllUppercase(name)) {
				acc.upperCaseNames.push(name);
			} else {
				acc.lowerCaseNames.push(name);
			}
			return acc;
		},
		{ upperCaseNames: [], lowerCaseNames: [] }
	);
}

function greetLowerCaseNames(names) {
	if (!names.length) {
		return '';
	}
	if (names.length > 2) {
		const lastElement = names.pop();
		return `Hello, ${names.join(', ')}, and ${lastElement}.`;
	}
	return `Hello, ${names.join(' and ')}.`;
}

// function greetUpperCaseNames(names) {
// 	if(!names.length) {
// 		return ''
// 	}
// 	ret
// }

export function greet(name) {
	if (name === null) {
		return 'Hello, my friend.';
	}
	if (Array.isArray(name)) {
		const { upperCaseNames, lowerCaseNames } = namesByCase(name);
		const lowerCaseGreetings = greetLowerCaseNames(lowerCaseNames);
		if (upperCaseNames.length && lowerCaseNames.length) {
			return `${lowerCaseGreetings} AND HELLO ${upperCaseNames}!`;
		}
		if (lowerCaseNames.length) {
			return lowerCaseGreetings;
		}
	}
	if (isAllUppercase(name)) {
		return `HELLO ${name}!`;
	}
	return `Hello, ${name}`;
}
