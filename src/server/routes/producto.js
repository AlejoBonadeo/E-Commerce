const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/* GET home page. */
router.get("/carrito", productoController.carrito);

/* router.get("/:id", productoController.producto); */

router.get("/crearproducto", productoController.crearproducto);

router.post("/crear", productoController.productocreado);

router.get("/:id/edit", productoController.editarproducto);

router.put("/:id/editar", productoController.productoeditado);

module.exports = router;
