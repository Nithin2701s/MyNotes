const express =require('express')
const router = express.Router();

module.exports=router.get('/',(req,res)=>{
   const obj={
        a:'HI',
        number:'27'
    }
    res.json(obj)
})