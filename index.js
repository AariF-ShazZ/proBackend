const express  = require("express")
require("dotenv").config()
const cors = require("cors")
const connect   = require("./configs/db")
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

app.listen(process.env.port,async ()=>{
    await connect()
    console.log("server is running on port 8080")
})