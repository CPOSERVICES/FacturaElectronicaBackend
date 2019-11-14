// Requires
var express = require('express');
var mysql = require('mysql2');
var myConn = require('express-myconnection');
var morgan = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');


//Inicializar variables
var app = express();


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
var usuariosRoutes = require('./routes/usuarios');
var productosRoutes = require('./routes/producto');
var proveedoresRoutes = require('./routes/proveedor');
var clientesRoutes = require('./routes/cliente');
var ivaRoutes = require('./routes/impuestoIva');
var iceRoutes = require('./routes/impuestoIce');
var puntoEmision = require('./routes/puntoEmision');


//Rutas
app.use('/puntoEmision', puntoEmision);
app.use('/ice', iceRoutes);
app.use('/iva', ivaRoutes);
app.use('/cliente', clientesRoutes);
app.use('/proveedor', proveedoresRoutes);
app.use('/producto', productosRoutes);
app.use('/usuario', usuariosRoutes)
app.use('/', appRoutes);


//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0', 'online');
});