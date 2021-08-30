const express = require('express');
const app = express();
const path = require('path');

app.listen(3030, ()=>console.log("Servidor iniciado - escuchando en puerto 3030"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/index.html')));
