const express  = require("express")
require("dotenv").config()
const cors = require("cors")
const {connection}   = require("./configs/db")
const {userRoutes} = require("./routes/User.route")
const {productRoutes} = require("./routes/Product.route")

const app  = express()
app.use(cors())

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