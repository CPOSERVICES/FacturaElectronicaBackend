var mensajeController = {}


//======================================================================
//Lista todos los Mensaje
//======================================================================
mensajeController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM mensaje', (err, mensaje) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de mensaje',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                mensaje: mensaje
            });
        });
    });
};


//=======================================================================
//Crear Mensaje
//=======================================================================
mensajeController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        //bcrypt.hashSync(data.password, 10)
        conn.query('INSERT INTO mensaje set ?', [data], (err, mensajeGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear mensaje',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                mensaje: mensajeGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar Mensaje por id
//=======================================================================
mensajeController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE mensaje set ? WHERE id = ?', [data, id], (err, mensajeActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar mensaje',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                mensaje: mensajeActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar Mensaje por id
//=======================================================================
mensajeController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM mensaje WHERE id = ?', [id], (err, mensajeBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar mensaje',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                mensaje: mensajeBorrar
            });
        });
    });
};

//Exportacion de Ruta
module.exports = mensajeController;