const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const app = express()
const userRouter = require("./routes/userRoute")
const {handleError} = require("./middleware/errors")

app.use(bodyParser.json({limit:"100mb"}))
app.use(bodyParser.urlencoded({ extended: true, limit:"100mb" }))
app.use(cors({origin:"*"}))

app.use("/users", userRouter )

app.use(handleError)

const connect = async () => {
    const uri = process.env.MONGO_URI
    try {
        mongoose.set("strictQuery", false)
        await mongoose.connect(uri).then((result)=>{
            console.log("MongoDB connected")
        })
    } catch (error) {
        console.log(error)
    }
}
connect()

app.listen("5760", ()=>{
    console.log("Server started")
})