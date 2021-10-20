const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/* GET home page. */
router.get("/carrito", productoController.carrito);

router.get("/crearproducto", productoController.crearProducto);

router.post("/crear", productoController.productoCreado);

router.get("/edit/:id", productoController.editarProducto);

router.patch("/edit/:id", productoController.productoEditado);

router.get("/:id", productoController.producto);

router.delete('/:id', productoController.delete)

module.exports = router;
