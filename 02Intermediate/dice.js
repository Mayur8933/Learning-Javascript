// let numOne = 22
// let numTwo = 7

// result = 22/7

// console.log(result) // 3.142857142857143
// console.log(result.toFixed(2)) //3.14
// console.log(Math.floor(result)) //3 (Returns the greatest integer less than or equal to its numeric argument.)
// console.log(Math.ceil(result)) //4  (Returns the smallest integer greater than or equal to its numeric argument.)

// console.log(Math.random()) //Returns a pseudorandom number between 0 and 1.

// console.log(Math.random() * 10) //returns number betn 0 and 10

//console.log(Math.random() * 10+1) //returns number betn 0 and 11

//to generate random number betn two particular values

let upper = 25
let lower = 20

let myRandom = Math.floor(Math.random() * (upper - lower)+1) + lower // (1 to 5)+20 --> 21 to 25 
console.log(myRandom)