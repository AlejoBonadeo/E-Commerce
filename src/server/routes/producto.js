const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/* GET home page. */
router.get("/carrito", productoController.carrito);

router.get("/crearproducto", productoController.crearproducto);

router.post("/crear", productoController.productocreado);

router.get("/edit/:id", productoController.editarproducto);

router.patch("/edit/:id", productoController.productoeditado);

router.get("/:id", productoController.producto);

router.delete('/:id', productoController.delete)

module.exports = router;
