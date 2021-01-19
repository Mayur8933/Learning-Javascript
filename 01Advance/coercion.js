//When Javascript tries to interpret and do something for us then we can say it is coercion (tricky behaviour)
//Following are the examples of coercion

// console.log('5' - 5)  //0
// console.log('5' + 5)  // 55

const giveType = typeof 5
//console.log(giveType)

const adder = true + 5 // true is considered as 1 in js ,so result is 6 ,and false is 0 in js.
//console.log(adder)

const loginDetails = []

// login for getting details from DB

const loginId = loginDetails[0]
if (loginDetails){
    console.log('Allow user to login');
}else{
    console.log('Auth Failed');
}


//values tha interpret as false
// false
// 0
// '' // empty string
// null
//undefined
