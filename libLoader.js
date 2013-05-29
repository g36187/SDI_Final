/* Calls all of the functions one by one and returns the proper values */

var nLibstance = new qLib(); // Instantiate qLib

console.log ("Is this a phone number? " + nLibstance.checkString ("123-456-7890"));
console.log ("Is this a proper email address? " + nLibstance.checkIfMail ("hello@there.com"));
console.log ("Is this a proper domain? " + nLibstance.checkIfSecure ("https://hello.com"));
console.log ("Uppercase first letter : " + nLibstance.caseSplitter ("hello there"));