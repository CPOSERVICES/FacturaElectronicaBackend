var facturasComprasPAgosController = {}


//=======================================================================
//Obtiene todas las facturascompraspagos
//=======================================================================
facturasComprasPAgosController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM facturascompraspagos', (err, facturascompraspagos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de facturascompraspagos',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                facturascompraspagos: facturascompraspagos
            });
        });
    });
};


//=======================================================================
//Crear facturascompraspagos
//=======================================================================
facturasComprasPAgosController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO facturascompraspagos set ?', [data], (err, facturascompraspagosGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear facturascompraspagos',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                facturascompraspagos: facturascompraspagosGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion facturascompraspagos por id
//=======================================================================
facturasComprasPAgosController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE facturascompraspagos set ? WHERE idFacturapago = ?', [data, id], (err, facturascompraspagosActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                facturascompraspagos: facturascompraspagosActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion facturascobros por id 
//=======================================================================
facturasComprasPAgosController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM facturascompraspagos WHERE idFacturapago = ?', [id], (err, facturascompraspagosBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                facturascompraspagos: facturascompraspagosBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = facturasComprasPAgosController;