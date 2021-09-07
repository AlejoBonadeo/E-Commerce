const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,'/src/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/views/index.html'))
});

app.listen(8080, ()=>console.log("Servidor iniciado - escuchando en puerto 8080"));