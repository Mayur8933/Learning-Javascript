// const superHeroes = ['Ironman','spiderman','Thor'] // Array

// console.log(superHeroes[0])
// console.log(superHeroes.length)
// console.log(superHeroes[superHeroes.length-1])

// console.log(`We have ${superHeroes.length} Super Heroes`) // templating string in js (`${}`) <-- calculating block

// 3 must known methods for Arrays

const numbers = ['one','two','three','four','five','six']

//start of the Array

numbers.shift() // Removes the first element from an array and returns it
console.log(numbers)

numbers.unshift('something') //Inserts new elements at the start of an array.
console.log(numbers)

//End of the Array

numbers.pop() //Removes the last element from an array and returns it.
console.log(numbers)

numbers.push('seven') //Appends new elements to an array, and returns the new length of the array.
console.log(numbers)

//Middle of the Array

numbers.splice(2,2,'SOMETHING') //Removes elements from an array and, if necessary,            
                                //2nd position is number of items to be deleted                     
                                //inserts new elements in their place, returning the deleted elements. 
console.log(numbers)

