const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + '/public'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/index.html')));

app.listen(8080, ()=>console.log("Servidor iniciado - escuchando en puerto 3030"));
