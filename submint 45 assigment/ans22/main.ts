


// File: more_conditional_tests.ts
const text: string = 'Hello';

console.log("Is text.toLowerCase() === 'hello'? I predict True.");
console.log(text.toLowerCase() === 'hello');

const number: number = 10;

console.log("Is number == '10'? I predict True.");
console.log(number == 10);

console.log("Is number != '5'? I predict True.");
console.log(number != 5);

console.log("Is number > 5 && number < 15? I predict True.");
console.log(number > 5 && number < 15);

console.log("Is number >= 10 || number < 0? I predict True.");
console.log(number >= 10 || number < 0);

const fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
