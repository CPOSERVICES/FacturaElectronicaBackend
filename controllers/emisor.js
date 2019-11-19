var emisorController = {}


//======================================================================
//Lista todos los Emisores
//======================================================================
emisorController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM emisor', (err, emisor) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de emisor',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                emisor: emisor
            });
        });
    });
};


//=======================================================================
//Crear Emisor
//=======================================================================
emisorController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO emisor set ?', [data], (err, emisorGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear emisor',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                emisor: emisorGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar Emisor
//=======================================================================
emisorController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE emisor set ? WHERE id = ?', [data, id], (err, emisorActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar Emisor',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                emisor: emisorActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar usuario por id
//=======================================================================
emisorController.delete = (req, res) => {

    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM emisor WHERE id = ?', [id], (err, emisorBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar emisor',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                emisor: emisorBorrar
            });
        });
    });


};

//Exportacion de Ruta

module.exports = emisorController;