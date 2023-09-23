const express =require('express')
const router = express.Router();
const user =require('../models/User');
const User = require('../models/User');

// Create a user using post


module.exports=router.post('/',(req,res)=>{
 const User = user(req.body)
 User.save()   
    res.json("Added to DB")
})