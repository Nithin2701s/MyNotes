const express =require('express')
const router = express.Router();
const fetchuser =require("../middleware/fetchuser")
const Notes =require('../models/Notes');
const User = require('../models/User');
const {body, validationResult} =require('express-validator')
//  Fetch all notes using get
router.get('/getallnotes', fetchuser,async(req,res)=>{
    try {
        Notes.find({user:req.user.id}).then(note=>{
            res.send(note)
        })
         
    } catch (error) {
        res.json({error})
    }

})

// Add new note using post
router.post('/addnote', fetchuser,[
    body('title','Enter valid title').isLength({min:3}),
    body('description',"Enter valid description").isLength({min:5})
],async(req,res)=>{
    try {
        const result = validationResult(req);
        if(!result.isEmpty()){
          return res.json({result})
        }
        
            const {title,description,tag} =req.body;
            const note =new Notes({
                title,description,tag,
                user:req.user.id
            })
            const savedNote = await note.save();
            res.json({message:"Added a note", savedNote})   
    } catch (error) {
       res.send('Internal Error'); 
    }
})

module.exports=router