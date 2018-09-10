$(document).ready(readyNow);

function readyNow() {
    $('.operators').on('click', getOperator);
    $('#equalsButton').on('click', equalsPackage);
    $('#clearButton').on('click', clearInputs);

}
//this will create functionality when the user clicks on any of the operator buttons
let operation;

//this will clear input fields to allow for new calculations
function clearInputs() {
    console.log('clear working');

    $('#firstNumber').val('');
    $('#lastNumber').val('');
}//end clearInputs

//this assigns the click when any operator (+,-,*,/) is clicked to perform that function
function getOperator() {
    console.log('operator working');
    operation = $(this).text();
}//end getOperator

function equalsPackage() {
    let objectToSend = {
        number1: $('#firstNumber').val(),
        number2: $('#lastNumber').val(),
        operation: operation
    };//end objectToSend
    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: objectToSend
    }).then(function (response) {
        console.log('back from POST with: ', response);
        $('#operatorOutput').empty();
        $('#operatorOutput').append('Your Calculation: ' + response[response.length-1].sumProduct);
        updateHistory();
    }).catch(function (error) {
        alert('Error updating messages')
        console.log('Error:', error);
    })//end ajax POST
}//end equalsPackage

function updateHistory() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then(function (response) {
        console.log('back from GET with: ', response);
        let el = $('#historyOut');
        el.empty();
        for (let calc of response) {
            let tempVar = `<li> ${calc.number1} ${calc.operation} ${calc.number2}= ${calc.sumProduct} </li>`;
            console.log(tempVar);
            el.append(tempVar);
        }//end for loop 
    }).catch(function (error) {
        alert('Error updating messages')
        console.log('Error:', error);
    })//end ajax GET
}//end updateHistory

