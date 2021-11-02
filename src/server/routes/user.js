const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userController = require("../controllers/userController");
const validateForm = require("../middlewares/validateForm");

/* GET home page. */
router.get("/register", userController.register);

router.get("/login", userController.login);

router.post(
    '/register',
    [
        check('nombreDeUsuario', 'Por favor ingrese un nombre válido').not().isEmpty(),
        check('emailUsuario', 'Por favor ingrese un email válido').isEmail(),
        check('passUsuario', 'La contraseña debe tener al menos 7 caracteres').isLength({min: 6}),
        validateForm()
    ] 
    ,userController.newAccount
)

module.exports = router;
