const data = require("../data");

const indexController = {
  index: (req, res) => {
    res.render("index", { libros: data });
  },
};

module.exports = indexController;
