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
  }
}

module.exports = userController;
