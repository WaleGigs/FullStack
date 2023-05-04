const userModel = require("../models/userModel")
const land = async (req, res, next) => {
    res.send({ message: "Welcome" });
}
const signUp = async (req, res, next) => {
    let email = req.body.email
    try {
        await userModel.find({ email: email }).then((result) => {
            if (result.length > 0) {
                res.status(409).send({message:"Email already exists.", status:false})
            }else{
                let form = new userModel(req.body)
                form.save().then((result2)=>{
                    console.log(result2)
                    res.status(201).send({message:"Account has been created successfully", status:true})
                }).catch((error)=>{
                    console.log(error)
                })
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({message:error.message || "Internal server error", status:false})
        next(error)
    }
}



module.exports = { land, signUp }