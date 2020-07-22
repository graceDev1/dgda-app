const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const forumModel = require('../models/Forum');


//router get /api/forum
//list of forum post
//@desc PUBLIC
router.get('/',(req,res)=>{
    forumModel.find()
    .sort({date: -1})
    .then(data => res.json(data))
    .catch(err => console.log(err));
})


//router post /api/forum
//add forum 
//@desc PRIVATE
router.post('/',auth,(req,res)=>{
    // check if all fields are filled
    const { title, content, author} = req.body;
    if(!title || !content || !author) return res.status(400).json({msg: "Please enter all fields"});
    const newforum = new forumModel({
        title,
        content,
        author
    });
    newforum.save()
    .then(data=> res.json(data))
    .catch(err => console.log(err));
})



module.exports = router;