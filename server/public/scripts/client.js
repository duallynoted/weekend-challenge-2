console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('.operators').on('click', getOperator);
    $('#equalsButton').on('click', doCalculations)

}
let operation;
function getOperator() {
    console.log('operator working');
    operation = $(this).text()
}

function doCalculations() {
    let objectToSend = {
        number1: $('#firstNumber').val(),
        number2: $('#lastNumber').val(),
        operation: operation
    }
   console.log(objectToSend);
    
}
