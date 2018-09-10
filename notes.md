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

for (let calc of response) {
            let tempVar = `<li> ${calc.equation.number1} ${calc.equation.operation} ${calc.equation.number2}= ${calc.sumProduct} </li>`;
            console.log(tempVar);
            el.append(tempVar);
        }//end for loop

 //requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//globals
const PORT = 5000;
let totals = [];
let history = {
    equation: {},
    sumProduct: ''
}

//spin up server
app.listen(PORT, () => {
    console.log('SERVER IS UP ON: ', PORT);
})
app.post('/calculations', (req, res) => {
    console.log('in / POST', req.body);
    history.sumProduct = doCalculations(req.body.number1, req.body.number2, req.body.operation);
    history.equation = req.body
    console.log(history);
    console.log(totals)
    totals.push(history);
    res.send(totals);
})
app.get('/calculations', (req, res) => {
    console.log('in / GET');
    res.send(totals);
})

function doCalculations(num1, num2, operation) {
    let answer;
    if (operation == '+') {
        answer = parseInt(num1) + parseInt(num2);
        console.log('add:', answer);
        // totals.push(answer);
    } else if (operation == '-') {
        answer = parseInt(num1) - parseInt(num2);
        console.log(answer);
        // totals.push(answer);
    } else if (operation == '*') {
        answer = parseInt(num1) * parseInt(num2);
        console.log(answer);
        // totals.push(answer);
    } else if (operation == '/') {
        answer = parseInt(num1) / parseInt(num2);
        console.log(answer);
        // totals.push(answer);
    };
    return answer;
}; 



        