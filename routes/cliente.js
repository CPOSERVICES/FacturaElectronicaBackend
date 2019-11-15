var express = require('express');
var app = express();


//======================================================================
//Lista todos los Clientes
//======================================================================
app.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cliente', (err, clientes) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de cliente',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                clientes: clientes
            });
        });
    });
});


//=======================================================================
//Crear producto
//=======================================================================
app.post('/', (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cliente set ?', [data], (err, clienteGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear cliente',
                    errors: err,
                    code: 400

                });
            }
            res.status(201).json({
                ok: true,
                mensaje: 'Cliente correcto :)',
                cliente: clienteGuardado,
                code: 201
            });


        });
    });
});

//=======================================================================
//Actualizar Cliente
//=======================================================================
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cliente set ? WHERE id = ?', [data, id], (err, clienteActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar cliente',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                cliente: clienteActualizar
            });
        });
    });
});

//=======================================================================
//Eliminar Cliente por id
//=======================================================================
app.delete('/:id', (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cliente WHERE id = ?', [id], (err, clienteBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar cliente',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                cliente: clienteBorrar
            });
        });
    });
});


//Exportacion de Ruta
module.exports = app;