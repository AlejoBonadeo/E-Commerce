//EXPRESS
const express = require("express");
const session = require("express-session");
const app = express();
require("dotenv").config();
// CARPETA PUBLIC
const path = require("path");
const public = path.join(__dirname, "../web/public");
app.use(express.static(public));

//OVERRIDE PUT Y DELETE
const methodOverride = require("method-override");

//CONFIGURACION EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../web/views"));

//SESSION
const userSession = require("./middlewares/sessionMiddleware");

//CORS
const cors = require('cors')

//COOKIE PARSER
const cookie = require("cookie-parser");

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({ secret: "238y7wrhqwre58q2", resave: false, saveUninitialized: true }));
app.use(cookie());
app.use(userSession);

//CORS
app.use(cors())

//ROUTES
app.use("/", require("./routes/index"));
app.use("/producto", require("./routes/producto"));
app.use("/user", require("./routes/user"));
app.use("/api", require("./routes/api/api"));

//ERROR
app.use((req, res, next) => {
  res.status(404).render("404");
});

//SERVIDOR
app.listen(8080, () => console.log("Servidor iniciado - escuchando en puerto 8080"));
