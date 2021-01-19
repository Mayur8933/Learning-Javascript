//const myTodos = ['Buy Bread','go to gym','record youtube videos']
//console.log(myTodos.indexOf('Buy Bread')) //if value doesn't pass correctly then it gives index as -1

const newtodos = [{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go to Gym',
    isDone: false,
},{
    title: 'Record youtube videos',
    isDone: true,
}]

// const index = newtodos.findIndex(function(todo,index){
//     console.log(todo)

//     return todo.title == 'Go to Gym'
// })

// console.log(index)
//method1

// const findTodo = function(myTodos,title){
//     const index = myTodos.findIndex(function(todo,index){ //it returns index
//         return todo.title.toLowerCase() == title.toLowerCase()
//     })
//     return myTodos[index]
// }
// let result = findTodo(newtodos,'Go to Gym')
// console.log(result)

//method2

const findTodo = function(myTodos,title){
    const titleReturned = myTodos.find(function(todo,index){ //it returns exact element
        return todo.title.toLowerCase() == title.toLowerCase()
    })
    return titleReturned
}

result = findTodo(newtodos,'Buy Bread')
console.log(result)

