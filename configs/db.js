const mongoose=require("mongoose")
const connect=async ()=>{
    return mongoose.connect(process.env.mongo_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(console.log("connected to mongodb")).catch(err=>console.log(err))

}
module.exports=connect