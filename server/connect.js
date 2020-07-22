const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoUri');

mongoose.connect(db,{useCreateIndex:true, useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log('connected'))
.catch((err)=> console.log(err));


module.exports = mongoose;
