const passwordInput = document.getElementById("pwd");
const passwordGenratorBtn = document.getElementById("pwdButton")
const passCopyIcon = document.getElementById("passwordIcon")

const length = 12;


const lowerCaseAphabets = "abcdefghijklmnopqrstuvwxyz"
const upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const specialSymbols = "></?{}:@#$%^&*)(+!"

const allChars = lowerCaseAphabets + upperCaseAlphabets + numbers + specialSymbols;

passwordGenratorBtn.addEventListener('click', function() {
    createPassword();
})

passCopyIcon.addEventListener('click', function() {
    copyPassword();
})

function copyPassword() {
        passwordInput.select();
        document.execCommand("copy")
    }

function createPassword() {
    let password = ""

    password += lowerCaseAphabets[Math.floor(Math.random() * lowerCaseAphabets.length)]
    password += upperCaseAlphabets[Math.floor(Math.random() * upperCaseAlphabets.length)] 
    password += numbers[Math.floor(Math.random() * numbers.length)] 
    password += specialSymbols[Math.floor(Math.random() * specialSymbols.length)]


    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordInput.value = password

}