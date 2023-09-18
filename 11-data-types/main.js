// Data Types
// values is either an object or a primitive

/* 

THE 7 PRIMITIVE DATA TYPES

1. Number: Floating point numbers 👉🏼 Used for decimals and integers: let age = 23;

2. String: Sequence of characters 👉🏼 used for text: let firstName = 'Fred';

3. Boolean: Logical type that can only be true or false 👉🏼 Used for making decisions: let fullAge = true;

4. Undefined: Value taken by variable that is not yet defined("empty value"): let children;

5. Null: Also means 'empty value'

6. Symbol (INTRODUCED IN ES2015): Value that is unique and cannot be changed [Not useful for now]

7. BigInt (INTRODUCED IN ES2020): Larger integers than the Number type can hold

JAVASCRIPT HAS DYNAMIC TYPING:  We do NOT have to manually define the data type of the value stored in a variable. Instead, data types are determined AUTOMATICALLY.

Value has type, NOT variable!

*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Keith");

//* dynamic typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

//* Undefined
let year;
console.log(year);
console.log(typeof year);

year = 2023;
console.log(year);
console.log(typeof year);

console.log(typeof null); // this is considered a bug
