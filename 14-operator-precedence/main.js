/*

OPERATOR PRECEDENCE

PEMDAS:

Parentheses
Exponents
Multiply
Divide
Add
Subtract

*/

const now = 2037;
const ageFred = now - 2008;
const ageWilma = now - 2003;

console.log(now - 2008 > now - 2003);

// console.log(25 - 10 - 5); // = 10

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageFred + ageWilma) / 2;
console.log(ageFred, ageWilma, averageAge);
console.log(averageAge);
