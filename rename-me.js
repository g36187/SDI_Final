/* Checks a string to see if matches a phone number pattern */

var testStrings = ["123-456-7890","123-45-6789","1234-567-890"];

var checkString = function (testStrings){
	for (var i = 0; i < testStrings.length; i++){
		var pNum = testStrings [i];
		if (pNum.charAt(3)=="-" && pNum.charAt(7)=="-"){ // Use a boolean check for absolute "-" character placement
			console.log (pNum + " is a phone number!");
		}
		else {
			console.log (pNum + " is not a phone number!");
		}
	}
}

checkString (testStrings);

/* --------------------------------------------------------- */

/* Checks a string to see if it's a valid email address */
var emailDomains = ["hello@there.com","hello@there"];

var checkIfMail = function (emailDomains){
	for (var j = 0; j < emailDomains.length; j++){
		var mailName = emailDomains [j];
		var lookForAt = mailName.search("@");  // Looks for the @ symbol
		    lookForDotCom = mailName.search(".com"); // Looks for the .com
		if (lookForAt != (-1) && lookForDotCom != (-1)){   // Boolean compares to make sure they are both there
			console.log (mailName + " is proper email address.");
		}
		else{
				console.log (mailName + " is not a proper email address.");
		}
	}
}

checkIfMail (emailDomains);

/* ---------------------------------------------------------- */

/* Checks for secure HTTP */
