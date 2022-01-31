const db = require("../database/models");
const {validationResult} = require("express-validator");
const { Op, where } = require("sequelize");
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
    }else{
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
    }

    
  },

  crearPublicacionBis: async (req ,res) => {
    let public_img = ""
    
    req.file?public_img=req.file.filename:public_img = "default.jpg"

    let errors = validationResult(req)

    if(!errors.isEmpty()){
      db.Categoria.findAll()
      .then(categorias=>{
        res.render("./products/crearpublicacionBis" , {errors: errors.mapped(), authUser: req.session.authUser , isbn: req.params.isbn , categorias: categorias})
      })
      .catch(e=>console.log(e))
    }else{
      try {
      let [autor] = await db.Autor.findOrCreate({where: {nombre: req.body.autor_nombre, apellido: req.body.autor_apellido}});
      
      let [editorial] = await db.Editorial.findOrCreate({where:{nombre: req.body.editorial_nombre}})
      
      let [libro] = await db.Libro.findOrCreate(
        {where:{isbn: req.params.isbn},
        defaults: {
          titulo: req.body.libro_titulo,
          edicion: req.body.libro_edicion,
          fecha_edicion: req.body.libro_fechaEdicion,
          id_editorial: editorial.id,
          id_categoria: req.body.categoria_id
        }})
      
      let libroAutor = await db.Libro_Autor.create({
        id_libro: libro.id,
        id_autor: autor.id
      })

      let publicacion = await db.Publicacion.create(
        {
          titulo: req.body.public_titulo,
          detalle: req.body.public_detalle,
          estado_libro: req.body.public_estado,
          precio: req.body.public_precio,
          foto: public_img,
          id_libro: libro.id,
          id_usuario: req.params.userId
        }
      )

      res.redirect(`/user/userHome/${req.session.authUser.id}`)


    } catch (error) {
      res.json({
        ok: false,
        msg: "Error del servidor",
      })
    }
    }
    
    
  },

  listPublucacionesActivas: async (req , res) => {
    try {
      let userId = req.params.userId;
      let listaPublicaciones = await db.Publicacion.findAll({
        where: {
         id_usuario: userId,
         status: 1
        },
        include: [{ association: "libro" }]
       });

      res.render("./products/publicacionesactivas", {authUser: req.session.authUser , publicaciones: listaPublicaciones})
      
    } catch (error) {
      res.json({
        ok: false,
        msg: "Error del servidor",
      }) 
    }
  },

  desactivarPublicacion: (req , res) => {
    let publicacionId = req.params.publicacionId

    db.Publicacion.update({
      status: 0     
    },
    {where:{
      id: publicacionId
    }}).then(()=> res.redirect(`/producto/publicacionesactivas/${req.session.authUser.id}`))
    .catch(e=>console.log(e))
  },

  edicion: (req , res) => {
    let idPublicacion = req.params.publicacionId

    db.Publicacion.findByPk(idPublicacion)
    .then(publicacion => {
      res.render("./products/editarPublicacion" , {authUser: req.session.authUser, publicacion: publicacion})
    })
    .catch(e=>console.log(e))
  },

  editarPublicacion: async (req , res) => {
    try {
      let idPublicacion = req.params.publicacionId

      let errors = validationResult(req)

      if(!errors.isEmpty()){
        let categorias = await db.Categoria.findAll()
        let publicacion = await db.Publicacion.findByPk(idPublicacion)
        
        res.render("./products/editarPublicacion" , {errors: errors.mapped(), authUser: req.session.authUser , publicacion: publicacion , categorias: categorias})
      }else{
        let publicacionNueva = {
          titulo: req.body.pulic_titulo,
          detalle: req.body.pulic_detalle,
          estado: req.body.pulic_estado,
          precio: req.body.pulic_precio,        
        }
  
        if(req.file){
          publicacionNueva.foto=req.file.filename;
        }
  
        await db.Publicacion.update(
          {
            ...publicacionNueva
          },
          {
            where:{
              id: idPublicacion
            }
          })
      
        res.redirect(`/producto/publicacionesactivas/${req.session.authUser.id}`)

      } 
    } catch (error) {
      res.json({
        ok: false,
        msg: "Error!"
      }) 
    }
  },

  detallePublicacion: async (req , res) => {
    try {
      let publicacion = await db.Publicacion.findByPk(req.params.publicacionId);

      let libro = await db.Libro.findByPk(publicacion.id_libro,{include: [{ association: "categoria" }, { association: "editorial" }, { association: "autores" }]})

      let usuario = await db.Usuario.findByPk(publicacion.id_usuario)

      if(publicacion){
        res.render("./products/producto" , {authUser: req.session.authUser , publicacion: publicacion , libro: libro , usuario: usuario})
      }

      else{

        res.json({
          ok: false,
          msg: "Error! No se encontro la publicacion buscada."
        })
      }

    } catch (error) {
      res.json({
        ok: false,
        msg: "Error Servidor!"
      })
      
    }
  },


  /* buscar desde la NavBar  */
  buscarLibro: async (req , res) => {
    
      let publicacion = await db.Publicacion.findAll({
        
        where: {titulo: {[Op.like]: '%'+req.params.titulo+'%'}
                }

        }).then(publicacion => {

            console.log(publicacion)
            
            if(publicacion){
              res.render("./products/producto" , {authUser: req.session.authUser , publicacion: publicacion })
            }else{
              res.json({
                ok: false,
                msg: "Error! No se encontro ninguna publicacion con ese nombre."
              })
            } 
        })
  }
}

module.exports = productoController;
