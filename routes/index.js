const express = require('express');
const router = express.Router();

//Welcome page
router.get("/",(req,res)=>{
    res.render('home');
})

module.exports =router;