
var upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "01223456789";
var symbolChars = "!@#$%^&*()";



function printPass() {
    var h3 = document.getElementById("newPass");
    h3.innerHTML = "";
        var userPass = document.createElement("h3");
        h3.textContent = generatePass();
        h3.appendChild(userPass);
    
};

function generatePass() {
    
    var chosenLength = document.getElementById("userLength");
    var checkUpper = document.getElementById("checkUppercase");
    var checkLower = document.getElementById("checkLowercase");
    var checkNum = document.getElementById("checkNumbers");
    var checkSym = document.getElementById("checkSymbols");
    
    console.log(checkUpper.checked);
var include = "";
if (checkUpper.checked) {
    include += upperCaseChars;
    }
if (checkLower.checked) {
    include += lowerCaseChars;
    }
if (checkNum.checked) {
    include += numberChars;
    }
if (checkSym.checked) {
    include += symbolChars;
    }

    var password = "";
    var passwordLength = parseInt(chosenLength.value);
    for(var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * include.length);
        password += include[random];
    }
    console.log(password);
    return password;
}   

