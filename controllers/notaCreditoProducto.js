var notaCreditoProductoController = {}

//=======================================================================
//Obtiene todos los notacreditohasproducto 
//=======================================================================
notaCreditoProductoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM notacreditohasproducto', (err, nCreditoProducto) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de NotasCreditoProducto',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                nCreditoProducto: nCreditoProducto
            });
        });
    });
};


//=======================================================================
//Crear NotaCreditoProducto
//=======================================================================
notaCreditoProductoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO notacreditohasproducto set ?', [data], (err, nCreditoProductoGuardado) => {

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
                nCreditoProducto: nCreditoProductoGuardado,
                code: 201
            });
        });
    });
};

//=======================================================================
//Actualizacion NotaCreditoProducto por id 
//=======================================================================
notaCreditoProductoController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE notacreditohasproducto set ? WHERE id = ?', [data, id], (err, nCreditoProductoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                nCreditoProducto: nCreditoProductoActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion NotaCreditoProducto por id 
//=======================================================================
notaCreditoProductoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM notacreditohasproducto WHERE id = ?', [id], (err, nCreditoProductoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                nCreditoProducto: nCreditoProductoBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = notaCreditoProductoController;