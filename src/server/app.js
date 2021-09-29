const express = require("express");
const app = express();
const path = require("path");

const public = path.join(__dirname, "../web/public");

app.use(express.static(public));

app.get("/", (req, res) => {
  res.sendFile(path.join(public, "/views/index.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(public, "/views/carrito.html"));
});

app.get("/producto", (req, res) => {
  res.sendFile(path.join(public, "/views/producto.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(public, "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(public, "/views/login.html"));
});

app.get("/crearproducto", (req, res) => {
  res.sendFile(path.join(public, "/views/crearproducto.html"));
});

app.listen(8080, () =>
  console.log("Servidor iniciado - escuchando en puerto 8080")
);

