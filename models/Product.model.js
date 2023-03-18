const mongoose  = require("mongoose")

const productSchema = mongoose.Schema({
    priority: String,
    priority2: String,
    priority3: String,
    product_item__aspect_ratio_href: String,
    product_item__primary_image_src: String,
    product_item__secondary_image_src: String,
    product_item_meta__title: String,
    rating__stars:Number,
    rating__caption:String,
    m_0:String,
    price:String,
    price_2:String,
    visually_hidden_3:String,
    product_item__quick_buy_button_2:String,
    visually_hidden_4:String,
    ml_2:String 
})

const ProductModel = mongoose.model("products",productSchema)
module.exports = {ProductModel}