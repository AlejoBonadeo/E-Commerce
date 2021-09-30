const express = require("express");
const app = express();
const path = require("path");
const { index, carrito, producto, crearproducto, login, register } = require("./controllers/webController");

const public = path.join(__dirname, "../web/public");

app.use(express.static(public));

app.get("/", index);

app.get("/carrito", carrito);

app.get("/producto/:id", producto);

app.get("/register", register);

app.get("/login", login);

app.get("/crearproducto", crearproducto);

app.listen(8080, () =>
  console.log("Servidor iniciado - escuchando en puerto 8080")
);