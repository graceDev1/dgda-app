const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/authAdmin');
const router = express.Router();
const forumModel = require('../models/Forum');


// router get /api/forum
// list of forum post
// @desc PUBLIC
router.get('/', (req, res) => {
    forumModel.find().sort({date: -1}).then(data => res.json(data)).catch(err => console.log(err));
})


// router post /api/forum
// add forum
// @desc PRIVATE
router.post('/', auth, (req, res) => { // check if all fields are filled
    const {title, content} = req.body;
    if (!title || !content) 
        return res.status(400).json({msg: "Please enter all fields"});
    


    const newforum = new forumModel({title, content});
    newforum.save().then(data => res.json(data)).catch(err => console.log(err));
});

// router post /api/forum/:id
// delete forum
// @desc PRIVATE

router.delete('/:id', admin, (req, res) => {
    forumModel.findById(req.params.id).then((forum) => forum.remove().then(res.json({success: true}))).catch(err => res.status(404).json({success: false}));
})


module.exports = router;
