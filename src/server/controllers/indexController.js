const data = require("../data/products.json");

const indexController = {
  index: (req, res) => {
    console.log(req.session.authUser);
    res.render("index", { libros: data, authUser: req.session.authUser });
  },
};

module.exports = indexController;
