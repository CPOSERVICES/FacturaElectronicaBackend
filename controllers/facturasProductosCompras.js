var facturaProductosComprasController = {}


//=======================================================================
//Obtiene todas las facturahasproductocompras
//=======================================================================
facturaProductosComprasController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM facturahasproductocompras', (err, facturahasproductocompras) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de facturahasproductocompras',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                facturahasproductocompras: facturahasproductocompras
            });
        });
    });
};


//=======================================================================
//Crear facturahasproductocompras
//=======================================================================
facturaProductosComprasController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO facturahasproductocompras set ?', [data], (err, facturahasproductocomprasGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear facturahasproductocompras',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                facturahasproductocompras: facturahasproductocomprasGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion facturahasproductocompras por id
//=======================================================================
facturaProductosComprasController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE facturahasproductocompras set ? WHERE id = ?', [data, id], (err, facturahasproductocomprasActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                facturahasproductocompras: facturahasproductocomprasActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion facturahasproductocompras por id 
//=======================================================================
facturaProductosComprasController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM facturahasproductocompras WHERE id = ?', [id], (err, facturahasproductocomprasBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                facturahasproductocompras: facturahasproductocomprasBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = facturaProductosComprasController;