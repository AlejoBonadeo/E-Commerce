const express = require("express");
const router = express.Router();
const productoController = require("../controllers/productoController");

/* GET home page. */
router.get("/carrito", productoController.carrito);

router.get("/:id", productoController.producto);

router.get("/crear", productoController.crearproducto);

module.exports = router;
