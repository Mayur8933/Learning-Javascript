let myGrade = function(currentMarks,totalMarks){
    let result = (currentMarks/totalMarks) * 100

    if (result <= 60){
        console.log('You got D grade - PASS')
        console.log(`Percentage = ${result}`)
    }else if(result <= 70){
        console.log('You got C grade - PASS')
        console.log(`Percentage = ${result}`)
    }else if(result <= 80){
        console.log('You got B grade - PASS(GOOD)')
        console.log(`Percentage = ${result}`)
    }else if(result <= 90){
        console.log('You got A grade - PASS(EXCELLENT)')
        console.log(`Percentage = ${result}`)
    }else{
        console.log('You got E grade - PASS(POOR)')
        console.log(`Percentage = ${result}`)
    }

}
myGrade(81,500)