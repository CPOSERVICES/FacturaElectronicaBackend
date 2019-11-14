var express = require('express');
var app = express();


//======================================================================
//Lista todos los factura
//======================================================================
app.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM factura', (err, factura) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de factura',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                factura: factura
            });
        });
    });
});


//=======================================================================
//Crear factura
//=======================================================================
app.post('/', (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO factura set ?', [data], (err, facturaGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear factura',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                factura: facturaGuardado
            });
        });
    });
});

//=======================================================================
//Actualizar factura
//=======================================================================
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE factura set ? WHERE id = ?', [data, id], (err, facturaActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar factura',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                factura: facturaActualizar
            });
        });
    });
});

//=======================================================================
//Eliminar factura por id
//=======================================================================
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM factura WHERE id = ?', [id], (err, facturaBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar factura',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                factura: facturaBorrar
            });
        });
    });
});


//Exportacion de Ruta
module.exports = app;