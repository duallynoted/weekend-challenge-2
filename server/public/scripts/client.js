console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('.operators').on('click', getOperator);
    $('#equalsButton').on('click', equalsPackage);
    $('#clearButton').on('click', clearInputs);

}

let operation;
//this will create functionality when the user clicks on any of the operator buttons

function clearInputs() {
    console.log('clear working');

    $('#firstNumber').val('');
    $('#lastNumber').val('');
}
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
    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: objectToSend
    }).then(function (response) {
        console.log('back from POST with: ', response);
        $('#operatorOutput').empty();
        $('#operatorOutput').append('Your Calculation: ' + response[response.length - 1].sumProduct);
        updateHistory();
    }).catch(function (error) {
        alert('Error updating messages')
        console.log('Error:', error);
    })
}
function updateHistory() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then(function (response) {
        console.log('back from GET with: ', response);
        let el = $('#historyOut');
        el.empty();
        for (let calc of response) {
            let tempVar = `<li> ${calc.equation.number1}: ${calc.equation.operation}: ${calc.equation.number2}: ${calc.sumProduct} </li>`;
            console.log(tempVar);
            el.append(tempVar);
        }//end for

    }).catch(function (error) {
        alert('Error updating messages')
        console.log('Error:', error);
    })//end ajax
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
