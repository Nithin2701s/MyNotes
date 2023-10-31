const express = require('express')
const router = express.Router();
const User = require('../models/User');
const {validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs')
const JWT =require("jsonwebtoken")
const fetchuser =require("../middleware/fetchuser")

const JWT_SECRET = "Mynotesontop"
// Route 1:Create a user using post 

module.exports = router.post('/createuser', [
  body('name','Name should be atleast 5 characters').isLength({ min: 5 }),
  body('email').isEmail(),
  body('password','should be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {


  const result = validationResult(req);

  // if no error add user
  if (result.isEmpty()) {

    // Check whether user aready exists 
    await User.findOne({ email: req.body.email }).then(async user => {
      if (user) {
        return res.json({ error: "Email already exists!!" })
      }
      else {
       
        // Hashing password
        const salt = await bcrypt.genSalt(5);
        const secPass = await bcrypt.hash(req.body.password,salt) 
        
        // Creating a user
       await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass
      }).then(user => {
        const data ={
          user:{
            id:user.id
          }
        }
        // Creating authToken for user

        const authToken =JWT.sign(data,JWT_SECRET)
        res.json({authToken})

      }).catch((error) => {
          console.log(error);
          // sending errors
          res.send("Internal server error");
        })
      }
    })

  }
  else {res.send(result)}
})

//Route 2:Authenticating user;
module.exports.verifyuser = router.post('/verifyuser', [
  body('email',"Not a valid email").isEmail(),
  body('password',"password required").exists()
], async (req, res) => {
  
  const result = validationResult(req);
  if(!result.isEmpty()){
    return res.json({result})
  }
  const {email,password} =req.body;
  try {
   let user,success;
  await User.findOne({email}).then((result)=>{
    user=result
   })
   if(user==null){
    return res.json({sucees:false,error:"User not found"})
   }
   const passCompare = await bcrypt.compare(password,user.password);
   if(!passCompare){
    success=false
    return res.json({success,error:"Invalid password"})
   }
   const data ={
    user:{
      id:user.id
    }
  }
  const authToken = JWT.sign(data,JWT_SECRET);
  res.json({success:true,authToken})
  } catch (error) {
    console.log(error)
    res.send("Internal server error");
  }
})
// Route 3:Get user details using authtoken
module.exports.loggedin = router.post('/getuser', fetchuser, async (req, res) => {
  try {
   const UserId =req.user.id;
   let user;
   User.findById(UserId).select('-password').then((result)=>{
    user=result;
    res.send(user)
   }) 
  } catch (error) {
    
  }
})