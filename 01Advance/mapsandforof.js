var john = {
    name:'I am john',
    age:24,
    isActive: true
}

var marry = {
    name:'I am marry',
    age:23,
    isActive: false
}

var sam = {
    name:'I am sam',
    age:25,
    isActive: true
}

let users = new Map() //maps are iterable (you can loop through it)
users.set('john',john) //first name is key to set in map you can give anything and second is value which is storing(variable or anything)  
users.set('marry',marry)
users.set('sam',sam)

console.log(users)

console.log(users.size)

console.log(users.get('sam'))

console.log(users.keys()) //iterator (you can loop through it)

console.log(users.values()) //iterator (you can loop through it)

//forof loop

for (const key of users.keys()) {
    console.log(key)
}

for (const value of users.values()) {
    console.log(value.name)
}

for (const [key,value] of users.entries()) {
    console.log(`'${key} = ${value.name}'`)
}

users.forEach((value,key) => console.log(`'${key} = ${value.name}'`))

var arrofarr = [['one','1'],['two',2],['three',3]]

var newMap = new Map(arrofarr) //when you pass datatype inside map so you don't need to set it in a map
console.log(newMap)