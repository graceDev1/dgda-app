const express = require('express');
const app  = express();
const userRoute = require('./routes/user');

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: false}));



const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`listen on ${port}...`));