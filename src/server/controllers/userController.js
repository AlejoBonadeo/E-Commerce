const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");

const sequelize = db.sequelize;

/*-----------------------------------------------------------------------*/
/* CONTROLADOR DE USUARIO*/

const userController = {
  /* RENDERIZA LISTADO DE USUARIOS */
  list: (req, res) => {
    db.Usuario.findAll()
      .then((usuarios) => {
        res.render("./user/allUsers", { usuarios: usuarios });
      })
      .catch((e) => console.log(e));
  },

  /* RENDERIZA FORMULARIO DE REGISTRO DE USUARIO */
  register: (req, res) => {
    res.render("./user/register");
  },

  /* RENDERIZA FORMULARIO DE LOGIN DE USUARIO */
  login: (req, res) => {
    res.render("./user/login");
  },

  /*CREACION DE NUEVO USUARIO EN DATA BASE*/
  newAccount: (req, res) => {
    let newUser = { ...req.body };

    console.log(req.file);

    if (newUser.passUsuario !== newUser.repeatpassUsuario) {
      return res.render("./user/register", {
        error: "Ambas contraseñas deben ser iguales",
      });
    }

    db.Usuario.findAll({
      where: {
        email: newUser.emailUsuario,
      },
    })
      .then((usuario) => {
        if (usuario.length == 0) {
          const salt = genSaltSync();

          let usuario = db.Usuario.create({
            nombre: newUser.nombreDeUsuario,
            apellido: newUser.apellidoDeUsuario,
            email: newUser.emailUsuario,
            password: hashSync(newUser.passUsuario, salt),
            dni: newUser.dniUsuario,
            direccion: newUser.direccionUsuario,
            localidad: newUser.localidadUsuario,
            provincia: newUser.provinciaUsuario,
            pais: newUser.paisUsuario,
            telefono: newUser.telefonoUsuario,
            img_url: "asdasdasdasdasd",
          })
            .then(() => res.redirect("/"))
            .catch((e) => console.log(e));
        } else {
          res.render("./user/register", {
            error: "El email ya esta siendo usado",
          });
        }
      })
      .catch((e) => console.log(e));
  },

  /*LOGIN DE USUARIO EN APLICACION*/
  processLogin: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Usuario.findOne({
        where: {
          email: req.body.emailUsuario,
        },
      })
        .then((usr) => {
          if (usr == null || !compareSync(req.body.passUsuario, usr.password)) {
            res.render("./user/login", { invalidUser: { msg: "Email o Password incorrectos" } });
          } else {
            if (req.body.checkbox != undefined) {
              res.cookie("savedUserCookie", usr, { maxAge: 1200000 });
            }
            req.session.authUser = usr;

            res.render("./user/welcome", { authUser: usr });
          }
        })
        .catch((e) => console.log(e));
    } else {
      res.render("./user/login", { errors: errors.mapped(), oldBody: req.body });
    }
  },

  /*RENDERIZA DETALLE DE USUARIO POR ID*/
  userDetails: (req, res) => {
    db.Usuario.findByPk(req.params.id)
      .then((usr) => {
        if (usr != null) {
          res.render("./user/userDetails", { authUser: usr });
        }
      })
      .catch((e) => console.log(e));
  },
};

module.exports = userController;
