const db = require("../database/models");
const {validationResult} = require("express-validator");
const { Op } = require("sequelize");
const req = require("express/lib/request");


const productoController = {
  listAll: (req, res) => {
    db.Libro.findAll({
      include: [{ association: "categoria" }, { association: "editorial" }, { association: "autores" }],
    })
      .then((libros) => res.send(libros))
      .catch((e) => console.log(e));
  },

  buscarISBN: (req , res) => {
    res.render("./products/buscarISBN" , {authUser: req.session.authUser})
  },  

  infoISBN: (req , res) => {
    let errors = validationResult(req);
    
    if(!errors.isEmpty()){
      res.render("./products/buscarISBN" , {errors: errors.mapped() , authUser: req.session.authUser})
    }

    db.Libro.findOne({
      where: {
        isbn: req.body.isbn
      },
      include: [{ association: "categoria" }, { association: "editorial" }, { association: "autores" }]
    }).then(libro => {

      if(libro){
        res.render("./products/crearpublicacion" , {libro: libro , authUser: req.session.authUser })
      }else{
        db.Categoria.findAll()
        .then(categorias => {
          console.log(categorias);
          res.render("./products/crearpublicacionBis" , {authUser: req.session.authUser , isbn: req.body.isbn, categorias: categorias})
        })
        .catch(e=>console.log(e))
      }
    }).catch(error => console.log(error))

  },

  crearPublicacion: (req, res) => {
    let userId = req.params.userId;
    let libroId = req.params.libroId;
    let libro_img = ""
    let errors = validationResult(req);

    if(!errors.isEmpty()){
      db.Libro.findByPk(libroId,{
        include: [{ association: "categoria" }, { association: "editorial" }, { association: "autores" }]
      }).then(libro=>{
  
        res.render("./products/crearpublicacion" , {errors: errors.mapped(), authUser: req.session.authUser , libro: libro})
      })
      .catch(e=>console.log(e))
    }

    req.file?libro_img=req.file.filename:libro_img = "default.jpg"

    let publicacion = {
      titulo: req.body.pulic_titulo,
      detalle: req.body.pulic_detalle,
      estado: req.body.pulic_estado,
      precio: req.body.pulic_precio,
      estado_libro: req.body.pulic_estado,
      id_libro: libroId,
      id_usuario: userId,
      foto: libro_img,
    }

    db.Publicacion.create(
      {
        ...publicacion
      }
    ).then(() => res.send("Publicacion creada!!"))
    .catch((e) => console.log(e))
  },

  crearPublicacionBis: (req ,res) => {
    let public_img = ""
    
    req.file?public_img=req.file.filename:public_img = "default.jpg"

    let errors = validationResult(req)

    if(!errors.isEmpty()){
      db.Categoria.findAll()
      .then(categorias=>{
        res.render("./products/crearpublicacionBis" , {errors: errors.mapped(), authUser: req.session.authUser , isbn: req.params.isbn , categorias: categorias})
      })
      .catch(e=>console.log(e))
    }

    db.Autor.findOrCreate({
      where: {
        nombre: req.body.autor_nombre,
        apellido: req.body.autor_apellido
      }
    }).then(([autor]) => {
      db.Editorial.findOrCreate({
        where: {
          nombre: req.body.editorial_nombre
        }
      }).then(([editorial]) => {
        db.Libro.findOrCreate({
          where : {
            isbn: req.params.isbn,
          },
          defaults: {
            titulo: req.body.libro_titulo,
            edicion: req.body.libro_edicion,
            fecha_edicion: req.body.libro_fechaEdicion,
            id_editorial: editorial.id,
            id_categoria: req.body.categoria_id
          }            
        }).then(([libro]) => {
          db.Publicacion.create(
            {
              titulo: req.body.public_titulo,
              detalle: req.body.public_detalle,
              estado_libro: req.body.public_estado,
              precio: req.body.public_precio,
              foto: public_img,
              id_libro: libro.id,
              id_usuario: req.params.userId
            }
          ).then(publicacion => res.send(publicacion))
          .catch(e=>console.log(e))
        }).catch(e=>console.log(e))
      }).catch(e=>console.log(e))
      .catch(e=>console.log(e))
    }).catch(e=>console.log(e))
  },

  buscarEditorial: (req , res) => {
    db.Editorial.findOne (
      {
        where: {
          nombre: {
            [Op.substring]: req.body.editorial
          }
        }
      }
    ).then(editorial => res.render("./products/crearpublicacionAAA", {editorial : editorial , user: req.session.authUser} ))
    .catch((e)=>console.log(e))
  },

  buscarAutor: (req , res) => {
    db.Autor.findOne (
      {
        where: {
          nombre: {
            [Op.substring]: req.body.nombre
          }
        }
      }
    ).then(autor => res.render("./products/crearpublicacionAAA", {autor : autor , user: req.session.authUser} ))
    .catch((e)=>console.log(e))
  },
};

module.exports = productoController;
