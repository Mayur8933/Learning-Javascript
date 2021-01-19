const convertToRs = (dollar) => {
    if (typeof dollar == 'number'){
        return dollar * 64
    }else{
        throw Error('Amount needs to be in number')
    }    
}

// const myValue = convertToRs('five')
// console.log(myValue)

try{                                       //if we didn't use this(try and catch) program will freeze wherever the error occurs.
    const myValue = convertToRs('five')
    console.log(myValue)
}catch(error){
    console.log(error) //you can call whatever instead of error ...it doesn't really matters
}

console.log('I will not run') //this will run if error occurs because we're using try and catch