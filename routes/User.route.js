const express = require("express")
const {UserModel} = require("../models/User.model")
const userRoutes = express.Router() 

userRoutes.post("/register" , async(req,res) => {
    const {userName,userEmail,userMobile,userPassword} = req.body
    console.log(userName,userEmail,userMobile,userPassword)
    try{
        // await UserModel.insertMany()
        let user = new UserModel({userName,userEmail,userMobile,userPassword})
        await user.save()
        res.send("Register SuccessFull")
    }catch(err){
        res.send("Registration Failed")
    }
})

module.exports={userRoutes}