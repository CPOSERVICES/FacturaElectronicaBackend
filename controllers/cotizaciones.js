var cotizacionesController = {}


//=======================================================================
//Obtiene todas las Cuidades
//=======================================================================
cotizacionesController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cotizaciones', (err, cotizaciones) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de cotizaciones',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                cotizaciones: cotizaciones
            });
        });
    });
};


//=======================================================================
//Crear Cotizaciones
//=======================================================================
cotizacionesController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cotizaciones set ?', [data], (err, cotizacionesGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear cotizacion',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                cotizaciones: cotizacionesGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion Cuidades por id
//=======================================================================
cotizacionesController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cotizaciones set ? WHERE idCotizacion = ?', [data, id], (err, cotizacionesActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                cotizaciones: cotizacionesActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Cuidades por id 
//=======================================================================
cotizacionesController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cotizaciones WHERE idCotizacion = ?', [id], (err, cotizacionesBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                cotizaciones: cotizacionesBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = cotizacionesController;