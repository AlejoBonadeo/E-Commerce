const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/* GET home page. */
router.get("/carrito", productoController.carrito);

router.get("/crearproducto", productoController.crearproducto);

router.post("/crear", productoController.productocreado);

router.get("/:id/edit", productoController.editarproducto);

router.put("/:id/edit", productoController.productoeditado);

router.get("/:id", productoController.producto);

module.exports = router;
