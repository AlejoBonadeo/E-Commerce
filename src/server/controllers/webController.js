const path = require("path");
const data = require("../data");
const views = path.join(__dirname, "../../web/views");

module.exports = {
    index: (req, res) => {
        res.render(path.join(views, "/index"), {libros: data});
    },
    carrito: (req, res) => {
        res.render(path.join(views, "/products/carrito"));
    },
    producto: (req,res) => {
        res.render(path.join(views, "/products/producto"), {libro: data.filter(libro => libro.id == req.params.id)})
    },
    register: (req, res) => {
        res.render(path.join(views, "/user/register"));
    },
    login: (req, res) => {
        res.render(path.join(views, "/user/login"));
    },
    crearproducto: (req,res) => {
        res.render(path.join(views, "/products/crearproducto"))
    }
}