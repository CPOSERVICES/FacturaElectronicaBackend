var express = require('express');
var app = express();



//======================================================================
//Lista todos los proveedores
//======================================================================
app.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proveedores', (err, proveedor) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de proveedor',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                proveedor: proveedor
            });
        });
    });
});


//=======================================================================
//Crear proveedor
//=======================================================================
app.post('/', (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO proveedores set ?', [data], (err, proveedorGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear proveedor',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                proveedor: proveedorGuardado
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
        conn.query('UPDATE proveedores set ? WHERE id = ?', [data, id], (err, productoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar producto',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                producto: productoActualizar
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
        conn.query('DELETE FROM proveedores WHERE id = ?', [id], (err, productoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar producto',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                usuario: productoBorrar
            });
        });
    });


});

//Exportacion de Ruta
module.exports = app;