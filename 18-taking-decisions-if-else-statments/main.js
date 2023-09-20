/*

MAKING DECISIONS: IF/ELSE STATEMENTS
if/else control structure

*/

const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// CONDITIONALLY
const birthYear = 2008;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
