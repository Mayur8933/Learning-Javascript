//Regular  Function
// const sayHello = function(name){
//     return `Hey ${name} !`
// }
// console.log(sayHello('Mayur'))

//Arrow Function
// const sayHello = (name) => `Hey ${name} !` //not necessary to use return

// console.log(sayHello('Mayur'))

// const myTodos = [{
//     title:'Learn Coding',
//     isDone:true
// },{
//     title:'Learn Aptitude',
//     isDone:false
// },{
//     title:'Doing Exercise',
//     isDone:false,
// }]

// const workDone = myTodos.filter((todo) => todo.isDone == true) //filter Returns the elements of an array that meet the condition specified in a callback function.

// console.log(workDone)

// const myTodos = [{
//     title:'Learn Coding',
//     isDone:true
// },{
//     title:'Learn Aptitude',
//     isDone:false
// },{
//     title:'Doing Exercise',
//     isDone:false,
// }]

// const workDone = myTodos.filter((todo) =>{ 
//     if (todo.isDone == true){ //filter is just like forEach 
//        console.log(`${todo.title} is Done`)
//     }
// })

cameras = {
    price: '600$',
    weight: '6kg',
    brand: 'canon',
    // myDes: function(){
    //     return `This is my camera of price ${this.price}`
    myDes: () => {
        return `This is my camera of price ${this.price}` // it shows undefined instead of showing price(it doesn't do automatically you have to bind it)
    }
}

console.log(cameras.myDes())

//never use Arrow function in Methods and constructors


//only for redux
const func = () => ({key:'value'})
