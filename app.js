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
var uploadsRoutes = require('./routes/upload');


//Rutas
//Controllers
app.get('/campo', appRoutes);
app.get('/cuidades', appRoutes);
app.get('/cliente', appRoutes);
app.get('/compras', appRoutes);
app.get('/comprasProductos', appRoutes);
app.get('/cotizaciones', appRoutes);
app.get('/cotizacionesProductos', appRoutes);
app.get('/detalle', appRoutes);
app.get('/emisor', appRoutes);
app.get('/establecimiento', appRoutes);
app.get('/factura', appRoutes);
app.get('/facturaCompras', appRoutes);
app.get('/facturaProducto', appRoutes);
app.get('/facturahasproductocompras', appRoutes);
app.get('/facturasCobros', appRoutes);
app.get('/facturascompraspagos', appRoutes);
app.get('/guia', appRoutes);
app.get('/guiaProducto', appRoutes);
app.get('/impuesto', appRoutes);
app.get('/impuestoComprobanteRetencion', appRoutes);
app.get('/ice', appRoutes);
app.get('/impuestoIrb', appRoutes);
app.get('/iva', appRoutes);
app.get('/mensaje', appRoutes);
app.get('/motivo', appRoutes);
app.get('/notasC', appRoutes);
app.get('/notaCreditoProducto', appRoutes);
app.get('/notasD', appRoutes);
app.get('/producto', appRoutes);
app.get('/proveedor', appRoutes);
app.get('/provincias', appRoutes);
app.get('/puntoEmision', appRoutes);
app.get('/retencion', appRoutes);
app.get('/role', appRoutes);
app.get('/usuarios', appRoutes);
app.get('/sriRetenciones', appRoutes);

app.use('/upload', uploadsRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0', 'online');
});