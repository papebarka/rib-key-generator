// import RIB from "rib_key.mjs";

/*
 *
 *
 * 
 * 
 * 
 * 
 */


function toNumeric(characters) {
	return parseInt(characters);
}

/*
* To map the characters (non digit) to digit
* Takes a single character as parameter
* returns a digit if mappable
*/

function mapCharacters(character) {
	/*
	 * Characters 
	 * A,J -> 1
	 * B,K,S -> 2
	 * C,L,T -> 3
	 * D,M,U -> 4
	 * E,N,V -> 5
	 * F,O,W -> 6
	 * G,P,X -> 7
	 * H,Q,Y -> 8
	 * I,R,Z -> 9
	 */

	switch(character) {
		case "A":
		case "J":
			return "1";
			break;
		
		case "B":
		case "K":
		case "S":
			return "2";
			break;

		case "C":
		case "L":
		case "T":
				return "3";
				break;
		
		case "D":
		case "M":
		case "U":
				return "4";
				break;

		case "E":
		case "N":
		case "V":
			return "5";
			break;
		
		case "F":
		case "O":
		case "W":
			return "6";
			break;

		case "G":
		case "P":
		case "X":
			return "7";
			break;

		case "H":
		case "Q":
		case "Y":
			return "8";
			break;

		case "I":
		case "R":
		case "Z":
			return "9";
			break;

		default:
			return character.toString();
			break;
	}
}

function formatSequence(character) {

	let sequence = Array.from(character).map(function(element){
		return mapCharacters(element);
	});
    console.log("Element joined: ", sequence.join(""));

    if(sequence.length > 0) {
        return sequence.join("");
    }

    return 0;
	
}

// To generate the RIB key
function generateRIB(bankCode, counterCode, accountNo) {
	/*
	 *
	 * RIB key = 97 - ( (89*bank_code + 15*counter_code + 3*account_no) % 97)
	 * 
	 */
    bankCode = toNumeric(formatSequence(bankCode));
    console.log("Bank Code: ", bankCode);

    counterCode = toNumeric(formatSequence(counterCode));
    console.log("Bank Code: ", counterCode);

    accountNo = toNumeric(formatSequence(accountNo));
    console.log("Bank Code: ", accountNo);

	let ribKey = 97 - ( (89 * bankCode + 15 * counterCode + 3 * accountNo) % 97 );

	return ribKey;
}

// Compute RIB

function RIB(bankCode, counterCode, accountNo) {
	return generateRIB(bankCode, counterCode, accountNo)
}

/*
 *
 *
 * 
 * 
 * 
 * 
 */



function removeSpace(input){
    return input.replace(/\s+/g, '');
}

function validateData(bankCode, counterCode, accountNo) {
    let validationErrors = [];

    return validationErrors;
}


document.addEventListener('DOMContentLoaded', function() {


    let bankCode, counteCode, accountNo = 0;
    
    //alert("Loaded");

    const keyContainerSection = document.getElementById("key-container-section");
    const keyContainer = document.getElementById("key-container");
    const computeButton = document.getElementById("compute");
    computeButton.addEventListener("click", computeRIB);


    function displayRIB(ribKey) {
        keyContainer.innerHTML = ribKey;
    }

    function computeRIB() {
        //console.log("Here");
        let bankCode = document.getElementById("bank-code").value;
        let counterCode = document.getElementById("counter-code").value;
        let accountNo = document.getElementById("account-no").value;

        bankCode = removeSpace(bankCode);
        counterCode = removeSpace(counterCode);
        accountNo = removeSpace(accountNo);

        let ribKey = RIB(bankCode, counterCode, accountNo);
        
        displayRIB(ribKey);
    }

});