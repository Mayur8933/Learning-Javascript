// //alert('File is attached')
// const element = document.querySelectorAll('#first') //searching elements by id or classname
// console.log(element)

// const myH1Elements = document.querySelector('h1')
// myH1Elements.textContent = 'I am changed' // to change the text content of any particular tag

const myH1Elements = document.querySelectorAll('h1')
myH1Elements.forEach(function(h){
    h.textContent = 'I am changed using js loop'
    // h.remove() // to remove all the elements
}) // To change all the h1 Tags using loop

//Using Arrow Function

//myH1Elements.forEach((h)=>h.textContent = 'I am changed using js loop')

// How to create element in DOM

const myNewH1 = document.createElement('h1')
myNewH1.textContent = 'I am added via js'
document.querySelector('body').appendChild(myNewH1)


// event listners in javascript
document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'I was clicked'
})

//track input form

document.querySelector('#myform').addEventListener('input',(event)=>{
    console.log(event.target.value);
})