/*


* EQUALITY OPERATORS: == vs. ===


*/

const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)"); //!  true: ALWAYS USE THIS WHEN YOU CAN!

if (age === 19) console.log("You just became an adult"); //false

if (age == 18) console.log("You just became an adult :D (loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);

if (favorite === 23) {
  console.log("cool 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("Why not 23");
}
