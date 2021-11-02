const data = require("../data/products.json");

const indexController = {
  index: (req, res) => {
    // console.log(req.session.user)
    res.render("index", { libros: data, user: req.session.user });
  },
};

module.exports = indexController;
