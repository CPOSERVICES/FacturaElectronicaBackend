var roleController = {}

//======================================================================
//Lista todos los role
//======================================================================
roleController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM role', (err, role) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de roles',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                role: role
            });
        });
    });
};

//=======================================================================
//Crear role
//=======================================================================
roleController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO role set ?', [data], (err, roleGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear role',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                role: roleGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar role por id
//=======================================================================
roleController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE role set ? WHERE id = ?', [data, id], (err, roleActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar role',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                role: roleActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar role por id
//=======================================================================
roleController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM role WHERE id = ?', [id], (err, roleBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar role',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                role: roleBorrar
            });
        });
    });
};

//Exportacion de Ruta
module.exports = roleController;