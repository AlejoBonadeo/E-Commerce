const multer = require("./multerUserConfig")

const upload = multer.single("user_img")

const multerError ={
    msg: "Solo se admiten archivos JPG, JPEG , PNG , GIF"
}

module.exports = (req, res , next) => {   
    upload(req, res, (err) => {
        if(err) {
            res.render("./user/register", {multerError : multerError , oldBody: req.body});
        }
        next()
    })
}
