const data = require("../data/products.json");
const fs = require("fs");
const path = require("path");

const db = require("../database/models");
const { body } = require("express-validator");
const { decodeBase64 } = require("bcryptjs");

const librosFilePath = path.resolve(__dirname, "../data/products.json");
const libros = JSON.parse(fs.readFileSync(librosFilePath, "utf-8"));

const productoController = {
  listAll: (req, res) => {
    db.Libro.findAll({
      include: [{ association: "categoria" }, { association: "editorial" }, { association: "autores" }],
    })
      .then((libros) => res.send(libros))
      .catch((e) => console.log(e));
  },

  buscarLibro: (req , res) => {
    db.Libro.findOne({
      where: {
        isbn: req.body.isbn
      }
    }).then(libro => {
      if(libro){
        console.log(libro);
        res.render("./products/crearpublicacion" , {authUser: req.session.authUser , libro: libro})
      }else{
        res.send("Libro no existe")
      }
    }).catch(error => console.log(error))

  },

  createPublicacion: (req , res) => {
    let libroID = req.params.libroId

    if(libroID==2)
    res.send (libroID)

  },

  carrito: (req, res) => {
    res.render("./products/carrito");
  },

  producto: (req, res) => {
    res.render("./products/producto", {
      libro: data.filter((libro) => libro.id == req.params.id),
      authUser: req.session.authUser,
    });
  },

  crearProducto: (req, res) => {
    res.render("./products/crearproducto", { authUser: req.session.authUser });
  },

  buscarISBN: (req, res) => {
    res.render("./products/crearpublicacion", { authUser: req.session.authUser });
  },

  productoCreado: (req, res) => {
    let data = fs.readFileSync(path.resolve(__dirname, "../data/products.json"), "utf-8");
    data = JSON.parse(data);
    data.push({ ...req.body, id: new Date().getTime() });
    fs.writeFileSync(path.resolve(__dirname, "../data/products.json"), JSON.stringify(data, null, 3));
    res.redirect("/");
  },

  editarProducto: (req, res) => {
    res.render("./products/editarproducto", {
      libro: data.filter((libro) => libro.id == req.params.id),
    });
  },
  /////////////////////////////////////////////////////////////////
  productoEditado: (req, res) => {
    let nuevaListaLibros = libros.map((libro) => {
      if (libro.id == req.params.id) {
        let newLibro = { id: libro.id, ...req.body };
        return newLibro;
      } else {
        return libro;
      }
    });

    fs.writeFileSync(librosFilePath, JSON.stringify(nuevaListaLibros, null, " "));
    res.redirect("/");
  },

  ////////////////////////////////////////////////////////////////
  delete: (req, res) => {
    fs.writeFileSync(
      librosFilePath,
      JSON.stringify(
        libros.filter((libro) => req.params.id != libro.id),
        null,
        " "
      )
    );
    res.redirect("/");
  },
  subirPublicacion: async (req, res) => {
    try {
      const libro = await db.Libro.findOne({
        where: {
          isbn: req.body.isbn,
        },
      });
      if (!libro) {
        return res.status(404).json({
          ok: false,
          msg: "El libro no existe en la base de datos",
        });
      }
      const publicacion = await db.Publicacion.create({
        titulo: libro.titulo,
        detalle: req.body.detalle,
        estado_libro: req.body.estado_libro,
        precio: req.body.precio,
        fecha_publicacion: req.body.fecha_publicacion,
        id_libro: libro.id,
        id_usuario: req.session.authUser.id,
      });
      res.status(201).json({
        ok: true,
        publicacion,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Error del servidor",
      });
    }
  },
  borrarPublicacion(req, res) {
    db.Publicacion.update({
      where: { id: req.params.id },
    })
      .then((_) => res.json({ ok: true }))
      .catch((_) => res.json({ ok: false, msg: "Error del servidor" }));
  },
  editarPublicacion(req, res) {
    db.Publicacion.destroy(
      {
        id: req.params.id,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then((_) => res.json({ ok: true }))
      .catch((_) => res.json({ ok: false, msg: "Error del servidor" }));
  },
  crearLibro: async (req, res) => {
    try {
      const editorial = await db.Editorial.findOne({
        where: {
          nombre: req.body.editorial,
        },
      });
      const categoria = await db.Categoria.findOne({
        where: {
          categoria: req.body.categoria,
        },
      });
      const libro = await db.Libro.create({
        titulo: req.body.titulo,
        isbn: req.body.isbn,
        edicion: req.body.edicion,
        fecha_edicion: new Date().getTime(), //Cambiar esto
        id_editorial: editorial.id,
        id_categoria: categoria.id,
      });
      res.status(201).json({
        ok: true,
        libro,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: "Error del servidor",
      });
    }
  },
  crearEditorial(req, res) {
    db.Editorial.create({
      nombre: req.body.nombre,
      direccion: req.body.direccion,
      telefono: req.body.telefono,
    })
      .then((resp) => res.json(resp))
      .catch((err) => res.json({ ok: false, msg: "Error del servidor" }));
  },
  crearCategoria(req, res) {
    db.Categoria.create({
      categoria: req.body.categoria,
    })
      .then((resp) => res.json(resp))
      .catch((_) => res.json({ ok: false, msg: "Error del servidor" }));
  },
};

module.exports = productoController;
