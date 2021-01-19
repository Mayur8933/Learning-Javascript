// const days = ['Mon' ,'Tue','Wed','Thr','Fri','sat','Sun']

// // days.forEach(function(day,index){ //call back function
// //     console.log(`Day ${index+1} -- ${day}`)
// // })

// // let myAdder = function(day,index,array){ 
// //     console.log(`My two favourite numbers are ${day} and ${index+1} of ${array}`)    
// // }
// // days.forEach(myAdder) //forEach function accepts 3 arguments value ,index ,array (it prints complete Array)

// // for loop

// for (let index = 0; index<days.length; index++){
//     console.log(days[index]);
// }
// //reversing the loop
// console.log('--Reversing the loop--')
// for (let index = days.length-1; index >= 0; index--){
//     console.log(days[index]);  //days[0] = Mon ,days[1]=Tue ......it prints like this
// }

// A TODO Application

const myTodo = []

myTodo.push('READ BHAGWAD GITA')
myTodo.push('LEARN CODE')
myTodo.push('LEARN APTITUDE')

myTodo.forEach(function(todo,index){
    console.log(`My ${index+1} task is ${todo}`)

})

