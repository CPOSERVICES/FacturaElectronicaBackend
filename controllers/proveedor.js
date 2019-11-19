var proveedoresController = {}


//======================================================================
//Lista todos los proveedores
//======================================================================
proveedoresController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM proveedores', (err, proveedor) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de proveedor',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                proveedor: proveedor
            });
        });
    });
};


//=======================================================================
//Crear proveedor
//=======================================================================
proveedoresController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO proveedores set ?', [data], (err, proveedorGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear proveedor',
                    errors: err
                });
            }
            res.status(201).json({
                ok: true,
                proveedor: proveedorGuardado
            });
        });
    });
};

//=======================================================================
//Actualizar proveedores por id
//=======================================================================
proveedoresController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE proveedores set ? WHERE id = ?', [data, id], (err, proveedoresActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar proveedores',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                proveedores: proveedoresActualizar
            });
        });
    });
};

//=======================================================================
//Eliminar proveedores por id
//=======================================================================
proveedoresController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM proveedores WHERE id = ?', [id], (err, proveedoresBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al eliminar proveedores',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                proveedores: proveedoresBorrar
            });
        });
    });


};

//Exportacion de Ruta
module.exports = proveedoresController;