const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/*VALIDADORES DE SESION*/
const authUser = require("../middlewares/authUsersMiddleware");

/*-----------------------------------------------------------------------------*/

/* GET home page. */
router.get("/all", productoController.listAll);

router.get("/carrito", productoController.carrito);

router.get("/crear/producto", authUser, productoController.crearProducto);

router.get("/crear/publicacion", authUser, productoController.crearPublicacion);

router.post("/crear/producto", productoController.productoCreado);

router.get("/edit/:id", productoController.editarProducto);

router.patch("/edit/:id", productoController.productoEditado);

router.get("/:id", productoController.producto);

router.delete("/:id", productoController.delete);

router.post("/editorial", productoController.crearEditorial)

router.post("/categoria", productoController.crearCategoria)

router.post("/libro", productoController.crearLibro)

module.exports = router;
