const { hashSync, genSaltSync, compareSync } = require("bcryptjs");
const fs = require("fs");
const path = require("path");

const usersFilePath = path.resolve(__dirname, "../data/Users.json");

const { validationResult } = require("express-validator");


/*-----------------------------------------------------------------------*/
/* CONTROLADOR DE USUARIO*/

const userController = {
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

    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
    const { body } = req;

    if (body.passUsuario !== body.repeatpassUsuario) {
      return res.render("./user/register", {
        error: "Ambas contraseñas deben ser iguales",
      });
    }
    for (user of users) {
      if (user.emailUsuario === body.emailUsuario) {
        return res.render("./user/register", {
          error: "El email ya esta registrado",
        });
      }
    }

    const salt = genSaltSync();
    body.passUsuario = hashSync(body.passUsuario, salt);

    delete body.aceptaTerminos;
    delete body.repeatpassUsuario;

    body.imagenDeUsuario = req.file.path

    users = [
      ...users,
      {
        idUsuario: new Date().getTime(),
        ...body,
      },
    ];

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 3));

    delete body.passUsuario;
    req.session.authUser = { ...body };


    res.redirect("/");
  },

  /*LOGIN DE USUARIO EN APLICACION*/
  processLogin: (req, res) => {

    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

      let authUser = users.find((usr) => {
        if (usr.emailUsuario == req.body.emailUsuario && compareSync(req.body.passUsuario, usr.passUsuario )){
          return usr;
        }
      });

      if (authUser != undefined) {
        if(req.body.checkbox != undefined){
          res.cookie('savedUserCookie', authUser, {maxAge: 1200000})
        }

        req.session.authUser = authUser;
        
        res.render("./user/welcome", { authUser: authUser});
      } else {
        res.render("./user/login", {invalidUser: {msg: "Email o Password incorrectos"}});
      }
    } else {
        res.render("./user/login", { errors: errors.mapped(), oldBody: req.body });
    }
  },

  /*RENDERIZA DETALLE DE USUARIO POR ID*/
  userDetails: (req, res)=>{
    let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

    let authUser = users.find((usr) => {
      if (usr.idUsuario == req.params.id){
        return usr;
      }
    });
    
    res.render('./user/userDetails', {authUser:authUser})

  }
};

module.exports = userController;
