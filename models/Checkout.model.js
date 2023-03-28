const mongoose  = require("mongoose")

const checkoutSchema = mongoose.Schema({
    pincode :{type: Number,required:true},
    city:{type: String,required:true},
    state:{type: String,required:true},
    fullName:{type: String,required:true},
    email:{type: String,required:true},
    address:{type: String,required:true},
    addressType:{type: String,required:true}
})

const CheckoutModel = mongoose.model("Address",checkoutSchema)
module.exports = {CheckoutModel}