var detalleAdicionalController = {}


//======================================================================
//Lista todos los detalleadicional
//======================================================================
detalleAdicionalController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM detalleadicional', (err, detalle) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de detalleadicional',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                detalle: detalle
            });
        });
    });
};


//=======================================================================
//Crear detalleadicional
//=======================================================================
detalleAdicionalController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO detalleadicional set ?', [data], (err, detalleGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear detalleadicional',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                detalle: detalleGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar detalleadicional
//=======================================================================
detalleAdicionalController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE detalleadicional set ? WHERE id = ?', [data, id], (err, detalleActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar detalle',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                detalle: detalleActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar detalleadicional por id
//=======================================================================
detalleAdicionalController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM detalleadicional WHERE id = ?', [id], (err, detalleBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar detalle',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                detalle: detalleBorrar
            });
        });
    });
};


//Exportacion de Ruta
module.exports = detalleAdicionalController;