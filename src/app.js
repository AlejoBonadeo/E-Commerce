const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/carrito.html'))
});

app.listen(8080, ()=>console.log("Servidor iniciado - escuchando en puerto 8080"));