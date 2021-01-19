//Form validation
function myValidation(){
    let myvalue = document.getElementById('myform').value

    if (isNaN(myvalue) || myvalue < 1 || myvalue > 20) {
        const elem = document.getElementById('first')
        elem.textContent = 'Not a valid input'
    } else {
        const elem = document.getElementById('first')
        elem.textContent = 'this input is ok'
    }
}


//Advance form validation 
document.querySelector('.myform').addEventListener('submit',(event) =>{
    event.preventDefault()
    console.log(event.target.username.value)
    console.log(event.target.realname.value)
    event.target.username.value = ''
    event.target.realname.value = ''

})