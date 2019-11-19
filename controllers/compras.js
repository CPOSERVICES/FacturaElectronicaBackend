var comprasController = {}


//=======================================================================
//Obtiene todas las Cuidades
//=======================================================================
comprasController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM compras', (err, compras) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de compras',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                compras: compras
            });
        });
    });
};


//=======================================================================
//Crear Cuidades
//=======================================================================
comprasController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO compras set ?', [data], (err, comprasGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear compras',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                compras: comprasGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion Cuidades por id
//=======================================================================
comprasController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE compras set ? WHERE idCompras = ?', [data, id], (err, comprasActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                compras: comprasActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Cuidades por id 
//=======================================================================
comprasController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM compras WHERE idCompras = ?', [id], (err, comprasBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                compras: comprasBorrar
            });
        });
    });
};

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = comprasController;