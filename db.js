const mongoose=require("mongoose")

var mongoURL="mongodb+srv://stacey:stacey@cluster0.ffpttk3.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db=mongoose.connection

db.on("connected", ()=>{
    console.log("mongo db connected successfully")
})

db.on("error", ()=>{
    console.log("failed")
})

module.exports=mongoose