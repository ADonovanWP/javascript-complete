/*

BASIC OPERATORS

*/

//* Math Operators
const now = 2037;

const ageFred = now - 1973;
const ageSarah = now - 2018;
console.log(ageFred, ageSarah);

console.log(ageFred * 2, ageFred / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 2 * 2 * 2

const firstName = "Wilma";
const lastName = "Flintstone";
console.log(firstName + " " + lastName);

//* Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

//* Comparison Operators

//* >, <, >=, <=,
console.log(ageFred > ageSarah);
console.log(ageFred < ageSarah);
console.log(ageSarah >= 18);
console.log(ageSarah <= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
