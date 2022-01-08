/* MIDDLEWARE - VALIDA LOS DATOS DEL FORM DE REGISTRO DE USUARIO (login.ejs) */
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../web/public/img/user_img"));
  },
  filename: (req, file, cb) => {
    const newFileName = "user-" + new Date().getTime() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

const { check } = require("express-validator")
const validateForm = require("../middlewares/validateForm");

module.exports = [
  upload.single("user_img"),
  check("nombreDeUsuario").notEmpty().withMessage("Por favor ingrese un nombre válido"),
  check("emailUsuario").isEmail().withMessage("Por favor ingrese un email válido"),
  check("passUsuario").isLength({ min: 6 }).withMessage("La contraseña debe tener al menos 7 caracteres"),
  validateForm,]