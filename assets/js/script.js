// Assignment code here
var LOWERCASE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var UPPERCASE_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var SYMBOLS = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

var passwordLength = prompt("How long do you want your password?")
var containsLetters = confirm("Do you want your password to contain capital letters?")
var containsNumbers = confirm("Do you want your password to contain numbers?")
var containsSymbols = confirm("Do you want your password to contain special characters?")
var generatedPassword = []


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
