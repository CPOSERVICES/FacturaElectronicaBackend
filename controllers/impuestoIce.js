var impuestoIceController = {}



//======================================================================
//Lista todos los impuestoIce
//======================================================================
impuestoIceController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM impuestoice', (err, impuestoIce) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de impuestoIce',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoIce: impuestoIce
            });
        });
    });
};


//=======================================================================
//Crear impuestoIce
//=======================================================================
impuestoIceController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO impuestoice set ?', [data], (err, impuestoIceGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear impuestoIce',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                impuestoIce: impuestoIceGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar impuestoIce
//=======================================================================
impuestoIceController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE impuestoice set ? WHERE id = ?', [data, id], (err, impuestoIceActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar impuestoIce',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoIce: impuestoIceActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar impuestoIce por id
//=======================================================================
impuestoIceController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM impuestoice WHERE id = ?', [id], (err, impuestoIceBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar impuestoIce',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                impuestoIce: impuestoIceBorrar
            });
        });
    });
};

//Exportacion de Ruta
module.exports = impuestoIceController;