const express = require('express');
const router = express.Router();
//Model declaration
const User = require('../models/User');

//Show login page
router.get("/login",(req,res)=>{
    res.render('login');
})

//Show register page
router.get("/register",(req,res)=>{
    res.render('register');
})
//Create user in register page
router.post('/register',(req,res) =>{
    const {name,email} =req.body;
    User.findOne({email},(req,user)=>{
        if(user){
            console.log('user exist');
        }else{
            User.create({name,email},(req,user)=>{
                req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                res.redirect("/login");
            })
        }
    })
})

module.exports =router;