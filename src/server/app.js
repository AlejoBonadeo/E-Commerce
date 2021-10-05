//EXPRESS
const express = require("express");
const app = express();

// CARPETA PUBLIC
const path = require("path");
const public = path.join(__dirname, "../web/public");
app.use(express.static(public));

//CONFIGURACION EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../web/views"));

//RECURSOS
const index = require("./routes/index");
const producto = require("./routes/producto");
const user = require("./routes/user");

app.get("/", index);

app.get("/carrito", producto);

app.get("/producto/:id", producto);

app.get("/crearproducto", producto);

app.get("/register", user);

app.get("/login", user);

//SERVIDOR
app.listen(8080, () =>
  console.log("Servidor iniciado - escuchando en puerto 8080")
);
