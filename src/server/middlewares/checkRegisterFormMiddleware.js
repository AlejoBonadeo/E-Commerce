/* MIDDLEWARE - VALIDA LOS DATOS DEL FORM DE REGISTRO DE USUARIO (login.ejs) */
const {check} = require("express-validator");
const upload = require("./multerUserConfig");

module.exports = [
  check("nombreDeUsuario")
    .notEmpty().withMessage("* Debe completar el campo NOMBRE")
    .isLength({min: 2}).withMessage("* NOMBRE Debe ser mayor a 2 caracteres"),
  check("apellidoDeUsuario")
    .notEmpty().withMessage("* Debe completar el campo APELLIDO")
    .isLength({min: 2}).withMessage("* APELLIDO debe ser mayor a 2 caracteres"),
  check("emailUsuario")
    .notEmpty().withMessage("* Debe completar el campo EMAIL")
    .isEmail().withMessage("EMAIL debe ser un formato valido"),  
  check("passUsuario")
    .notEmpty().withMessage("* Debe incluir una contraseña")
    .isLength({min: 8}).withMessage("* La contraseña debe tener al menos 8 caracteres"),
  check("repeatpassUsuario")
    .custom((value, {req}) => {
      if(value !== req.body.passUsuario){
        throw new Error("Las contraseñas no son iguales");  
      }
      return true;
    }).withMessage("* Ambas contraseñas deben ser iguales"),
  check("aceptaTerminos")
    .notEmpty().withMessage("* Debe aceptar los terminos y condiciones"),
];