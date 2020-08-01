const express = require('express');
const router = express.Router()
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const authAdmin = require('../middleware/authAdmin');


// router get api/user
// @desc list of user
// @access Public

router.get('/', authAdmin, (req, res) => {

    Admin.findById(req.Admin.id).select('-password').then(data => res.json(data))
})


// router post /api/admin
// @desc register admin
// @access Public
router.post('/', (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        res.status(400).json("Please fill all field");
    }
    // check if user exist by email address

    Admin.findOne({email}).then(user => {
        if (user) 
            return res.status(400).json("Admin already exists");
        

        const newuser = new Admin({name, email, password});

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newuser.password, salt, (err, hash) => {
                if (err) 
                    throw err;
                
                newuser.password = hash;
                newuser.save().then(user => jwt.sign({
                    id: user.id
                }, config.get('secret_key'), {
                    expiresIn: 3600
                }, (err, token) => {
                    if (err) 
                        throw err;
                    
                    res.json({
                        token,
                        user: {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                    })
                })).catch(error => console.log(error));
            })
        })
    })

});


// router post /api/admin/login
// @desc login admin
// @access token
router.post('/login', (req, res) => { // check if fields are not empty
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400).json({msg: 'Please enter all fields'});
    }

    // check if the user exists
    Admin.findOne({email}).then(user => {
        if (!user) 
            return res.status(400).json({msg: 'User does not exist'})


        


        bcrypt.compare(password, user.password).then(isMatch => {
            if (!isMatch) 
                return res.status(400).json({msg: "Incorrect Password"});
            


            // send the token
            jwt.sign({
                id: user.id
            }, config.get('secret_key'), {
                expiresIn: 3600
            }, (err, token) => {
                if (err) 
                    throw err;
                


                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                })
            })
        })
    })
})

module.exports = router;
