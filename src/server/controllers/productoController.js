const data = require("../data/products.json");

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
  productocreado: (req, res) => {
    res.redirect("/products");
  },
  editarproducto: (req, res) => {
    res.render("/editar");
  },
  productoeditado: (req, res) => {},
};

module.exports = productoController;
