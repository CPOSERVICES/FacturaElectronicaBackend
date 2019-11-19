var notasDebitoController = {}


//======================================================================
//Lista todos los notadebito
//======================================================================
notasDebitoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM notadebito', (err, notadebito) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de notadebito',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                notadebito: notadebito
            });
        });
    });
};


//=======================================================================
//Crear notadebito
//=======================================================================
notasDebitoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO notadebito set ?', [data], (err, notadebitoGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear notadebito',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                notadebito: notadebitoGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar notadebito
//=======================================================================
notasDebitoController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE notadebito set ? WHERE id = ?', [data, id], (err, notadebitoActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar notadebito',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                notadebito: notadebitoActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar notadebito por id
//=======================================================================
notasDebitoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM notadebito WHERE id = ?', [id], (err, notadebitoBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar notadebito',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                notadebito: notadebitoBorrar
            });
        });
    });
};


//Exportacion de Ruta
module.exports = notasDebitoController;