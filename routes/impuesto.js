var express = require('express');
var app = express();


//======================================================================
//Lista todos los impuesto
//======================================================================
app.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM impuesto', (err, impuesto) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de impuesto',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuesto: impuesto
            });
        });
    });
});


//=======================================================================
//Crear impuesto
//=======================================================================
app.post('/', (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        //bcrypt.hashSync(data.password, 10)
        conn.query('INSERT INTO impuesto set ?', [data], (err, impuestoGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear impuesto',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                impuesto: impuestoGuardado
            });
        });
    });
});

//=======================================================================
//Actualizar impuesto
//=======================================================================
app.put('/:id', (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE impuesto set ? WHERE id = ?', [data, id], (err, impuestoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar producto',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                impuesto: impuestoActualizar
            });
        });
    });
});

//=======================================================================
//Eliminar impuesto por id
//=======================================================================
app.delete('/:id', (req, res) => {

    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM impuesto WHERE id = ?', [id], (err, impuestoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar impuesto',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                impuesto: impuestoBorrar
            });
        });
    });


});

//Exportacion de Ruta

module.exports = app;