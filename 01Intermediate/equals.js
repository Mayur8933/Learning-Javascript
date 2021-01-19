// let myVar = {}
// let myVar2 = {}

// console.log(myVar === myVar2) // it returns false ,because each object is different in memory

let myVar = {}
let myVar2 = myVar

console.log(myVar === myVar2) // it returns true ,because we,re initializing the object with each other
// but with int and strings it showing the results True,

// == (EQUALITY)
// === (IDENTITY)

//= Vs == VS === in JavaScript
// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable. 
// === is used for comparing two variables, but this operator also checks datatype and compares two values
// It returns true only if both values and data types are the same for the two variables. 