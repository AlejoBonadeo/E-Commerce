const db = require("../database/models");
const {validationResult} = require("express-validator");
const { Op, where } = require("sequelize");
const req = require("express/lib/request");

//const data = require("../data/products.json");

const indexController = {

  index: async (req, res) => {

    /*res.render("index", { libros: data, authUser: req.session.authUser }); */
    let listaPublicaciones = await db.Publicacion.findAll({where:{status: 1},
          include: [{ association: "libro" }]
    })
     res.render("index", { publicaciones: listaPublicaciones, authUser: req.session.authUser })

  }
}

module.exports = indexController;
