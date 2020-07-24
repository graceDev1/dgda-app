const jwt = require('jsonwebtoken');
const config = require('config');


const auth = (req,res,next) =>{
    const token = req.header('x-auth-token');

    //check if token
    if(!token) return res.status(401).json({msg: "No token, Authorization denied"});

    try
    {
        const decoded = jwt.verify(token, config.get('secret_key'));
        req.User = decoded;
        next();
    }
    catch(err){
        res.status(400).json({msg: "Token invalid"});
    }
}

module.exports = auth;