// && - AND operator - Both sides need to be true ( I'll have both Pizza And Coke )
// || - OR operation - One side need to be true (I'll have tea Or coffee)

let isVerified = false // !isverified = True <-- it returns true value (reverse) ! <--Not operator (Reverse Cycology)
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (!isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message to user!')
    console.log('Grant Access to paid course')
}else if (isVerified || isGuest){
    console.log('Allow free previews')
}else{
    console.log('MESSAGE:Contact to Admin')
}