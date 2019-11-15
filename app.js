// Requires
var express = require('express');
var mysql = require('mysql2');
var myConn = require('express-myconnection');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');


//Inicializar variables
var app = express();


//Cords
app.use(cors());


//Middlewares
//==========================================
//Configuracion Base de Datos
//==========================================
app.use(morgan('dev'));
app.use(myConn(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'cpo.2020',
    port: 3306,
    database: 'demodb'
}, 'single'));

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())


//Impotacion de Rutas
var appRoutes = require('./routes/app');
var loginRoutes = require('./routes/login');
var usuariosRoutes = require('./routes/usuarios');
var productosRoutes = require('./routes/producto');
var proveedoresRoutes = require('./routes/proveedor');
var clientesRoutes = require('./routes/cliente');
var ivaRoutes = require('./routes/impuestoIva');
var iceRoutes = require('./routes/impuestoIce');
var puntoEmision = require('./routes/puntoEmision');
var emisorRoutes = require('./routes/emisor');
var establecimientoRoutes = require('./routes/establecimiento');
var motivoRoutes = require('./routes/motivo');
var mensajeRoutes = require('./routes/mensaje');
var roleRoutes = require('./routes/role');
var impuestoRoutes = require('./routes/impuesto');
var provinciasRoutes = require('./routes/provincias');
var campoadicionalRoutes = require('./routes/campoAdicional');
var facturaRoutes = require('./routes/factura');
var notasCreditoRoutes = require('./routes/notaCredito');
var notasDebitoRoutes = require('./routes/notaDebito');
var retencionRoutes = require('./routes/retencion');
var guiaRoutes = require('./routes/guia');
var detalleAdicionalRoutes = require('./routes/detalleAdicional');
var impuestoirbpnrRoutes = require('./routes/impuestoIrbpnr');
var uploadsRoutes = require('./routes/upload');


//Rutas
app.use('/upload', uploadsRoutes);
app.use('/impuestoIrb', impuestoirbpnrRoutes);
app.use('/detalle', detalleAdicionalRoutes);
app.use('/guia', guiaRoutes);
app.use('/retencion', retencionRoutes);
app.use('/notasD', notasDebitoRoutes);
app.use('/notasC', notasCreditoRoutes);
app.use('/factura', facturaRoutes);
app.use('/campo', campoadicionalRoutes);
app.use('/provincia', provinciasRoutes);
app.use('/impuesto', impuestoRoutes);
app.use('/role', roleRoutes)
app.use('/mensaje', mensajeRoutes);
app.use('/motivo', motivoRoutes);
app.use('/establecimiento', establecimientoRoutes);
app.use('/emisor', emisorRoutes);
app.use('/puntoEmision', puntoEmision);
app.use('/ice', iceRoutes);
app.use('/iva', ivaRoutes);
app.use('/cliente', clientesRoutes);
app.use('/proveedor', proveedoresRoutes);
app.use('/producto', productosRoutes);
app.use('/usuario', usuariosRoutes)
app.use('/login', loginRoutes);
app.use('/', appRoutes);


//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0', 'online');
});