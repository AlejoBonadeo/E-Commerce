/* MIDDLEWARE - VALIDA LOS DATOS DEL FORM DE CREACION DE PUBLICACION (crearpublicacion.ejs) */
const {check} = require("express-validator");

module.exports = [
  check("libro_titulo")
    .notEmpty().withMessage("* Debe completar el campo TITULO")
    .isLength({min: 5}).withMessage("* TITULO Debe ser mayor a 5 caracteres"),
  check("libro_edicion")
    .notEmpty().withMessage("* Debe completar el campo EDICION"),
  check("libro_fechaEdicion")
    .notEmpty().withMessage("* Debe completar el campo FECHA EDICION"),
  check("editorial_nombre")
    .notEmpty().withMessage("* Debe completar el campo EDITORIAL"),
  check("autor_nombre")
    .notEmpty().withMessage("* Debe completar el campo AUTOR (NOMBRE)"),
  check("autor_apellido")
    .notEmpty().withMessage("* Debe completar el campo AUTOR (APELLIDO)"),
  check("public_titulo")
    .notEmpty().withMessage("* Debe completar el campo TITULO"),
  check("public_detalle")
    .notEmpty().withMessage("* Debe completar el campo DETALLE"),
  check("public_precio")
    .notEmpty().withMessage("* Debe completar el campo PRECIO"),
];