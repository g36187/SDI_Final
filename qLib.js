/* This is the main library. You'll find no console logs here! */

var qLib = function(){

/* Checks a string to see if matches a phone number pattern */	

var checkString = function (testString){
		if (testString.charAt(3)=="-" && testString.charAt(7)=="-"){ // Find absolute position of dashes
			return true;
		}
		else {
			return false;
		}
}

/* -------------------------------------------------------- */

/* Checks a string to see if it's a valid email address */

var checkIfMail = function (emailDomains){
		var lookForAt = emailDomains.search("@");  // Looks for the @ symbol
		    lookForDotCom = emailDomains.search(".com"); // Looks for the .com
		if (lookForAt != (-1) && lookForDotCom != (-1)){   // Boolean compares to make sure they are both there
			return true;
		}
		else{
			return false;
		}
}

/* -------------------------------------------------------- */

/* Checks for secure HTTP */

var checkIfSecure = function (domains){
		if (domains.indexOf("s")==4 && domains.substring(0,4)=="http"){ //Boolean check for https at the beginning
			return true;
		}
		else {
			return false;
		}
}


/* ---------------------------------------------------------- */

/* Split into words and then Upcase only the first letter of each word */

var caseSplitter = function (jumbleWords){
	if 
}


/* Return Objects to the outside world */

return {
	"checkString" : checkString,
	"checkIfMail" : checkIfMail,
	"checkIfSecure" : checkIfSecure,
	"caseSplitter" : caseSplitter
}

} // Ends the qLib

