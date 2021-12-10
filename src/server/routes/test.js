/*CONFIGURACION ROUTER (EXPRESS) */
const express = require("express");
const router = express.Router();
const db = require("../database/models");
const { Op } = require("sequelize");

router.get("/sequelize/usuarios", (req, res) => {
  db.Usuario.findAll()
    .then((usuarios) => res.send(usuarios))
    .catch((e) => console.log(e));
});

router.get("/sequelize/publicaciones", (req, res) => {
  db.Publicacion.findAll({
    include: [{ association: "libro" }, { association: "usuario" }, { association: "fotos" }],
  })
    .then((publicaciones) => res.send(publicaciones))
    .catch((e) => console.log(e));
});

router.get("/sequelize/usuarioCarrito/:email", (req, res) => {
  db.Usuario.findAll({
    where: {
      email: { [Op.eq]: req.params.email },
    },
    include: [{ association: "publicaciones" }, { association: "carritos" }],
  })
    .then((usuarios) => res.send(usuarios))
    .catch((e) => console.log(e));
});

router.get("/sequelize/libros", (req, res) => {
  db.Libro.findAll({
    include: [{ association: "editorial" }, { association: "categoria" }, { association: "autores" }],
  })
    .then((libros) => res.send(libros))
    .catch((e) => console.log(e));
});

router.get("sequelize/editoriales", (req, res) => {});

module.exports = router;
