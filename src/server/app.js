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
const product = require("./routes/producto");
const user = require("./routes/user");

app.use("/", index);
app.use("/producto", product);
app.use("/user", user);

/* app.use('/', index)
app.use('/user', user)
app.use('/producto', producto)
 */
//SERVIDOR
app.listen(8080, () =>
  console.log("Servidor iniciado - escuchando en puerto 8080")
);
