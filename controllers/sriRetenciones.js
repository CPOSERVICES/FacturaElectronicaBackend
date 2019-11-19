var sriRetencionesController = {}


//=======================================================================
//Obtiene todas las sriretenciones
//=======================================================================
sriRetencionesController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM sriretenciones', (err, sriRetenciones) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de sriretenciones',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                sriRetenciones: sriRetenciones
            });
        });
    });
};


//=======================================================================
//Crear sriretenciones
//=======================================================================
sriRetencionesController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO sriretenciones set ?', [data], (err, sriretencionesGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear sriretenciones',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                sriretenciones: sriretencionesGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion sriretenciones por id
//=======================================================================
sriRetencionesController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE sriretenciones set ? WHERE idSriRetenciones = ?', [data, id], (err, sriretencionesActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                sriretenciones: sriretencionesActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion facturascobros por id 
//=======================================================================
sriRetencionesController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM sriretenciones WHERE idSriRetenciones = ?', [id], (err, sriretencionesBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                sriretenciones: sriretencionesBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = sriRetencionesController;