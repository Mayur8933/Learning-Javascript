//classes and object in javascript

class User{ 
    constructor(firstname,lastname,credit){
        this.firstname = firstname
        this.lastname = lastname
        this.credit = credit
    }
    getFullName(){
        let myFullname = `${this.firstname} ${this.lastname} is my full name`
        return myFullname
    }
    editName(newname){
        const myname = newname.split(' ') //take entire string which is passed and convert this in a array
        this.firstname = myname[0]
        this.lastname = myname[1]
    }
}

//Inheritance and Method Overriding
class Teacher extends User { //inheritance
    constructor(firstname,lastname,credit,subject){
        super(firstname,lastname,credit)
        this.subject = subject
    }
    //method overriding
    getFullName(){
        let myFullname = `${this.firstname} ${this.lastname} is my full name and I teach ${this.subject}`
        return myFullname
    }
    myFavDrink(name){
        console.log(`My favourite drink is ${name}`)
    }
} 

const john = new Teacher('john','Anderson',34,'Python')//you can pass Teacher instead of User here ,and code runs same(if you use inheritance)
//console.log(john)
console.log(john.getFullName())
john.editName('Johnny Anderson')
console.log(john.getFullName())
john.myFavDrink('IceTea')

// const sammy = new User()
// console.log(sammy)

