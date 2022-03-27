// Assignment Code
var generateBtn = document.querySelector("#generate");






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//types of array

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]
var uppercase = lowercase.toUpperCase();

console.log(uppercase)


//prompt when click generate password
//length of the password 8 characters and no more than 128 characters
//lowercase, uppercase, numeric, and/or special characters