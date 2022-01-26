/*CONFIGURACION ROUTER (EXPRESS) */
const express = require("express");
const router = express.Router();

/*MULTER MIDDLEWARE*/
const uploadUserImage = require ("../middlewares/multerRegisterMiddleware");
const uploadEditedUserImage = require ("../middlewares/multerEditUserMiddleware");

/*CONTROLADORES */
const userController = require("../controllers/userController");

/*VALIDADORES DE FORMULARIOS (EXPRESS-VALIDATOR)*/
const validateLoginForm = require("../middlewares/checkLoginFormMiddleware");
const validateRegisterForm = require ("../middlewares/checkRegisterFormMiddleware");

/*VALIDADORES DE SESION*/
const authUser = require("../middlewares/authUsersMiddleware");
const guestUser = require("../middlewares/guestMiddleware");

/*-------------------------------------------------------------------------*/

/* GET formulario Registro de Usuario */
router.get("/register", guestUser, userController.register);

/* GET formulario Login de Usuario */
router.get("/login", guestUser, userController.login);

/* GET pagina detalle de Usuario */
router.get("/userHome/:id", authUser, userController.userDetails);

/* GET pagina edicion de Usuario */
router.get("/edit/:id", userController.editUser);

/* PUT pagina edicion de Usuario */
router.put("/update/:id" , uploadEditedUserImage, userController.updateUser);

/* GET Eliminar un Usuario */
router.get("/delete/:id", userController.deleteUser);

/* GET pagina listado de Usuarios */
router.get("/list", userController.list);

/* POST formulario Login de Usuario */
router.post("/login", validateLoginForm, userController.processLogin);

/* POST Registro de Usuario */
router.post("/register", uploadUserImage, validateRegisterForm, userController.newAccount);

module.exports = router;
