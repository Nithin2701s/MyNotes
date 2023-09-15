const connectMongo = require('./db')
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World!")
})

app.listen(4000,()=>{
    connectMongo()
    console.log('listening to port 4000')
})