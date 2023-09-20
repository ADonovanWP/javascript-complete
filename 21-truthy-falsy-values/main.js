/*


TRUTHY AND FALSY VALUES

 > We only have 5 falsy values: 0, '', undefined, null, and NaN

*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Fred"));
console.log(Boolean({}));

const money = 10;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job");
}

let height;

if (height) {
  console.log("Yay, height is defined");
} else {
  console.log("Height is undefined");
}

let height1 = 10;

if (height1) {
  console.log("Yay, height is defined");
} else {
  console.log("Height is undefined");
}
