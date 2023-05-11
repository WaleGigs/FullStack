const mongoose = require("mongoose")

const uploadModel = new mongoose.Schema({
    secure_url: { type: String, trim: true, required: true },
    public_id: { type: String, trim: true, required: true }
})

const uploadSchema = mongoose.models.upload_tbs || mongoose.model("upload_tbs", uploadModel)
module.exports = uploadSchema