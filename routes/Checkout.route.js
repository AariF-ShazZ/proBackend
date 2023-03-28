const express = require("express")
const {CheckoutModel}  = require("../models/Checkout.model")

const checkoutRoutes = express.Router()

checkoutRoutes.get("/", async (req,res) => {
    try{
        let addressData = await CheckoutModel.find()
        res.send(addressData)
    }catch(err){
        res.send("Something is wrong!")
    }
})

checkoutRoutes.post("/post", async (req,res) => {
    const data = req.body
    try{
        let addressData = new CheckoutModel(data)
        await addressData.save()
        res.send("Checkout Successfull")
    }catch(err){
        res.send("Something is wrong!")
    }
})


module.exports = {checkoutRoutes}