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

/* -------------------------------------------------------- */

/* Split into words and then Upcase only the first letter of each word */

var caseSplitter = function (jumbleWords){
	var stringy = jumbleWords.charAt(0).toUpperCase() + jumbleWords.slice(1); //Uppercases the first letter. Leaves the rest. 
	return stringy; //Re-visit later to see if you can figure out how to do each word individually.. maybe try split?
}

/* -------------------------------------------------------- */

/* Three args enter, one arg leaves */

var argenator = function (stringularity, sepOne, sepTwo){
	var returnicus = stringularity.split(sepOne).join(sepTwo); // Find the seperator then replace and join w/new seperator
	return returnicus;
}

/* ---------------------------------------------------------- */

/* Cut the decimals! */

var decibus = function (numPut, decPlaces){
	var numOut = numPut.toFixed(2);
	return numOut;
}




/* Return Objects to the outside world */

return {
	"checkString" : checkString,
	"checkIfMail" : checkIfMail,
	"checkIfSecure" : checkIfSecure,
	"caseSplitter" : caseSplitter,
	"argenator" : argenator,
	"decibus" : decibus
}

} // Ends the qLib


