const data = require("../data/data.json");

const indexController = {
  index: (req, res) => {
    res.render("index", { libros: data });
  },
};

module.exports = indexController;
