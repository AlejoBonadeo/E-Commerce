const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/*MULTER MIDDLEWARE*/
const uploadBookImage = require ("../middlewares/multerPublicacionMiddleware");

/*VALIDADORES DE SESION*/
const authUser = require("../middlewares/authUsersMiddleware");

/*VALIDADORES DE FORMULARIOS (EXPRESS-VALIDATOR)*/
const validatecrearPublicacionBisForm = require("../middlewares/checkPublicacionBisFormMiddleware");
const validatecrearPublicacionForm = require("../middlewares/checkPublicacionFormMiddleware");
const validateISBNForm = require("../middlewares/checkISBNFormMiddleware");

/*-----------------------------------------------------------------------------*/

/* GET - INACTIVA PUBLICACION. */
router.get("/eliminar/:publicacionId", productoController.desactivarPublicacion);

/* GET - RENDERIZA PAGINA DE INICIO. */
router.get("/all", productoController.listAll);

/* GET - RENDERIZA LISTADO DE PUBLICACIONES ACTIVAS DE USUARIO. */
router.get("/publicacionesactivas/:userId", productoController.listPublucacionesActivas);

/* GET - RENDERIZA PAGINA BUSCAR POR ISBN */
router.get("/buscarISBN", authUser, productoController.buscarISBN);

/* POST - BUSCA LIBRO POR CODIGO ISBN */
router.post("/buscarISBN", validateISBNForm, productoController.infoISBN);

/* POST - CREA PUBLICACION CON LIBRO EXISTENTE */
router.post("/crearpublicacion/:userId&:libroId",uploadBookImage, validatecrearPublicacionForm, productoController.crearPublicacion);

/* POST - CREA PUBLICACION DESDE CERO */
router.post("/crearpublicacionBis/:userId&:isbn",uploadBookImage, validatecrearPublicacionBisForm, productoController.crearPublicacionBis);

/* GET - RENDERIZA FORMULARIO EDICION DE PUBLICACION. */
router.get("/editar/:publicacionId", productoController.edicion);

/* PUT - RENDERIZA FORMULARIO EDICION DE PUBLICACION. */
router.put("/editar/:publicacionId",uploadBookImage, validatecrearPublicacionForm, productoController.editarPublicacion);

/* GET - RENDERIZA DETALLE DE PUBLICACION. */
router.get("/detalle/:publicacionId", productoController.detallePublicacion);


module.exports = router;
