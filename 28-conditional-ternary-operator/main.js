/*


THE CONDITIONAL (TERNARY) OPERATOR
A ternary operator lets you simplify an if/else statement into one line of code.
condition then if then else

TERNARY OPERATOR IS REALLY CONSIDERED AN EXPRESSION

REMEMBER THAT A TERNARY OPERATOR IS NOT A REPLACEMENT FOR AN IF STATEMENT.
We still need if/else all the time.
For example when we have bigger blocks of code
that we need to execute based on a condition.
In that case the ternary operator is not gonna work.
But the ternary operator is perfect
when we just need to make a quick decision

*/

const age = 23;
age >= 18 // this is the condition
  ? console.log("I like to drink Coffee!") // this is considered the if
  : console.log("I like to drink koolaid!"); // this is considered the else

const drink = age >= 18 ? "Coffee" : "Koolaid";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "Coffee";
} else {
  drink2 = "Koolaid";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "Coffee" : "Koolaid"}`);
