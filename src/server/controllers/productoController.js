const data = require("../data/products.json");
const fs = require("fs");
const path = require("path");

const librosFilePath = path.resolve(__dirname, "../data/products.json");
const libros = JSON.parse(fs.readFileSync(librosFilePath, "utf-8"));

const productoController = {
  carrito: (req, res) => {
    res.render("./products/carrito");
  },

  producto: (req, res) => {
    res.render("./products/producto", {
      libro: data.filter((libro) => libro.id == req.params.id),
    });
  },

  crearProducto: (req, res) => {
    res.render("./products/crearproducto");
  },

  productoCreado: (req, res) => {
    let data = fs.readFileSync(
      path.resolve(__dirname, "../data/products.json"),
      "utf-8"
    );
    data = JSON.parse(data);
    data.push({ ...req.body, id: new Date().getTime() });
    fs.writeFileSync(
      path.resolve(__dirname, "../data/products.json"),
      JSON.stringify(data, null, 3)
    );
    res.redirect("/");
  },

  editarProducto: (req, res) => {
    res.render("./products/editarproducto", {
      libro: data.filter((libro) => libro.id == req.params.id),
    });
  },
  /////////////////////////////////////////////////////////////////
  productoEditado: (req, res) => {
    let nuevaListaLibros = libros.map((libro) => {
      if (libro.id == req.params.id) {
        let newLibro = { id: libro.id, ...req.body };
        return newLibro;
      } else {
        return libro;
      }
    });

    fs.writeFileSync(
      librosFilePath,
      JSON.stringify(nuevaListaLibros, null, " ")
    );
    res.redirect("/");
  },

  ////////////////////////////////////////////////////////////////
  delete: (req, res) => {
    fs.writeFileSync(
      librosFilePath,
      JSON.stringify(libros.filter(libro => req.params.id != libro.id), null, " ")
    );
    res.redirect("/");
  }
};

module.exports = productoController;
