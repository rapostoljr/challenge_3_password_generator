// Assignment code here
var LOWERCASE_LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var UPPERCASE_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var SYMBOLS = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

var generatedPassword = []

function generatePassword() {
  generatedPassword = []

  //  1. Prompt the user for how they want to make password
  //    a. Length?
  var passwordLength = prompt("How long do you want your password? (At least 8 characters and no more than 128 characters)");
  if (passwordLength >= 8) {
  //    b. Uppercase, lowercase, numbers, special letters?
  //  2. Validate the input.
 
  } else {
    alert("Please enter a valid response.");
    return generatePassword()
  }

  var containsUpper = confirm("Do you want your password to contain capital letters?");
  if (containsUpper) {
    generatedPassword.push(LOWERCASE_LETTERS);
    generatedPassword.push(UPPERCASE_LETTERS);
  } else {
    generatedPassword.push(LOWERCASE_LETTERS);
  }
var containsNumbers = confirm("Do you want your password to contain numbers?");
  if (containsNumbers) {
    generatedPassword.push(NUMBERS);
  }
var containsSymbols = confirm("Do you want your password to contain special characters?");
  if (containsSymbols) {
    generatedPassword.push(SYMBOLS);
  }

//  3. Generate password based on user's answers.
//  4. Display new generated password.
var passwordPool = []
passwordPool = generatedPassword.join(",").split(",");

var finalPassword = []
for (var i = 0; i < passwordLength; i++) {
  var randomPassword = Math.floor(Math.random() * passwordPool.length);
  finalPassword.push(passwordPool[randomPassword]);
}

return finalPassword.join("");

}

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

