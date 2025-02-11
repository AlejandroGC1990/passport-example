const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const CloudinaryStorage = require('multer-storage-cloudinary').CloudinaryStorage;

//Configurar Cloudinary
console.log(process.env.CLOUDINARY_KEY)

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder:'ironhack/multer-example',
        allowed_formats: ['jpg', 'png'],
    }
})

module.exports = multer({storage});