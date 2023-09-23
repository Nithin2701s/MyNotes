const connectMongo = require('./db')
const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello World!")
})
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(4000,()=>{
    connectMongo()
    console.log('listening to port 4000')
})