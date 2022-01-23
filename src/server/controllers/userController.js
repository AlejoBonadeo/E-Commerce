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

  /* RENDERIZA FORMULARIO DE EDICION DE USUARIO */
  editUser: (req, res) => {
    let id = req.params.id;

    db.Usuario.findByPk(id)
      .then((usuario) => {
        res.render("./user/editUser",{usuario:usuario})  
      })
      .catch(e => console.log(e)) 
    

  },

  /* ACTUALIZACION DE USUARIO EN DATA BASE */
  updateUser: (req, res) => {
    let idUser = req.params.id;
    let user = {
        nombre: req.body.nombreDeUsuario,
        apellido:req.body.apellidoDeUsuario,
        email:req.body.emailUsuario,
        dni:req.body.dniUsuario,
        direccion:req.body.direccionUsuario,
        localidad:req.body.localidadUsuario,
        provincia:req.body.provinciaUsuario,
        pais:req.body.paisUsuario,
        telefono:req.body.telefonoUsuario,
    }
    if(req.file){
      user.foto=req.file.filename;
    }

    db.Usuario.update(
      {
        ...user
      },
      {
        where: {id: idUser}
      }).then(()=> {
        return res.redirect("/user/list")})            
    .catch(error => res.send(error))
  },

  /* ELIMINA USUARIO EN DATA BASE */
  deleteUser: (req, res) => {
    let userId = req.params.id;
    db.Usuario.destroy(
      {where: {id: userId}, force: true})
    .then(()=>{
        return res.redirect('/user/list')})
    .catch(e => console.log(e));
  },

  /* RENDERIZA FORMULARIO DE LOGIN DE USUARIO */
  login: (req, res) => {
    res.render("./user/login");
  },

  /*CREACION DE NUEVO USUARIO EN DATA BASE*/
  newAccount: (req, res) => {
    let newUser = { ...req.body };
    let errors = validationResult(req);

    console.log(errors.mapped());

    if(!errors.isEmpty()) {
      res.render("./user/register", {errors : errors.mapped(), oldBody: req.body})

    }else{

      db.Usuario.findAll({
        where: {
          email: newUser.emailUsuario,
        },
      })
        .then((usuario) => {
          if (usuario.length == 0) {
            const salt = genSaltSync();

            let userImg = "default.jpg"

            if(req.file)
              userImg = req.file.filename;
              
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
              foto: userImg,
            })
              .then(() => res.redirect("/"))
              .catch((e) => console.log(e));
          } else {
            res.render("./user/register", {
              errorEmail: "El email ingresado ya se encuentra en uso", oldBody: req.body
            });
          }
        })
        .catch((e) => console.log(e));
    }
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

            res.render("./user/userDetails", { authUser: usr });
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
