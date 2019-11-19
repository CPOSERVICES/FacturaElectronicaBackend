var guiaController = {}


//======================================================================
//Lista todos los guia
//======================================================================
guiaController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM guia', (err, guia) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de guia',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                guia: guia
            });
        });
    });
};


//=======================================================================
//Crear guia
//=======================================================================
guiaController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO guia set ?', [data], (err, guiaGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear guia',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                guia: guiaGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar guia
//=======================================================================
guiaController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE guia set ? WHERE id = ?', [data, id], (err, guiaActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar guia',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                guia: guiaActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar guia por id
//=======================================================================
guiaController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM guia WHERE id = ?', [id], (err, guiaBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar guia',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                guia: guiaBorrar
            });
        });
    });
};


//Exportacion de Ruta
module.exports = guiaController;