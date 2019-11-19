var ciudadesController = {}


//=======================================================================
//Obtiene todas las Cuidades
//=======================================================================
ciudadesController.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ciudades', (err, ciudades) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al cargar lista de ciudades',
                    errors: err
                });
            }
            res.status(200).json({
                ok: true,
                ciudades: ciudades
            });
        });
    });
};


//=======================================================================
//Crear Cuidades
//=======================================================================
ciudadesController.create = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO ciudades set ?', [data], (err, ciudadesGuardado) => {

            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Error al crear ciudades',
                    errors: err,
                });
            }
            res.status(201).json({
                ok: true,
                ciudades: ciudadesGuardado,
            });
        });
    });
};

//=======================================================================
//Actualizacion Cuidades por id
//=======================================================================
ciudadesController.update = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE ciudades set ? WHERE idCiudades = ?', [data, id], (err, ciudadesActualizar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'error al actualizar',
                    errors: err

                });
            }

            res.status(200).json({
                ok: true,
                ciudades: ciudadesActualizar
            });
        });
    });
}

//=======================================================================
//Eliminacion Cuidades por id 
//=======================================================================
ciudadesController.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM ciudades WHERE idCiudades = ?', [id], (err, ciudadesBorrar) => {
            if (err) {
                res.status(500).json({
                    ok: false,
                    mensaje: 'Error al buscar el id',
                    errors: err
                });
            }

            res.status(200).json({
                ok: true,
                ciudades: ciudadesBorrar
            });
        });
    });
}

//=======================================================================
//Exporta el modulo 
//=======================================================================
module.exports = ciudadesController;