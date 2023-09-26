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

router.post("/updatenote/:id",fetchuser,[
  
],async(req,res)=>{
    const {title,description,tag} =req.body
    const newNote ={};
    if(title){newNote.title=title; }
    if(description){newNote.description=description; }
    if(tag){newNote.tag=tag; }
    // Find the note to be updated
    await Notes.findById(req.params.id).then(async note =>{
 
        if(note.user.toString() !== req.user.id){
                res.send('Unauthorized access')
            }
       else {

        // if the same user update the notes
       await Notes.findByIdAndUpdate(note.id,{$set:newNote},{new:true}).then(result=>{
         res.send(result)
       })
       }     
    }).catch(error=>{
        res.json({message:'Note not found',error})
    })
})

// Route 4: Delete an existing node
router.delete("/deletenote/:id",fetchuser,async(req,res)=>{
  try {
       // Find the note to be deleted
       await Notes.findById(req.params.id).then(async note =>{
        
        // if not the same user  
        if(note.user.toString() !== req.user.id){
                res.send('Unauthorized access')
            }
       else {

        // if the same user delete the notes
       await Notes.findByIdAndDelete(note.id).then(result=>{
         res.send(result)
       })
       }     
    }).catch(error=>{
        res.json({message:'Note not found',error})
    })
  } catch (error) {
    res.send("Internal server error"+error)
  }
 
})
module.exports=router