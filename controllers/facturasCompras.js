var facturasComprasController = {}


//=======================================================================
//Obtiene todas las Cuidades
//=======================================================================
facturasComprasController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM facturacompras', (err, facturacompras) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de cotizaciones',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                facturacompras: facturacompras
            });
        });
    });
};


//=======================================================================
//Crear facturacompras
//=======================================================================
facturasComprasController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO facturacompras set ?', [data], (err, facturacomprasGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear cotizacion',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                facturacompras: facturacomprasGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion Cuidades por id
//=======================================================================
facturasComprasController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE facturacompras set ? WHERE id = ?', [data, id], (err, facturacomprasActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                facturacompras: facturacomprasActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Cuidades por id 
//=======================================================================
facturasComprasController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM facturacompras WHERE id = ?', [id], (err, facturacomprasBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                facturacompras: facturacomprasBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = facturasComprasController;