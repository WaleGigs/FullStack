const express = require("express")
const { land, signUp, resetPassword, signIn, verifyToken, uploadPicture } = require("../controllers/userController")
const userRouter = express.Router()

userRouter.get("/", land)
userRouter.post("/signup", signUp)
userRouter.post("/resetpassword",resetPassword)
userRouter.post('/signin', signIn)
userRouter.get("/verifytoken", verifyToken)
userRouter.post("/upload", uploadPicture)
module.exports = userRouter