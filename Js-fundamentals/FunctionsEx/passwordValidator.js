
// Write a function that checks if a given password is valid. Password validations are:
// The length should be 6 - 10 characters (inclusive)
// It should consist only of letters and digits
// It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// "Password must be between 6 and 10 characters"
// "Password must consist only of letters and digits"
// "Password must have at least 2 digits"




function passValidation(set1){
let checkForLengt = lenghtCheck(set1);
let  checkForDigitsandLetters = lettersAndDigitCheck(set1);
let checkForDigitsCount = checkforCount(set1)


if ( checkForLengt && checkForDigitsandLetters && checkForDigitsCount ){ console.log("Password is valid");}






function lenghtCheck(set){
if( set.length >=6 && set.length <= 10 ) { return true} else {
    
    console.log("Password must be between 6 and 10 characters");
    return false}
    
}

function lettersAndDigitCheck(set){
for (const current of set) {
let char = current.charCodeAt();

if(!(( char >=48 && char <=57)||( char >=65 && char <=90)||( char >=97 && char <=122))){ 
        
        console.log("Password must consist only of letters and digits");
        return false




    
}

}
return true
}


function checkforCount(set){

    let digitCount= 0

    for (const digit of set) {

        toCheck = digit.charCodeAt()

        if( toCheck>=48 && toCheck <=57){
             digitCount++
        }
        
    }

if (digitCount<2) { 
    console.log("Password must have at least 2 digits"); 
    return false
}else { return true}

}





}
passValidation('Pa$s$s')