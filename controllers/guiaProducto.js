var guiaProductoController = {}


//=======================================================================
//Obtiene todos los Factura HAS Producto 
//=======================================================================
guiaProductoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM guiahasproducto', (err, guiahasproducto) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de guiahasproducto',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                guiahasproducto: guiahasproducto
            });
        });
    });
};


//=======================================================================
//Crear Factura HAS Producto
//=======================================================================
guiaProductoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO guiahasproducto set ?', [data], (err, guiahasproductoGuardado) => {

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
                guiahasproducto: guiahasproductoGuardado,
                code: 201
            });
        });
    });
};

//=======================================================================
//Actualizacion Factura HAS Producto por id 
//=======================================================================
guiaProductoController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE guiahasproducto set ? WHERE id = ?', [data, id], (err, guiahasproductoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                guiahasproducto: guiahasproductoActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Factura HAS Producto por id 
//=======================================================================
guiaProductoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM guiahasproducto WHERE id = ?', [id], (err, guiahasproductoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                guiahasproducto: guiahasproductoBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = guiaProductoController;