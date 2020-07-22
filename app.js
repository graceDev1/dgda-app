const express = require('express');
const app  = express();
const userRoute = require('./routes/user');
const forumRoute = require('./routes/forum');

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes 
app.use('/api/user',userRoute);
app.use('/api/forum', forumRoute);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`listen on ${port}...`));