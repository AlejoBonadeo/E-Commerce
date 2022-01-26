const multer = require("./multerPublicacionConfig")

const upload = multer.single("foto_publicacion")

const db = require("../database/models")

const multerError ={
    msg: "Solo se admiten archivos JPG, JPEG , PNG , GIF"
}

module.exports =  async (req, res , next) => {
    try {
        let listaCategorias = await db.Categoria.findAll()
        upload(req, res, (err) => {
            if(err) {
                
                res.render("./products/crearpublicacionBis", {multerError : multerError , oldBody: req.body, authUser: req.session.authUser , isbn: req.params.isbn , categorias: listaCategorias });
            }
            next()
        })
        
    } catch (error) {
        res.json({
            ok: false,
            msg: "Fallo el middleware de carga de imagen"
        });
        
    }   
    
}
