const express = require('express');
const app  = express();
const userRoute = require('./routes/user');
const forumRoute = require('./routes/forum');
const cors = require('cors');
// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


//routes 
app.use('/api/user',userRoute);
app.use('/api/forum', forumRoute);


const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`listen on ${port}...`));