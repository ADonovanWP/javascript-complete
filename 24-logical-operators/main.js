/*


* Logical Operators


*/

const hasDriversLicense = true; // a
const hasGoodVision = true; // b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("You are able to drive!");
// } else {
//   console.log("You are not able to drive!");
// }

const isTired = false; // c
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("You are able to drive!");
} else {
  console.log("You are not able to drive!");
}
