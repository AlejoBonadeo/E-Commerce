/* MIDDLEWARE - VALIDA LOS DATOS DEL FORM DE CREACION DE PUBLICACION (crearpublicacion.ejs) */
const {check} = require("express-validator");

module.exports = [
  check("pulic_titulo")
    .notEmpty().withMessage("* Debe completar el campo TITULO")
    .isLength({min: 5}).withMessage("* TITULO Debe ser mayor a 5 caracteres"),
  check("pulic_detalle")
    .notEmpty().withMessage("* Debe completar el campo DETALLE"),
  check("pulic_precio")
    .notEmpty().withMessage("* Debe completar el campo PRECIO"),
];