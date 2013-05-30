/* Calls all of the functions one by one and returns the proper values */

var nLibstance = new qLib(); // Instantiate qLib

// Vars for Fuzzy matching
var fuzOne = 9;
var fuzTwo = 20;
var fuzThree = 50;

// Logs for results
console.log ("Is this a phone number? " + nLibstance.checkString ("123-456-7890"));
console.log ("Is this a proper email address? " + nLibstance.checkIfMail ("hello@there.com"));
console.log ("Is this a proper domain? " + nLibstance.checkIfSecure ("https://hello.com"));
console.log ("Uppercase first letter : " + nLibstance.caseSplitter ("hello there"));
console.log ("This is the replaced output : " + nLibstance.argenator ("harry,ron,hermoine",",","/"));
console.log ("This is the number cut into 2 decimal places " + nLibstance.decibus (6.04103597087));

console.log (fuzOne + " is " + nLibstance.fuzzyLogic(fuzOne,fuzTwo,fuzThree)[0] + " than " + fuzTwo);
console.log (fuzOne + " is " + nLibstance.fuzzyLogic(fuzOne,fuzTwo,fuzThree)[1] + " of " + fuzTwo);


 