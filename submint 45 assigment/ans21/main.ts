

//  conditional
let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'Subaru'? I predict True.");
console.log(car !== 'Subaru');

console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford');

console.log("Is car < 'volvo'? I predict False.");
console.log(car < 'volvo');

console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru');

console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');

const number: number = 10;

console.log("Is number > 5 && number < 15? I predict True.");
console.log(number > 5 && number < 15);

console.log("Is number > 5 || number < 0? I predict True.");
console.log(number > 5 || number < 0);

const fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
