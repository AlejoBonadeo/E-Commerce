const data = require("../data/data.json");

const productoController = {
  carrito: (req, res) => {
    res.render("./products/carrito");
  },
  producto: (req, res) => {
    res.render("./products/producto", {
      libro: data.filter((libro) => libro.id == req.params.id),
    });
  },
  crearproducto: (req, res) => {
    res.render("./products/crearproducto");
  },
};

module.exports = productoController;