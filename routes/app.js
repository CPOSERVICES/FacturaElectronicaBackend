//importaciones de requires
var express = require('express');
var app = express();


//Ruta Principal
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Servidor Corriendo, rutas OK!'
    });
});


//Exportacion de Ruta
module.exports = app;