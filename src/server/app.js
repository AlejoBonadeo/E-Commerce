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

//PROCESAMIENTO POST
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//RECURSOS
app.use("/", require("./routes/index"));
app.use("/producto", require("./routes/producto"));
app.use("/user", require("./routes/user"));

//ERROR
app.use((req, res, next) => {
  res.status(404).render("404");
});

//SERVIDOR
app.listen(8080, () =>
console.log("Servidor iniciado - escuchando en puerto 8080")
);
