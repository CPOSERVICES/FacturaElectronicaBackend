var express = require('express');
var app = express();


//======================================================================
//Lista todos los notacredito
//======================================================================
app.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM notacredito', (err, notacredito) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de notacredito',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                notacredito: notacredito
            });
        });
    });
});


//=======================================================================
//Crear notacredito
//=======================================================================
app.post('/', (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO notacredito set ?', [data], (err, notacreditoGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear notacredito',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                notacredito: notacreditoGuardado
            });
        });
    });
});

//=======================================================================
//Actualizar notacredito
//=======================================================================
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE notacredito set ? WHERE id = ?', [data, id], (err, notacreditoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar notacredito',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                notacredito: notacreditoActualizar
            });
        });
    });
});

//=======================================================================
//Eliminar notacredito por id
//=======================================================================
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM notacredito WHERE id = ?', [id], (err, notacreditoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar notacredito',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                facnotacreditotura: notacreditoBorrar
            });
        });
    });
});


//Exportacion de Ruta
module.exports = app;