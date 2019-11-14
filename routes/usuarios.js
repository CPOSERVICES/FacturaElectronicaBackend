//importaciones de requires
var express = require('express');
var app = express();


//======================================================================
//Lista todos los usuarios
//======================================================================
app.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user', (err, usuarios) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de usuarios',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                usuarios: usuarios
            });
        });
    });
});


//=======================================================================
//Crear usuario
//=======================================================================
app.post('/', (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        //bcrypt.hashSync(data.password, 10)
        conn.query('INSERT INTO user set ?', [data], (err, usuarioGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear usuario',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                usuarios: usuarioGuardado
            });
        });
    });
});

//=======================================================================
//Actualizar usuario
//=======================================================================
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE user set ? WHERE id = ?', [data, id], (err, usuarioActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar usuario',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                usuario: usuarioActualizar
            });
        });
    });
});

//=======================================================================
//Eliminar usuario por id
//=======================================================================
app.delete('/:id', (req, res) => {

    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM user WHERE id = ?', [id], (err, usuarioBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar usuario',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                usuario: usuarioBorrar
            });
        });
    });


});

//Exportacion de Ruta
module.exports = app;