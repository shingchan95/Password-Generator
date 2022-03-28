


//types of array

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase = ['A','B','C','D','E','F','G','H','I','J','J','L','M','N','O','P','Q','R','S','T','U','V','w','X','Y','Z']
var specialCharacters = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@",'[',"\\",']','^',"_","`","{","|","}","~"]
var numeric=['1','2','3','4','5','6','7','8','9','0']
var prePassword=[]
var newPassword=[]
var newPasswordindex=[]
var finalPassword=[]
var i=0

//prompt when click generate password



var firstEntry = window.prompt("Length of the password (please input 8-128)")
var passwordLength = parseInt(firstEntry)


while (passwordLength <8 || passwordLength>128)
{
  passwordLength= window.prompt("Error! please try again!"+"/n"+"Length of the password (please input 8-128)")
  
}


var quesLowercase= window.confirm("Including lowercase?")
if (quesLowercase){
    prePassword= prePassword.concat(lowercase);
    lowercaseIndex= (Math.floor(Math.random() * lowercase.length));
    newPassword.push(lowercase[lowercaseIndex]);
    i++
    
  }
  
  var quesUppercase= window.confirm("Including uppercase?")
  if (quesUppercase){
    prePassword=prePassword.concat(uppercase);
    uppercaseIndex= (Math.floor(Math.random() * uppercase.length));
    newPassword.push(uppercase[uppercaseIndex]);
    i++
  }
  
  var quesSpecial= window.confirm("Including specialCharacters?")
  if (quesSpecial){
    prePassword=prePassword.concat(specialCharacters);
    specialcharactersIndex= (Math.floor(Math.random() * specialCharacters.length));
    newPassword.push(specialCharacters[specialcharactersIndex]);
    i++
  }
  
  var quesNumberic= window.confirm("Including numberic?")
  if (quesNumberic){
    prePassword=prePassword.concat(numeric);
    numericIndex= (Math.floor(Math.random() * numeric.length));
    newPassword.push(numeric[numericIndex]);
    i++
  }
  
  
  
  while (i<passwordLength){
    newPasswordindex= (Math.floor(Math.random() * prePassword.length));
    
    newPassword.push(prePassword[newPasswordindex]);
    
    i++;
  }
  
  var p=0
  while (p < newPassword.length){
    var finalPasswordindex=(Math.floor(Math.random() * newPassword.length));
    finalPassword.push(newPassword[finalPasswordindex]);
    p++;
  }
  
  
  
  
  console.log (finalPassword.join(""))


  
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
  //length of the password 8 characters and no more than 128 characters
//lowercase, uppercase, numeric, and/or special characters