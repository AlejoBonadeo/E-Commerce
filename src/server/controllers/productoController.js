const path = require("path");
const views = path.join(__dirname, "../../web/views");
const data = require("../data");

const productoController = {
  carrito: (req, res) => {
    res.render(path.join(views, "/products/carrito"));
  },
  producto: (req, res) => {
    res.render(path.join(views, "/products/producto"), {
      libro: data.filter((libro) => libro.id == req.params.id),
    });
  },
  crearproducto: (req, res) => {
    res.render(path.join(views, "/products/crearproducto"));
  },
};

module.exports = productoController;
