const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/*VALIDADORES DE SESION*/
const authUser = require("../middlewares/authUsersMiddleware");

/*-----------------------------------------------------------------------------*/

/* GET - RENDERIZA PAGINA DE INICIO. */
router.get("/all", productoController.listAll);

/* GET - RENDERIZA PAGINA BUSCAR POR ISBN */
router.get("/buscarISBN", authUser, productoController.buscarISBN);

/* POST - BUSCA LIBRO POR CODIGO ISBN */
router.post("/buscarISBN", productoController.infoISBN);

/* POST - CREA PUBLICACION CON LIBRO EXISTENTE */
router.post("/crearpublicacion/:userId&:libroId", productoController.crearPublicacion);

/* POST - CREA PUBLICACION DESDE CERO */
router.post("/crearpublicacionBis/:userId&:isbn", productoController.crearPublicacionBis);

/* POST - BUSCA EDITORIAL */
router.post("/editorial", productoController.buscarEditorial);

/* POST - BUSCA AUTOR */
router.post("/autor", productoController.buscarAutor);


module.exports = router;
