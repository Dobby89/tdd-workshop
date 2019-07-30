import { add } from '../index';
import { greet } from '../index';

// describe('AddTest', () => {
// 	it('should add two numbers together', () => {
// 		expect(add(1,2)).toBe(2);
// 	})
// });

describe('Greet', () => {
	it('should return a string "Hello, Bob" when given "Bob"', () => {
		const greeting = greet('Bob');
		expect(greeting).toBe('Hello, Bob');
	});

	it('should return "Hello, my friend." when given null', () => {
		const greeting = greet(null);
		expect(greeting).toBe('Hello, my friend.');
	});

	it('should return "HELLO JERRY!." when given "JERRY"', () => {
		const greeting = greet('JERRY');
		expect(greeting).toBe('HELLO JERRY!');
	});
	it('should return "Hello, Jill and Jane" when given an array of ["Jill", "Jane"]', () => {
		const greeting = greet(['Jill', 'Jane']);
		expect(greeting).toBe('Hello, Jill and Jane.');
	});

	it('should return "Hello, [name], [name], and [name]" when given an array of names', () => {
		const greeting = greet(['Amy', 'Brian', 'Charlotte']);
		expect(greeting).toBe('Hello, Amy, Brian, and Charlotte.');
	});

	it('should return "Hello, [name], [name], AND [NAME]! when given an array of names', () => {
		const greeting = greet(['Amy', 'BRIAN', 'Charlotte']);
		expect(greeting).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
	});
});
