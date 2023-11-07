// Data types

// Number
// Numeros no geral

let n= 123;
n = 12.345;

// BigInt
// Numeros maiores que 2^53 - 1

const bigInt = 12312312312312311233131231223123123123123123123123123123123123;

// String
// Texto

let str = 'Hello';
let str2 = "Duas aspas";
let phrase = `usar isso aqui ${str}`;

// Bolean
// True or false
let nameFieldChecked = true;
let ageFiledChecked = false;

let isGreater = 4 > 1;

console.log(isGreater);

// Null

let age = null;
console.log(age);

// Undefined

age = undefined;
console.log(age);

// Objects and Symbols

// MAIS TARDE

// The typeof operator

// Return the type of the operand

typeof undefined; // undefined
typeof 0; // number
typeof 10n; // bigInt
typeof true; // boolean
typeof 'foo'; // string
typeof Symbol("id"); // symbol
typeof Math; //object
typeof null // object
typeof alert // function

// typeof and typeof() are the samme

// Tasks

/*
String quotes
importance: 5
What is the output of the script?

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
*/

let name = 'Marco';

console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name}`);