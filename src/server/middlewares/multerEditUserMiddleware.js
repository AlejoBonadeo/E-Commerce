const multer = require("./multerUserConfig")
const db = require("../database/models")

const upload = multer.single("user_img")

const multerError ={
    msg: "Solo se admiten archivos JPG, JPEG , PNG , GIF"
}

module.exports = async (req, res , next) => {
    try {
        let usuario = await db.Usuario.findByPk(req.params.id)

        upload(req, res, (err) => {
            if(err) {
                res.render("./user/editUser", {multerError : multerError , oldBody: req.body, usuario: usuario});
            }
            next()
        })
        
    } catch (error) {
        
    }
    
}
