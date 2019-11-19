var impuestoIrbpnrController = {}


//======================================================================
//Lista todos los impuestoirbpnr
//======================================================================
impuestoIrbpnrController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM impuestoirbpnr', (err, impuestoirbpnr) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de impuestoirbpnr',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoirbpnr: impuestoirbpnr
            });
        });
    });
};


//=======================================================================
//Crear impuestoirbpnr
//=======================================================================
impuestoIrbpnrController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO impuestoirbpnr set ?', [data], (err, impuestoirbpnrGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear impuestoirbpnr',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                impuestoirbpnr: impuestoirbpnrGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar impuestoirbpnr
//=======================================================================
impuestoIrbpnrController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE impuestoirbpnr set ? WHERE id = ?', [data, id], (err, impuestoirbpnrActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar impuestoirbpnr',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoirbpnr: impuestoirbpnrActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar impuestoirbpnr por id
//=======================================================================
impuestoIrbpnrController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM impuestoirbpnr WHERE id = ?', [id], (err, impuestoirbpnrBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar impuestoirbpnr',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                impuestoirbpnr: impuestoirbpnrBorrar
            });
        });
    });
};


//Exportacion de Ruta
module.exports = impuestoIrbpnrController;