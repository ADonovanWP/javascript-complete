/*

USE CONST AS DEFAULT AND USE LET SPARINGLY

You want to limit mutations of variables.

NEVER USE VAR, you may see some in legacy code.

*/

let age = 30;
age = 31;

const birthYear = 2008;

var job = "bus boy";
job = "cook";

lastName = "Simpson"; // terrible idea, refrain from doing this...
console.log(lastName);
