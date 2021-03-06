var retencionesController = {}

//======================================================================
//Lista todos los retencion
//======================================================================
retencionesController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM retencion', (err, retencion) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de retencion',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                retencion: retencion
            });
        });
    });
};

//=======================================================================
//Crear retencion
//=======================================================================
retencionesController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO retencion set ?', [data], (err, retencionGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear retencion',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                retencion: retencionGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar retencion
//=======================================================================
retencionesController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE retencion set ? WHERE id = ?', [data, id], (err, retencionActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar retencion',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                retencion: retencionActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar retencion por id
//=======================================================================
retencionesController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM retencion WHERE id = ?', [id], (err, retencionBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar retencion',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                retencion: retencionBorrar
            });
        });
    });
};

//Exportacion de Ruta
module.exports = retencionesController;