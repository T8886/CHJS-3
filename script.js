 // this was done with the help of teacher assistant and tutor


var passwLength = 8;
var choiceArr = [];
var lowerCa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'];
var numbersa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Generating Button:
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword);



function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}


// 
function generatePassword(){
  var password = "";
  for(var i = 0; i < passwLength; i++){
var randomIndex = Math.floor(Math.random()*choiceArr.length);
password=password+choiceArr[randomIndex];
}
return password;
}


// Actual questions in a box
function getPrompts() {
  choiceArr = [];
  passwLength = parseInt(prompt("How long do you want your password to be? Length of at least 8 characters and no more than 128 characters require."));

  if (isNaN(passwLength) || passwLength < 8 || passwLength > 128) {
    alert("Your number is  less than 8 or greater than 128. Please try again.");
    return false;
  }
    if (confirm("Would you like password to include uppercase letters?")) {
      choiceArr = choiceArr.concat (upperCa);
    }
    if (confirm("Would you like password to include lowercase letters?")) {
      choiceArr = choiceArr.concat (lowerCa);
    }
    return true;
  }

  