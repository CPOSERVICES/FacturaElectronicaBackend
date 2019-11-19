var campoAdicionalController = {}


//======================================================================
//Lista CampoAdicional
//======================================================================
campoAdicionalController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM campoadicional', (err, campoadicional) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de campoadicional',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                campoadicional: campoadicional
            });
        });
    });
};


//=======================================================================
//Crear Campo adional
//=======================================================================
campoAdicionalController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO campoadicional set ?', [data], (err, campoadicionalGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear campoadicional',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                campoadicional: campoadicionalGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar campoadicional
//=======================================================================
campoAdicionalController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE campoadicional set ? WHERE id = ?', [data, id], (err, campoadicionalActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar campoadicional',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                campoadicional: campoadicionalActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar campoadicional por id
//=======================================================================
campoAdicionalController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM campoadicional WHERE id = ?', [id], (err, campoadicionalBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar campoadicional',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                campoadicional: campoadicionalBorrar
            });
        });
    });
};


//Exportacion de Ruta
module.exports = campoAdicionalController;