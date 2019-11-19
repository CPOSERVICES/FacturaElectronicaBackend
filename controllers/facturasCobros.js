var facturasCobrosController = {}


//=======================================================================
//Obtiene todas las facturascobros
//=======================================================================
facturasCobrosController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM facturascobros', (err, facturascobros) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de facturascobros',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                facturascobros: facturascobros
            });
        });
    });
};


//=======================================================================
//Crear facturascobros
//=======================================================================
facturasCobrosController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO facturascobros set ?', [data], (err, facturascobrosGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear facturascobros',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                facturascobros: facturascobrosGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion facturascobros por id
//=======================================================================
facturasCobrosController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE facturascobros set ? WHERE idFacturaCobro = ?', [data, id], (err, facturascobrosActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                facturascobros: facturascobrosActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion facturascobros por id 
//=======================================================================
facturasCobrosController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM facturascobros WHERE idFacturaCobro = ?', [id], (err, facturascobrosBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                facturascobros: facturascobrosBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = facturasCobrosController;