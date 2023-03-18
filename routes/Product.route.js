const express = require("express")
const { ProductModel } = require("../models/Product.model")
const productRoutes = express.Router()

productRoutes.get("/", async (req, res) => {
    try {
        let productsItem = await ProductModel.find()
        res.send(productsItem)
        // console.log(productsItem);
    } catch (err) {
        res.send("Products Can't get from the Database")
    }
})

productRoutes.post("/post", async (req, res) => {
    const products = req.body
    console.log(products)
    try {
        // await UserModel.insertMany()
        let productsItem = new ProductModel(products)
        await productsItem.save()
        res.send("Product Added to the Database SuccessFully")
    } catch (err) {
        res.send("Product Can't add to the Database")
    }
})
productRoutes.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    // console.log(id)
    try {
        // await UserModel.insertMany()
        await ProductModel.findByIdAndDelete({ "_id": id })
        res.send("Product Delete from the Database SuccessFully")
    } catch (err) {
        res.send("Product Can't Delete from the Database")
    }
})
productRoutes.patch("/update/:id", async (req, res) => {
    const products = req.body
    const id = req.params.id
    const productsItem = await ProductModel.findOne({ "_id": id })
    console.log("productsItem =>", productsItem)
    try {

        if (products.priority!== productsItem.priority && products.priority2!==productsItem.priority2 && products.priority3 !== productsItem.priority3 && products.product_item__aspect_ratio_href!==productsItem.product_item__aspect_ratio_href
            && products.product_item__primary_image_src!==productsItem.product_item__primary_image_src && products.product_item__secondary_image_src!==productsItem.product_item__secondary_image_src
            && products.product_item_meta__title!==productsItem.product_item_meta__title && products.rating__stars!==productsItem.rating__stars
            && products.rating__caption!==productsItem.rating__caption && products.m_0!==productsItem.m_0
            && products.price!==productsItem.price && products.price_2!==productsItem.price_2
            && products.visually_hidden_3!==productsItem.visually_hidden_3 && products.product_item__quick_buy_button_2!==productsItem.product_item__quick_buy_button_2
            && products.visually_hidden_4!==productsItem.visually_hidden_4 && products.ml_2!==productsItem.ml_2) {
            await ProductModel.findByIdAndUpdate({ "_id": id }, products)
          
        } else {
            if (products.priority!== productsItem.priority) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { priority: products.priority })
               
            }

            if ( products.priority2!==productsItem.priority2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { priority2: products.priority2 })
              
            }

            if ( products.priority3!==productsItem.priority3) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { priority3: products.priority3 })
              
            }

            if (products.product_item__aspect_ratio_href!==productsItem.product_item__aspect_ratio_href) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__aspect_ratio_href: products.product_item__aspect_ratio_href })
     
            }

            if ( products.product_item__primary_image_src!==productsItem.product_item__primary_image_src) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__primary_image_src: products.product_item__primary_image_src })
       
            }
            if (products.product_item__secondary_image_src!==productsItem.product_item__secondary_image_src) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__secondary_image_src: products.product_item__secondary_image_src })
                
            }
            if (products.product_item_meta__title!==productsItem.product_item_meta__title) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item_meta__title: products.product_item_meta__title })
                
            }
            if (products.rating__stars!==productsItem.rating__stars) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { rating__stars: products.rating__stars })
                
            }
            if ( products.rating__caption!==productsItem.rating__caption) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { rating__caption: products.rating__caption })
               
            }
            if (products.m_0!==productsItem.m_0) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { m_0: products.m_0 })
               
            }
            if (products.price!==productsItem.price) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { price: products.price })
                
            }
            if (products.price_2!==productsItem.price_2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { price_2: products.price_2 })
             
            }
            if (products.visually_hidden_3!==productsItem.visually_hidden_3) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { visually_hidden_3: products.visually_hidden_3 })
                
            }
            if (products.product_item__quick_buy_button_2!==productsItem.product_item__quick_buy_button_2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { product_item__quick_buy_button_2: products.product_item__quick_buy_button_2 })
                
            }
            if (products.visually_hidden_4!==productsItem.visually_hidden_4) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { visually_hidden_4: products.visually_hidden_4 })
                
            }
            if (products.ml_2!==productsItem.ml_2) {
                await ProductModel.findByIdAndUpdate({ "_id": id }, { ml_2: products.ml_2 })
               
            }
        }
        res.send("Product Updated to the Database SuccessFully")
    } catch (err) {
        res.send("Product Can't update to the Database")
    }
})

module.exports = { productRoutes }
