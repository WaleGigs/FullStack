const handleError = (error, req, res) =>{
    console.log(error)
    res.status(500).send({ message: "Internal server error", status: false })
}

module.exports = {handleError}