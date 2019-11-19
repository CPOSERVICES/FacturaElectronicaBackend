var provinciasController = {}

//======================================================================
//Lista todos los Provincias
//======================================================================
provinciasController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM provincias', (err, provincias) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de provincias',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                provincias: provincias
            });
        });
    });
};

//=======================================================================
//Crear Provincias
//=======================================================================
provinciasController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO provincias set ?', [data], (err, provinciasGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear provincias',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                provincias: provinciasGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar provincias por id
//=======================================================================
provinciasController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE provincias set ? WHERE idprovincias = ?', [data, id], (err, provinciasActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar provincias',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                provincias: provinciasActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar provincias por id
//=======================================================================
provinciasController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM provincias WHERE idprovincias = ?', [id], (err, provinciasBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar provincias',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                provincias: provinciasBorrar
            });
        });
    });
};

//Exportacion de Ruta
module.exports = provinciasController;