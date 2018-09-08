console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('.operators').on('click', getOperator);
    $('#equalsButton').on('click', equalsPackage);
}

let operation;
let totals = [];
//this will create functionality when the user clicks on any of the operator buttons

function getOperator() {
    console.log('operator working');
    operation = $(this).text();
}

function equalsPackage() {
    let objectToSend = {
        number1: $('#firstNumber').val(),
        number2: $('#lastNumber').val(),
        operation: operation
    }
    console.log(objectToSend);
    // doCalculations();
    $('#operatorOutput').empty();
    $('#operatorOutput').append('Your Calculation: ' + totals);
    $.ajax({
        method: 'POST',
        url:'/calculations',
        data: objectToSend
    }).then(function (response) {
        console.log('back from POST with: ', response);        

    }).catch (function(error){

    })
}

// function doCalculations (){
//     let num1 = $('#firstNumber').val()
//     let num2 = $('#lastNumber').val()
//     // let answer = 0;
//     if (operation == '+' ) {
//         answer = parseInt(num1) + parseInt(num2);
//         console.log('add:', answer);          
//     } else if (operation == '-' ) {
//         answer = parseInt(num1) - parseInt(num2);
//         console.log(answer);          
//     } else if (operation == '*' ) {
//         answer = parseInt(num1) * parseInt(num2);
//         console.log(answer);
//     } else if (operation == '/' ) {
//         answer = parseInt(num1) / parseInt(num2);
//         console.log(answer);
// } totals.push(answer);
// };  
