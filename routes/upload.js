var express = require('express');
var fileUpload = require('express-fileupload');
var fs = require('fs');

var app = express();

app.use(fileUpload());



app.post('/:tipo/:id', (req, res, next) => {
    var tipo = req.params.tipo;
    var id = req.params.id;

    //tipo de Archivos
    var tiposValidos = ['productos', 'formularios'];


    if (!req.files) {
        return res.status(400).json({
            ok: false,
            mensaje: 'No selecciono nada',
            errors: { message: 'Debe seleccionar una imagen' }
        });
    }

    //Obtener nombre del Archivo
    var archivo = req.files.nombre;
    var nombreCortado = archivo.name.split('.');
    var extensionArchivo = nombreCortado[nombreCortado.length - 1];
    //Extensiones Validas
    var extensionesValidas = ['png', 'jpg', 'gif', 'jpeg'];

    if (extensionesValidas.indexOf(extensionArchivo) < 0) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Extension no valida',
            errors: { message: 'Extensiones validas son ' + extensionesValidas.join(', ') }
        });
    }

    //nombre archivo
    var nombreArchivo = `${ id }-${ new Date().getMilliseconds() }.${ extensionArchivo }`;
    //Mover Archivo
    var path = `./uploads/${ tipo }/${ nombreArchivo }`;

    archivo.mv(path, err => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al mover archivo',
                errors: err
            });
        }

        subirPorTipo(tipo, id, nombreArchivo, res);



    });
});

function subirPorTipo(tipo, id, nombreArchivo, res) {
    if (tipo === 'productos') {
        var pathViejo = './uploads/productos/' + nombreArchivo;

        // Si existe, elimina la imagen anterior
        if (fs.existsSync(pathViejo)) {
            fs.unlink(pathViejo);
        }
        nombre = nombreArchivo
            // usuario.save((err, usuarioActualizado) => {
            //     return res.status(200).json({
            //         ok: true,
            //         mensaje: 'Peticion correcta',
            //         producto: usuarioActualizado
            //     });
            // });
    }
}


module.exports = app;