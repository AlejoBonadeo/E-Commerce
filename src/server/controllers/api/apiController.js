const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

const sequelize = db.sequelize;

/*-----------------------------------------------------------------------*/
/* CONTROLADOR DE USUARIO*/

const userController = {
  /* RENDERIZA LISTADO DE USUARIOS */
  allUsers: (req, res) => {
    db.Usuario.findAll()
      .then((usuarios) => {
        res.json(usuarios);
      })
      .catch((e) => console.log(e));
  },

  getUser: (req, res) =>{
    db.Usuario.findAll()
      .then((usuarios) => {
        let usuario =usuarios.filter( usuario => usuario.id === req.params.id)
        res.json(usuario);
      })
      .catch((e) => console.log(e));
  },

  allPublicaciones: (req, res) => {
    db.Publicacion.findAll()
      .then((publicacion) => {
        res.json(publicacion);
      })
      .catch((e) => console.log(e));
  },

  allCategories: (req, res) => {
    db.Categoria.findAll()
      .then((categoria) => {
        res.json(categoria);
      })
      .catch((e) => console.log(e));
  },
} 

module.exports = userController;
