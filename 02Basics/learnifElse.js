//LCO

var whoIsHere = 'ab'

if (whoIsHere == 'user'){
    console.log("Greeeting Message for User!")
    console.log("Allow access to view all courses")
}else if(whoIsHere == 'teacher'){
    console.log("Greeeting Message for TEACHER!")
    console.log("Allow access to his courses")
}else{
    console.log('verify your email')
    console.log('send user an email verifiacation')
}