const data = require("../data/products.json");

const indexController = {
  index: (req, res) => {
    res.render("index", { libros: data, authUser: req.session.authUser });
  },
};

module.exports = indexController;
