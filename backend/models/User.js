const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    timestamp:{type:String, default:Date.now()}
})

module.exports=mongoose.model('user',UserSchema);