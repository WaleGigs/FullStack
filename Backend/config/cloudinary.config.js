const cloudinary = require("cloudinary").v2

cloudinary.config({
    // cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    // api_key:process.env.CLOUDINARY_API_KEY,
    // api_secret:process.env.CLOUDINARY_API_SECRET
    cloud_name:"woleogunba",
    api_key:"473735162712444",
    api_secret:"lB6yiWTohmHQDZ4YVQBHveB1TG8"
})

module.exports = {cloudinary}