const multer = require("./multerPublicacionConfig")

const upload = multer.single("foto_publicacion")

const multerError ={
    msg: "Solo se admiten archivos JPG, JPEG , PNG , GIF"
}

module.exports = (req, res , next) => {   
    upload(req, res, (err) => {
        if(err) {
            res.render("./products/crearpublicacionBis", {multerError : multerError , oldBody: req.body});
        }
        next()
    })
}
