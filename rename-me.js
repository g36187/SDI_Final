/* Checks a string to see if matches a phone number pattern */

var testStrings = ["123-456-7890","123-45-6789","1234-567-890"];

var checkString = function (testStrings){
	for (var i = 0; i < testStrings.length; i++){
		var pNum = testStrings [i];
		if (pNum.charAt(3)=="-" && pNum.charAt(7)=="-"){ // Use a boolean check for matching characters
			console.log (pNum + " is a phone number!");
		}
		else {
			console.log (pNum + " is not a phone number!");
		}
	}
}

checkString (testStrings);

/* --------------------------------------------------------- */
