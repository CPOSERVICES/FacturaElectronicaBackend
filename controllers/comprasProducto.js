var comprasProductoController = {}


//=======================================================================
//Obtiene todas las Cuidades
//=======================================================================
comprasProductoController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM comprasproductos', (err, comprasProductos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de compras productos',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                comprasproductos: comprasProductos
            });
        });
    });
};


//=======================================================================
//Crear Cuidades
//=======================================================================
comprasProductoController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO comprasproductos set ?', [data], (err, comprasProductosGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear compras productos',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                comprasProductos: comprasProductosGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion Cuidades por id
//=======================================================================
comprasProductoController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE comprasproductos set ? WHERE idComprasProductos = ?', [data, id], (err, comprasProductosActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                comprasProductos: comprasProductosActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Cuidades por id 
//=======================================================================
comprasProductoController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM comprasproductos WHERE idComprasProductos = ?', [id], (err, comprasProductosBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                comprasProductos: comprasProductosBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = comprasProductoController;