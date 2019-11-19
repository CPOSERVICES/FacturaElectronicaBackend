var motivoController = {}


//======================================================================
//Lista todos los Motivo
//======================================================================
motivoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM motivo', (err, motivo) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de motivo',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                motivo: motivo
            });
        });
    });
};


//=======================================================================
//Crear motivo
//=======================================================================
motivoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        //bcrypt.hashSync(data.password, 10)
        conn.query('INSERT INTO motivo set ?', [data], (err, motivoGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear motivo',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                motivo: motivoGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar motivo por id
//=======================================================================
motivoController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE motivo set ? WHERE id = ?', [data, id], (err, motivoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar motivo',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                motivo: motivoActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar motivo por id
//=======================================================================
motivoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM motivo WHERE id = ?', [id], (err, motivoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar motivo',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                motivo: motivoBorrar
            });
        });
    });


};

//Exportacion de Ruta
module.exports = motivoController;