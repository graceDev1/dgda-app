const multer = require('multer');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const Post = require('../models/Post');
const path = require('path');





// const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './client/public/uploads')
    },
    filename: (req, file, cb)=>{
        cb(null,file.originalname)
    }
});




const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'application/pdf'){
        cb(null, true);
    }else{
        cb(null,false);
    }
}

const upload = multer(
    {
        storage:storage, 
        limits:{
            fileSize: 1024 * 1024 * 20
        },
        fileFilter: fileFilter
    });

    

//router /api/post
//@desc post
//@access public 

router.post('/', upload.single('filePdf'), (req,res)=>{
    let str = req.file.path
    console.log(str.substring(14));
    const post = new Post({
        theme: req.body.theme,
        filePdf: str.substring(14)
    });
    post.save()
    .then(result =>{
       res.json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});


//router /api/post
//@desc get 
//@access public

router.get('/',(req,res)=>{
    Post.find()
    .sort({date_p: -1})
    .then(data=> {
       res.json(data)
    })
    .catch(err => console.log(err));
});



module.exports = router;