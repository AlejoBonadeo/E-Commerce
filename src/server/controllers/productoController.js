const data = require("../data/products.json");
const fs = require('fs')
const path = require('path')

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
    let data = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8')
    data = JSON.parse(data)
    data.push({...req.body, id: new Date().getTime()})
    fs.writeFileSync( path.resolve(__dirname, '../data/products.json'), JSON.stringify(data, null, 3))
    res.redirect("/");
  },

  editarproducto: (req, res) => {
    res.render("./products/editarproducto",{ 
      libro: data.filter((libro) => libro.id == req.params.id)
    })
  },

  productoeditado: (req, res) => {
    const newLibro = { ...req.body }
    console.log(newLibro)
    let data = fs.readFileSync(path.resolve(__dirname, '../data/products.json'), 'utf-8')

    data = JSON.parse(data).map( libro => libro.id == req.params.id ? newLibro : libro )

    fs.writeFileSync( path.resolve(__dirname, '../data/products.json'), JSON.stringify(data, null, 3))
    res.redirect("/");
  },
};

module.exports = productoController;
