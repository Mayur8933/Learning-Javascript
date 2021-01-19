// let iAmGlobal = 'SomeValue' // var is global variable(because of this it overrites the value) , let is not

// if (true){
//     let iAmLocal = 'SOmemorevalue' // It is in block , so it doesn't print outside the block,if uses var then it can print outside the block
//     iAmGlobal = 'superman'
//     console.log(iAmGlobal); // it overrites the value of iAmGlobal
//     console.log(iAmLocal);
// }
// //console.log(iAmLocal);
// console.log(iAmGlobal);

// IMPORTANT - if you do not declare let and var while declaring any variable then it assumes declaration as global(var)

//Kings Problem

let king = 'john'

if (true){
    let king = 'Sam'
    if (true){
        let king = 'Ram'
        console.log(king);
    }
}
if (true){
    console.log('I second Part: '+king);
} 