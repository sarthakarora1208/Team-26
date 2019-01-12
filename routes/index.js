const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth"); //ES6
const nodemailer = require("nodemailer");

// Renders the welcome page
router.get('/',(req,res)=>{
    res.render('home')
});
router.get('/about',(req,res)=>{
 
    res.render('about');   
});
router.get('/contact',(req,res)=>{
 
    res.render('contact')   
});
//
router.get('/dashboard',ensureAuthenticated, (req, res) => 
    res.render("dashboard",{
        user: req.user
    }));

module.exports = router;

