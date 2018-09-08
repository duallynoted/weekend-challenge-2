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
    doCalculations(req.body.number1, req.body.number2, req.body.operation);
    history.equation = req.body
    console.log(history);

    res.send(totals);
})
app.get('/calculations', (req, res) => {
    console.log('in / GET');
    res.send(totals);
})

function doCalculations(num1, num2, operation) {
    if (operation == '+') {
        answer = parseInt(num1) + parseInt(num2);
        console.log('add:', answer);
        totals.push(answer);
    } else if (operation == '-') {
        answer = parseInt(num1) - parseInt(num2);
        console.log(answer);
        totals.push(answer);
    } else if (operation == '*') {
        answer = parseInt(num1) * parseInt(num2);
        console.log(answer);
        totals.push(answer);
    } else if (operation == '/') {
        answer = parseInt(num1) / parseInt(num2);
        console.log(answer);
        totals.push(answer);
    };
}; 