const mongoose = require("mongoose")
const bcryptjs = require("bcryptjs")

const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName:String, 
    email:{required:true, type:String, unique:true},
    password:String
})

let saltRound = 15 //The number of times our password is to be hashed
userSchema.pre("save", function(next){
    bcryptjs.hash(this.password, saltRound).then((hashed)=>{
        this.password = hashed
        next()
    }).catch((error)=>{
        console.log(error)
    })
})

let userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)
module.exports = userModel