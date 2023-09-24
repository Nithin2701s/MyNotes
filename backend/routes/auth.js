const express = require('express')
const router = express.Router();
const User = require('../models/User');
const { query, validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs')
const JWT =require("jsonwebtoken")

// Create a user using post NO login required


module.exports = router.post('/createuser', [
  body('name').isLength({ min: 5 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
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
        }).then(user => res.json(user)).catch((error) => {
          console.log(error);
          // sending errors
          res.json({ error: "Some error occured!" })
        })
      }
    })

  }
  else {res.send(result)}
})