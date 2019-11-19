var puntoEmisionController = {}

//======================================================================
//Lista todos los ptoemision
//======================================================================
puntoEmisionController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ptoemision', (err, ptoemision) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de ptoemision',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                ptoemision: ptoemision
            });
        });
    });
};

//=======================================================================
//Crear ptoemision
//=======================================================================
puntoEmisionController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO ptoemision set ?', [data], (err, ptoemisionGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear ptoemision',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                ptoemision: ptoemisionGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar ptoemision por id
//=======================================================================
puntoEmisionController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE ptoemision set ? WHERE id = ?', [data, id], (err, ptoemisionActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar ptoemision',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                ptoemision: ptoemisionActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar ptoemision por id
//=======================================================================
puntoEmisionController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM ptoemision WHERE id = ?', [id], (err, ptoemisionBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar ptoemision',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                ptoemision: ptoemisionBorrar
            });
        });
    });
};

//Exportacion de Ruta
module.exports = puntoEmisionController;