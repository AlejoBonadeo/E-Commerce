const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/*VALIDADORES DE SESION*/
const authUser = require("../middlewares/authUsersMiddleware");

/*-----------------------------------------------------------------------------*/

/* GET - RENDERIZA PAGINA DE INICIO. */
router.get("/all", productoController.listAll);

/* GET - RENDERIZA PAGINA DE CREACION DE PUBLICACION. */
router.get("/buscarISBN", authUser, productoController.buscarISBN);

/* POST - BUSCA LIBRO*/
router.post("/buscarlibro", productoController.buscarLibro);

/* POST - CREAR PUBLICACION*/
router.post("/crearpublicacion/:userId&:libroId", productoController.createPublicacion);

/* //////////////////////////////////////////////////////////// */

/* GET - RENDERIZA DETALLE DE PRODUCTO. */
router.get("/:id", productoController.producto);

/* POST - CREA PRODUCTO. */
router.post("/crear/producto", productoController.productoCreado);
/* GET - RENDERIZA PAGINA PARA EDITAR PRODUCTO. */
router.get("/edit/:id", productoController.editarProducto);

/* DELETE - ELIMINA PRODUCTO. */
router.delete("/:id", productoController.delete);

router.post("/editorial", productoController.crearEditorial)

router.post("/categoria", productoController.crearCategoria)

router.post("/libro", productoController.crearLibro)

/* PATCH - ACTUALIZA PRODUCTO. */
router.patch("/edit/:id", productoController.productoEditado);

/* GET - RENDERIZA PAGINA CARRITO DE COMPRAS. */
router.get("/carrito", productoController.carrito);

/* GET - RENDERIZA FORMULARIO CREACION DE PRODUCTO. */
router.get("/crear/producto", authUser, productoController.crearProducto);


module.exports = router;
