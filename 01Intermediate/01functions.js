let sayHello = function(name){ // Function Declaratioin and Passing parameter
    console.log(`Greeting message for ${name}`)
    console.log(`Hey ${name}`)
}

sayHello('John') //Function Call ,Remember parameter should pass in quotes if it is String

let fullNameMaker = function(firstname,lastname){
    console.log('Welcome User')
    console.log(`Happy to have you, ${firstname} ${lastname}`)
}

fullNameMaker('John','Doe')

let myAdder = function(num1,num2){
    console.log(`My two favourite numbers are ${num1} and ${num2}`)
    return num1+num2 //Here we are Returning the values not Printing Them
}

let result = myAdder(15,89)
console.log('total', result) //we're Printing Here ,There are number are ways to printing them

let mymultiplier = function(num1 , num2){
    return num1 * num2
}
console.log(mymultiplier(2,5))

let guestUser = function(name='unName',courseCount=0){
    return 'Hello ' + name + ' and your course count is: ' + courseCount // Directly returning value without storing them can save memory space
}
console.log(guestUser()) // Default values will be printed if no values will be passed
console.log(guestUser('John',1)) // It take overs default Values