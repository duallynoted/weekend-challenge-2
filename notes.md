//this is how I originally got calculations to work on the DOM
function doCalculations (){
    let num1 = $('#firstNumber').val()
    let num2 = $('#lastNumber').val()
    // let answer = 0;
    if (operation == '+' ) {
        answer = parseInt(num1) + parseInt(num2);
        console.log('add:', answer);          
    } else if (operation == '-' ) {
        answer = parseInt(num1) - parseInt(num2);
        console.log(answer);          
    } else if (operation == '*' ) {
        answer = parseInt(num1) * parseInt(num2);
        console.log(answer);
    } else if (operation == '/' ) {
        answer = parseInt(num1) / parseInt(num2);
        console.log(answer);
} totals.push(answer);
};