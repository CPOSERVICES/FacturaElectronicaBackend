var cotizacionesProductosController = {}


//=======================================================================
//Obtiene todas las Cuidades
//=======================================================================
cotizacionesProductosController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cotizacionespoductos', (err, cotizacionespoductos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de cotizaciones',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                cotizacionespoductos: cotizacionespoductos
            });
        });
    });
};


//=======================================================================
//Crear cotizacionespoductos
//=======================================================================
cotizacionesProductosController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cotizacionespoductos set ?', [data], (err, cotizacionespoductosGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear cotizacion',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                cotizacionespoductos: cotizacionespoductosGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion Cuidades por id
//=======================================================================
cotizacionesProductosController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cotizacionespoductos set ? WHERE idCotizacionProducto = ?', [data, id], (err, cotizacionespoductosActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                cotizacionespoductos: cotizacionespoductosActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Cuidades por id 
//=======================================================================
cotizacionesProductosController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cotizacionespoductos WHERE idCotizacionProducto = ?', [id], (err, cotizacionespoductosBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                cotizacionespoductos: cotizacionespoductosBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = cotizacionesProductosController;