const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get("/", indexController.index);

/* POST - BUESQUEDA DESDE NAV BAR */
router.post("/buscar", indexController.buscar);

module.exports = router;
