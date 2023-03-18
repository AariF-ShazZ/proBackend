const express  = require("express")
require("dotenv").config()
const cors = require("cors")
const {connection}   = require("../Backend/configs/db")
const {userRoutes} = require("../Backend/routes/User.route")
const {productRoutes} = require("../Backend/routes/Product.route")

const app  = express()
app.use(cors({
    origin:"*"
}))

app.use(express.json())
app.get("/",(req,res) => {
    res.send("Hello Boy")
})
app.use("/user",userRoutes)
app.use("/product",productRoutes)

app.listen(process.env.port,async(req,res) => {
    try{
         await connection
         console.log(`Server Run Successfully at port number ${process.env.port}`);
    }catch(err){
        console.log(" Trouble connecting to the DB");
        res.send("Trouble connecting to the DB")
    }
})