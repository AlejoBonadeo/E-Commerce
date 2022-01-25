/* MIDDLEWARE - VALIDA LOS DATOS DEL FORM DE BUSQUEDA POR ISBN */
const {check} = require("express-validator");

module.exports = [
  check("isbn")
    .notEmpty().withMessage("* Debe completar el campo ISBN")
];