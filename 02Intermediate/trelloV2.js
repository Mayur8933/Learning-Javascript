let myTodos = {
    day : 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo,meet=0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo,meet=0){
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfTheDay = function(todo){
    meetleft = todo.meetings + todo.meetDone // here value of todo.meetDone is -5 , so we add it instead of substracting because if we add then it gives wrong results (--=+,+-=-)
    return `You have ${meetleft} meetings left today!` 
}

addMeeting(myTodos,4)
addMeeting(myTodos,2)
meetDone(myTodos,5)
console.log(myTodos)
console.log(getSummaryOfTheDay(myTodos))