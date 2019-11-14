var express = require('express');
var app = express();


//======================================================================
//Lista todos los Productos
//======================================================================
app.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM mensaje', (err, producto) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de producto',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                producto: producto
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
        //bcrypt.hashSync(data.password, 10)
        conn.query('INSERT INTO mensaje set ?', [data], (err, productoGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear producto',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                productos: productoGuardado
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
        conn.query('UPDATE mensaje set ? WHERE id = ?', [data, id], (err, productoActualizar) => {
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
        conn.query('DELETE FROM mensaje WHERE id = ?', [id], (err, productoBorrar) => {
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