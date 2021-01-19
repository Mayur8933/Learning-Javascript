let userEmail = 'abc@gmail.com'
let passWord = 'abc12345'

let emailChecker = function(myEmail){
    if ((myEmail.includes('@gmail.com')) && (myEmail.length > 6)){
            return true
    }
    return false
}

let passChecker = function(myPass){
    if ((myPass.includes(1234)) && (myPass.length >= 8)){
        return true
    }
    return false
}

console.log(emailChecker(userEmail))
console.log(passChecker(passWord))