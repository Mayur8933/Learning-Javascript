//what is JSON
// JSON stands for JavaScript Object Notation

// JSON is a lightweight format for storing and transporting data

// JSON is often used when data is sent from a server to a web page

// JSON is "self-describing" and easy to understand

//The JSON syntax is derived from JavaScript object notation syntax
//e.g
// {
//     "employees":[
//         {"firstName":"John", "lastName":"Doe"},
//         {"firstName":"Anna", "lastName":"Smith"},
//         {"firstName":"Peter", "lastName":"Jones"}
//     ]
//     }

const student = {
    name: 'john',
    age: 23,
    isActive: true
}
//we need to first convert this object into a string for storing in local storage
//convert this object into a string to be stored in local storage

const studObjToString = JSON.stringify(student) //now variable holds object as a string
console.log(typeof studObjToString)

//add this object to localstorage now
//localStorage.setItem('student',studObjToString)

//if we want to access elements of object then first e need to convert it to a object.
//convert back this object into json object format

const toJSONStudent = JSON.parse(studObjToString)
console.log(typeof toJSONStudent)

console.log(toJSONStudent.name)

