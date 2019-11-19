var impuestoIvaController = {}


//======================================================================
//Lista todos los impuestoIva
//======================================================================
impuestoIvaController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM impuestoiva', (err, impuestoIva) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de impuestoIva',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoIva: impuestoIva
            });
        });
    });
};


//=======================================================================
//Crear impuestoIva
//=======================================================================
impuestoIvaController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO impuestoiva set ?', [data], (err, impuestoIvaGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear impuestoIva',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                impuestoIva: impuestoIvaGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar impuestoIva
//=======================================================================
impuestoIvaController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE impuestoiva set ? WHERE id = ?', [data, id], (err, impuestoIvaActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar impuestoIva',
                    errors: err

                });
            }
            res.status(200).json({
                ok: true,
                impuestoIva: impuestoIvaActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar impuestoIva por id
//=======================================================================
impuestoIvaController.delete = (req, res) => {

    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM impuestoiva WHERE id = ?', [id], (err, impuestoIvaBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar impuestoIva',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoIva: impuestoIvaBorrar
            });
        });
    });
};

//Exportacion de Ruta
module.exports = impuestoIvaController;