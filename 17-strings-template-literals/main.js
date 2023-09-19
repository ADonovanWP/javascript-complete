/*

STRINGS AND TEMPLATE LITERALS

*/

const firstName = "Fred";
const job = "Machine Operator";
const birthYear = 1963;
const year = 2037;

const flintstone =
  "I'm " +
  firstName +
  ", a " +
  (year - birthYear) +
  " years old" +
  " " +
  job +
  "!";

const flintstoneNew = `I'm ${firstName}, a ${
  year - birthYear
} years old ${job}!`;

console.log(flintstone);
console.log(flintstoneNew);

console.log(`I'm just a regular string...`);

console.log(
  "string with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
