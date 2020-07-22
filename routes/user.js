const express = require('express');
const router = express.Router()

router.get('/',async (req,res)=>{
    await res.send('hello dgda app');
})

module.exports = router;