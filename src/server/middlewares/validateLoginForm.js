/* MIDDLEWARE - VALIDA LOS DATOS DEL FORM DE LOGIN (login.ejs) */

const { body } = require("express-validator");

module.exports = [
  body("emailUsuario")
    .notEmpty().withMessage("Debe ingresar un email"),
  body("passUsuario")
    .notEmpty().withMessage("Debe ingresar una password"),
];
