/*

TYPE CONVERSION AND COERCION
Conversion = manually converts

JavaScript is a dynamically typed language, which means you don't have to specify the data type (like number, string, etc) when you declare a variable. The data type is determined automatically based on the value that is assigned.

Coercion = automatically converts (behind scenes)

Type coercion is when JavaScript automatically converts a value from one data type to another.

Value Types:

*/

//* Type conversion

const firstName = "Fred";
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18); // this is a string not a number
console.log(Number(inputYear) + 18); // this is converted into a number now

console.log(Number(firstName));
console.log(typeof NaN);

console.log(String(23), 23); // = 23 23

//* type coercion

console.log("I am " + String(23) + " years old"); // Behind the scenes
console.log("I am " + 23 + " years old");

console.log("23" - "10" - 3); // = 10
console.log("23" + "10" + 3); // = 23103

console.log("23" * 2); // = 46
console.log("23" / 2); // = 11.5

let n = "1" + 1; // = 11
n = n - 1; // = 10
console.log(n); // = 10
