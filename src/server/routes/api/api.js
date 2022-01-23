/*CONFIGURACION ROUTER (EXPRESS) */
const express = require("express");
const router = express.Router();


/*CONTROLADORES */
const apiController = require("../../controllers/api/apiController");

/*-------------------------------------------------------------------------*/

/* GET listado de emails en DB*/
router.get("/user/AllUsers", apiController.allUsers);

router.get("/producto/AllCategories", apiController.allCategories);

module.exports = router;
