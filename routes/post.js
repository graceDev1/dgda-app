const multer = require('multer');
const express = require('express');
const router = express.Router()
const Post = require('../models/Post');
const fs = require('fs')


// const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './client/public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});


const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 20
    },
    fileFilter: fileFilter
});


// router /api/post
// @desc post
// @access public

router.post('/', upload.single('filePdf'), (req, res) => {
    let str = req.file.path
    const post = new Post({theme: req.body.theme, filePdf: str.substring(14)});
    post.save().then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});


// router /api/post
// @desc get
// @access public

router.get('/', (req, res) => {
    Post.find().sort({date_p: -1}).then(data => {
        res.json(data)
    }).catch(err => console.log(err));
});

// router /api/post/:id
// @desc delete
// @access auth

router.delete('/:id', (req, res) => {
    Post.findById(req.params.id).then((post) => post.remove().then(() => res.json({success: true}))).catch(() => res.status(404).json({success: false}));
})

// router /api/post/:id
// @desc put or patch
// @access auth

router.patch('/:id', upload.single('filePdf'), async (req, res) => {

    let str = req.file.path;
    try {
        const posts = await Post.updateOne({
            _id: req.params.id
        }, {
            $set: {
                theme: req.body.theme,
                filePdf: str.substring(14)
            }
        });
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;
