const express = require("express")
const { land, signUp } = require("../controllers/userController")
const userRouter = express.Router()

userRouter.get("/", land)
userRouter.post("/signup", signUp)
module.exports = userRouter