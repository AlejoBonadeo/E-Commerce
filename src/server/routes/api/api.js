/*CONFIGURACION ROUTER (EXPRESS) */
const express = require("express");
const router = express.Router();


/*CONTROLADORES */
const apiController = require("../../controllers/api/apiController");

/*-------------------------------------------------------------------------*/

/* GET listado de emails en DB*/
router.get("/user/AllEmails", apiController.allEmails);

module.exports = router;
