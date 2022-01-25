const multer = require("./multerPublicacionConfig")

const upload = multer.single("foto_publicacion")

const db = require("../database/models")

const multerError ={
    msg: "Solo se admiten archivos JPG, JPEG , PNG , GIF"
}

db.Categoria.findAll();

module.exports = (req, res , next) => {   
    upload(req, res, (err) => {
        if(err) {
            db.Categoria.findAll()
            .then(listaCategorias => {
                res.render("./products/crearpublicacionBis", {multerError : multerError , oldBody: req.body, authUser: req.session.authUser , isbn: req.params.isbn , categorias: listaCategorias });
            })
            .catch(e=>console.log(e))
        }
        next()
    })
}
