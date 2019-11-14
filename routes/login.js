var express = require('express');
var app = express();

//=======================================================================
//Login de usuarios
//=======================================================================
app.post('/', (req, res) => {
    var user = req.body.username;
    var pass = req.body.password;
    req.getConnection((err, conn) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al cargar usuarios',
                errors: err
            });
        }

        if (user && pass) {
            conn.query('SELECT * FROM user WHERE username = ? AND password = ?', [user, pass], function(error, results, fields) {
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.user = user;
                    res.status(200).json({
                        ok: true,
                        mensaje: 'Login logrado exitosamente...!'
                    });
                } else {
                    res.status(400).json({
                        ok: false,
                        mensaje: 'Credenciales incorrectas!'
                    });

                }
            });
        } else {
            res.status(400).json({
                ok: false,
                mensaje: 'Ingrese sus credenciales!'
            });
            //console.log('jklj', res.end());
        }
    });
});

//Exportacion de Ruta
module.exports = app;