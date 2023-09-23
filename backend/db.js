const mongoose =require('mongoose');

const URI = "mongodb+srv://Nithin:Nithin2701cns@cluster0.lbyurpe.mongodb.net/Nithin?retryWrites=true&w=majority"

const connectMongo = ()=>{
    mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log('Connected to mongo')
})
}
module.exports=connectMongo