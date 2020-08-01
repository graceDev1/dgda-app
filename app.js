const express = require('express');
const app = express();
const userRoute = require('./routes/user');
const forumRoute = require('./routes/forum');
const cors = require('cors');
const postRouter = require('./routes/post');
const adminRoute = require('./routes/admin');
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use('/uploads', express.static('client/public/uploads'));

// routes
app.use('/api/user', userRoute);
app.use('/api/forum', forumRoute);
app.use('/api/post', postRouter);
app.use('/api/admin', adminRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listen on ${port}...`));
