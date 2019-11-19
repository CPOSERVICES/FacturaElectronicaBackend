var impuestoComprobanteRetecionController = {}


//=======================================================================
//Obtiene todos los Factura HAS Producto 
//=======================================================================
impuestoComprobanteRetecionController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM impuestocomprobanteretencion', (err, impuestoComprobanteRetecion) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de impuestoComprobanteRetecion',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoComprobanteRetecion: impuestoComprobanteRetecion
            });
        });
    });
};


//=======================================================================
//Crear Factura HAS Producto
//=======================================================================
impuestoComprobanteRetecionController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO impuestocomprobanteretencion set ?', [data], (err, impuestoComprobanteRetecionGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear impuestocomprobanteretencion',
                    errors: err,
                    code: 400

                });
            }
            res.status(201).json({
                ok: true,
                impuestoComprobanteRetecion: impuestoComprobanteRetecionGuardado,

            });
        });
    });
};

//=======================================================================
//Actualizacion Factura HAS Producto por id 
//=======================================================================
impuestoComprobanteRetecionController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE impuestocomprobanteretencion set ? WHERE id = ?', [data, id], (err, impuestoComprobanteRetecionActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                impuestoComprobanteRetecion: impuestoComprobanteRetecionActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Factura HAS Producto por id 
//=======================================================================
impuestoComprobanteRetecionController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM impuestocomprobanteretencion WHERE id = ?', [id], (err, impuestoComprobanteRetecionBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                impuestoComprobanteRetecion: impuestoComprobanteRetecionBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = impuestoComprobanteRetecionController;