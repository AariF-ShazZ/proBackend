const mongoose  = require("mongoose")

const userSchema = mongoose.Schema({
    userName : String,
    userEmail:String,
    userMobile:Number,
    userPassword:String
})

const UserModel = mongoose.model("user",userSchema)
module.exports = {UserModel}