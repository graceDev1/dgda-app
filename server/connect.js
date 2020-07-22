const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoUri');

mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true})
.then(()=> console.log('connected'))
.catch((err)=> console.log(err));


module.exports = mongoose;
