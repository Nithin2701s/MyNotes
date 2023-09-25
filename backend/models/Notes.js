const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'

    },
    title : {type:String, required:true},
    description:{type:String, required:true, unique:true},
    tag:{type:String, default:"general"},
    timestamp:{type:String, default:Date.now()}
})

module.exports=mongoose.model('notes',NotesSchema);