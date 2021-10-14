const data = require("../data/products.json");

const indexController = {
  index: (req, res) => {
    res.render("index", { libros: data });
  },
};

module.exports = indexController;
