var facturaProductoController = {}


//=======================================================================
//Obtiene todos los Factura HAS Producto 
//=======================================================================
facturaProductoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM facturahasproducto', (err, facturahasproducto) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de facturahasproducto',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                facturahasproducto: facturahasproducto
            });
        });
    });
};


//=======================================================================
//Crear Factura HAS Producto
//=======================================================================
facturaProductoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO facturahasproducto set ?', [data], (err, facturahasproductoGuardado) => {

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
                facturahasproducto: facturahasproductoGuardado,
                code: 201
            });
        });
    });
};

//=======================================================================
//Actualizacion Factura HAS Producto por id 
//=======================================================================
facturaProductoController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE facturahasproducto set ? WHERE id = ?', [data, id], (err, facturahasproductoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                facturahasproducto: facturahasproductoActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Factura HAS Producto por id 
//=======================================================================
facturaProductoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM facturahasproducto WHERE id = ?', [id], (err, facturahasproductoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                facturahasproducto: facturahasproductoBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = facturaProductoController;