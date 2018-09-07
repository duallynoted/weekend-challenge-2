console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('.operators').on('click', getOperator);
    $('#equalsButton').on('click', equalsPackage)
    doCalculations();
}

let operation;
//this will create functionality when the user clicks on any of the operator buttons

function getOperator() {
    console.log('operator working');
    operation = $(this).text()
}

function equalsPackage() {
    let objectToSend = {
        number1: $('#firstNumber').val(),
        number2: $('#lastNumber').val(),
        operation: operation
    }
    console.log(objectToSend);
    
}
function doCalculations (){
    let num1 = $('#firstNumber').val()
    let num2 = $('#lastNumber').val()
    if (operation == '+' ) {
        answer = num1 + num2;
        return answer;  
        console.log(answer);
        
    }
}
