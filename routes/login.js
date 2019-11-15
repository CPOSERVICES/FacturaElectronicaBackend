var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var bcryp = require('bcryptjs')

var SEED = require('../config/configToken').SEED;

//=======================================================================
//Login de usuarios
//=======================================================================
app.post('/', (req, res) => {
    var user = req.body.username;
    var pass = req.body.password;
    var pass1 = bcryp.hashSync(pass, 0)
    console.log('asdas', pass1);
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
                    pass = req.session.pass;
                    //Token
                    // console.log( pass: bcryp.hashSync(pass, 10));
                    var token = jwt.sign({ results }, SEED, { expiresIn: 14400 });

                    res.status(200).json({
                        ok: true,
                        pass: pass1,
                        results: results,
                        token: token,
                        mensaje: 'Login logrado exitosamente...!'

                    });
                    console.log('resultsadsd', results.password);
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


function obtenerMnu(ROLE) {
    var menu = [

    ]
}





//Exportacion de Ruta
module.exports = app;