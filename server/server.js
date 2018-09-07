// //requires
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// //uses
// app.use(express.static('server/public'));
// app.use(bodyParser.urlencoded({extended: true}));

// //globals
// const PORT = 5000;

// //spin up server
// app.listen(PORT, ()=>{
//     console.log('SERVER IS UP ON: ', PORT);    
// })
// app.post('/', (req, res)=>{
//     console.log('in / POST', req.body);
//     res.send(handleAddButton);
// })