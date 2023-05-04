const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const app = express()
const userRouter = require("./routes/userRoute")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({origin:"*"}))

app.use("/users", userRouter )

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

app.listen("5550", ()=>{
    console.log("Server started")
})