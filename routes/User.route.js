const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { UserModel } = require("../models/User.model")

const userRoutes = express.Router()

userRoutes.post("/register", async (req, res) => {
    const { userName, userEmail, userMobile, userPassword } = req.body
    // console.log(userName,userEmail,userMobile,userPassword)
    try {
        // await UserModel.insertMany()
        bcrypt.hash(userPassword, 5, async (err, hash) => {
            if (err) {
                console.log(err);
            } else {
                let user = new UserModel({ userName, userEmail, userMobile, userPassword:hash })
                await user.save()
                res.send("Register SuccessFull")
            }
        })
    } catch (err) {
        res.send("Registration Failed")
    }
})

userRoutes.post("/login",async(req,res) =>{
    const {userEmail,userPassword} = req.body
    try{
        const user =  await UserModel.find({userEmail})
        // console.log("user =>",userEmail);
        if(user.length>0){
            bcrypt.compare(userPassword, user[0].userPassword, (err, result)  => {
                // result == true
                if(result){
                    const token = jwt.sign({_id:user[0]._id},process.env.key)
                    res.send({"msg":"Login successfull!","token":token})
                }else {
                    res.send("Invalid credentials")
                }
            });   
        }else{
            res.send("Wrong credentials")
        }
    }catch(err){
        res.send("Something went wrong")
        console.log(err);
    }
    
})

module.exports = { userRoutes }