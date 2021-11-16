/*CONFIGURACION ROUTER (EXPRESS) */
const express = require("express");
const router = express.Router();

/*MULTER*/
// TODO pasar esto a un middleware

const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: ( req, file, cb ) => {
    cb(null, path.join(__dirname, '../../web/public/img/user_img'))
  },
  filename: ( req, file, cb ) => {
    const newFileName = 'user-' + new Date().getTime() + path.extname(file.originalname)
    cb(null, newFileName)
  }
})
const upload = multer({ storage })

/*CONTROLADORES */
const userController = require("../controllers/userController");

/*VALIDADORES DE FORMULARIOS (EXPRESS-VALIDATOR)*/
const { check } = require("express-validator");
const validateForm = require("../middlewares/validateForm");
const validateLoginForm = require("../middlewares/checkLoginFormMiddleware");

/*VALIDADORES DE SESION*/
const authUser = require("../middlewares/authUsersMiddleware");
const guestUser = require('../middlewares/guestMiddleware');

/*-------------------------------------------------------------------------*/

/* GET formulario Registro de Usuario */
router.get("/register", guestUser, userController.register);

/* GET formulario Login de Usuario */
router.get("/login", guestUser, userController.login);

/* GET pagina detalle de Usuario */
router.get("/userDetails/:id", authUser, userController.userDetails);

/* POST formulario Login de Usuario */
router.post("/login", validateLoginForm, userController.processLogin);

/* POST Registro de Usuario */
router.post(
  "/register",
  [
    upload.single('user_img'),
    check("nombreDeUsuario", "Por favor ingrese un nombre válido").not().isEmpty(),
    check("emailUsuario", "Por favor ingrese un email válido").isEmail(),
    check("passUsuario", "La contraseña debe tener al menos 7 caracteres").isLength({ min: 6 }),
    validateForm,
  ],
  userController.newAccount
);

module.exports = router;
