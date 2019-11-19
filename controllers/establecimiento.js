var establecimientoController = {}


//======================================================================
//Lista todos los Establecimiento
//======================================================================
establecimientoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM establecimiento', (err, establecimiento) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de establecimiento',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                establecimiento: establecimiento
            });
        });
    });
};


//=======================================================================
//Crear Establecimiento
//=======================================================================
establecimientoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        //bcrypt.hashSync(data.password, 10)
        conn.query('INSERT INTO establecimiento set ?', [data], (err, establecimientoGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear establecimiento',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                establecimiento: establecimientoGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar establecimiento
//=======================================================================
establecimientoController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE establecimiento set ? WHERE id = ?', [data, id], (err, establecimientoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar establecimiento',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                establecimiento: establecimientoActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar establecimiento por id
//=======================================================================
establecimientoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM establecimiento WHERE id = ?', [id], (err, establecimientoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar establecimiento',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                establecimiento: establecimientoBorrar
            });
        });
    });


};

//Exportacion de Ruta
module.exports = establecimientoController;