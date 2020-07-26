const mongoose = require('../server/connect');

const PostSchema = mongoose.Schema({
    theme:{
        type: String,
        required: true
    },
    filePdf:{
        type: String,
        required: true,
        unique: true
    },
    date_p : {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('post',PostSchema);