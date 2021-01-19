
//setItem in localstorage
localStorage.setItem('hero','Thor')
localStorage.setItem('heros','spiderman')

//getItem in localstorage
console.log(localStorage.getItem('heros'))

//delete from localstorage
localStorage.removeItem('hero')
console.log(localStorage.getItem('hero'))

//delete all the items
localStorage.clear()