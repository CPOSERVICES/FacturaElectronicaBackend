//importaciones principales
var express = require('express');
var app = express();

/*importacion de Controlladores de las tablas de la BD*/
var campoAdicional = require('../controllers/campoAdicional');
var ciudades = require('../controllers/cuidades');
var clientes = require('../controllers/cliente');
var compras = require('../controllers/compras');
var comprasProductos = require('../controllers/comprasProducto');
var cotizaciones = require('../controllers/cotizaciones');
var cotizacionesProductos = require('../controllers/cotizacionProductos');
var detalleAdicional = require('../controllers/detalleAdicional');
var emisor = require('../controllers/emisor');
var establecimiento = require('../controllers/establecimiento');
var factura = require('../controllers/factura');
var facturaProducto = require('../controllers/facturaProducto');
var facturaCompras = require('../controllers/facturasCompras');
var facturahasproductocompras = require('../controllers/facturasProductosCompras');
var facturasCobros = require('../controllers/facturasCobros');
var facturascompraspagos = require('../controllers/facturasComprasPagos');
var guia = require('../controllers/guia');
var guiaProducto = require('../controllers/guiaProducto');
var impuesto = require('../controllers/impuesto');
var impuestoComprobanteRetencion = require('../controllers/impuestoComprobanteRetencion');
var impuestoIce = require('../controllers/impuestoIce');
var impuestoIrbpnr = require('../controllers/impuestoIrbpnr');
var impuestoIva = require('../controllers/impuestoIva');
var mensaje = require('../controllers/mensaje');
var motivo = require('../controllers/motivo');
var notasCredito = require('../controllers/notaCredito');
var notaCreditoProducto = require('../controllers/notaCreditoProducto');
var notasDebito = require('../controllers/notaDebito');
var producto = require('../controllers/producto');
var proveedor = require('../controllers/proveedor');
var provincias = require('../controllers/provincias');
var puntoEmision = require('../controllers/puntoEmision');
var retencion = require('../controllers/retencion');
var role = require('../controllers/role');
var usuarios = require('../controllers/usuarios');
var sriRetenciones = require('../controllers/sriRetenciones');
/*importacion de Controlladores de las tablas de la BD*/


/***********************************************************************************************************************/
/*********************************************************RUTAS SIMPLES*************************************************/
/***********************************************************************************************************************/

//=======================================================================
//CRUD campo Adicional 
//=======================================================================
app.get('/campo', campoAdicional.list);
app.post('/campo', campoAdicional.create);
app.put('/campo/:id', campoAdicional.update);
app.delete('/campo/:id', campoAdicional.delete);
//=======================================================================
//CRUD Campo Adicional 
//=======================================================================

//=======================================================================
//CRUD Ciudades 
//=======================================================================
app.get('/ciudades', ciudades.list);
app.post('/ciudades', ciudades.create);
app.put('/ciudades/:id', ciudades.update);
app.delete('/ciudades/:id', ciudades.delete);
//=======================================================================
//CRUD Ciudades 
//=======================================================================

//=======================================================================
//CRUD Clientes 
//=======================================================================
app.get('/cliente', clientes.list);
app.post('/cliente', clientes.create);
app.put('/cliente/:id', clientes.update);
app.delete('/cliente/:id', clientes.delete);
//=======================================================================
//CRUD Clientes 
//=======================================================================

//=======================================================================
//CRUD Compras 
//=======================================================================
app.get('/compras', compras.list);
app.post('/compras', compras.create);
app.put('/compras/:id', compras.update);
app.delete('/compras/:id', compras.delete);
//=======================================================================
//CRUD Compras 
//=======================================================================

//=======================================================================
//CRUD Cotizaciones 
//=======================================================================
app.get('/cotizaciones', cotizaciones.list);
app.post('/cotizaciones', cotizaciones.create);
app.put('/cotizaciones/:id', cotizaciones.update);
app.delete('/cotizaciones/:id', cotizaciones.delete);
//=======================================================================
//CRUD Cotizaciones 
//=======================================================================

//=======================================================================
//CRUD Detalle Adicional 
//=======================================================================
app.get('/detalle', detalleAdicional.list);
app.post('/detalle', detalleAdicional.create);
app.put('/detalle/:id', detalleAdicional.update);
app.delete('/detalle/:id', detalleAdicional.delete);
//=======================================================================
//CRUD Detalle Adional
//=======================================================================

//=======================================================================
//CRUD Emisor 
//=======================================================================
app.get('/emisor', emisor.list);
app.post('/emisor', emisor.create);
app.put('/emisor/:id', emisor.update);
app.delete('/emisor/:id', emisor.delete);
//=======================================================================
//CRUD Emisor
//=======================================================================

//=======================================================================
//CRUD Establecimiento 
//=======================================================================
app.get('/establecimiento', establecimiento.list);
app.post('/establecimiento', establecimiento.create);
app.put('/establecimiento/:id', establecimiento.update);
app.delete('/establecimiento/:id', establecimiento.delete);
//=======================================================================
//CRUD Establecimiento
//=======================================================================

//=======================================================================
//CRUD Factura 
//=======================================================================
app.get('/factura', factura.list);
app.post('/factura', factura.create);
app.put('/factura/:id', factura.update);
app.delete('/factura/:id', factura.delete);
//=======================================================================
//CRUD Factura
//=======================================================================

//=======================================================================
//CRUD Guia 
//=======================================================================
app.get('/guia', guia.list);
app.post('/guia', guia.create);
app.put('/guia/:id', guia.update);
app.delete('/guia/:id', guia.delete);
//=======================================================================
//CRUD Guia
//=======================================================================

//=======================================================================
//CRUD Impuesto 
//=======================================================================
app.get('/impuesto', impuesto.list);
app.post('/impuesto', impuesto.create);
app.put('/impuesto/:id', impuesto.update);
app.delete('/impuesto/:id', impuesto.delete);
//=======================================================================
//CRUD Impuesto
//=======================================================================

//=======================================================================
//CRUD Impuesto ICE
//=======================================================================
app.get('/ice', impuestoIce.list);
app.post('/ice', impuestoIce.create);
app.put('/ice/:id', impuestoIce.update);
app.delete('/ice/:id', impuestoIce.delete);
//=======================================================================
//CRUD Impuesto ICE
//=======================================================================

//=======================================================================
//CRUD Impuesto Irbpnr
//=======================================================================
app.get('/impuestoIrb', impuestoIrbpnr.list);
app.post('/impuestoIrb', impuestoIrbpnr.create);
app.put('/impuestoIrb/:id', impuestoIrbpnr.update);
app.delete('/impuestoIrb/:id', impuestoIrbpnr.delete);
//=======================================================================
//CRUD Impuesto Irbpnr
//=======================================================================

//=======================================================================
//CRUD Impuesto Iva
//=======================================================================
app.get('/iva', impuestoIva.list);
app.post('/iva', impuestoIva.create);
app.put('/iva/:id', impuestoIva.update);
app.delete('/iva/:id', impuestoIva.delete);
//=======================================================================
//CRUD Impuesto Iva
//=======================================================================

//=======================================================================
//CRUD  Mensaje
//=======================================================================
app.get('/mensaje', mensaje.list);
app.post('/mensaje', mensaje.create);
app.put('/mensaje/:id', mensaje.update);
app.delete('/mensaje/:id', mensaje.delete);
//=======================================================================
//CRUD  Mensaje
//=======================================================================

//=======================================================================
//CRUD  Motivo
//=======================================================================
app.get('/motivo', motivo.list);
app.post('/motivo', motivo.create);
app.put('/motivo/:id', motivo.update);
app.delete('/motivo/:id', motivo.delete);
//=======================================================================
//CRUD  Motivo
//=======================================================================

//=======================================================================
//CRUD  Notas Credito
//=======================================================================
app.get('/notasC', notasCredito.list);
app.post('/notasC', notasCredito.create);
app.put('/notasC/:id', notasCredito.update);
app.delete('/notasC/:id', notasCredito.delete);
//=======================================================================
//CRUD  Notas Credito
//=======================================================================

//=======================================================================
//CRUD  Notas Debito
//=======================================================================
app.get('/notasD', notasDebito.list);
app.post('/notasD', notasDebito.create);
app.put('/notasD/:id', notasDebito.update);
app.delete('/notasD/:id', notasDebito.delete);
//=======================================================================
//CRUD  Notas Debito
//=======================================================================

//=======================================================================
//CRUD  Producto
//=======================================================================
app.get('/producto', producto.list);
app.post('/producto', producto.create);
app.put('/producto/:id', producto.update);
app.delete('/producto/:id', producto.delete);
//=======================================================================
//CRUD  Producto
//=======================================================================

//=======================================================================
//CRUD  Producto
//=======================================================================
app.get('/proveedor', proveedor.list);
app.post('/proveedor', proveedor.create);
app.put('/proveedor/:id', proveedor.update);
app.delete('/proveedor/:id', proveedor.delete);
//=======================================================================
//CRUD  Producto
//=======================================================================

//=======================================================================
//CRUD  Provincias
//=======================================================================
app.get('/provincias', provincias.list);
app.post('/provincias', provincias.create);
app.put('/provincias/:id', provincias.update);
app.delete('/provincias/:id', provincias.delete);
//=======================================================================
//CRUD  Provincias
//=======================================================================

//=======================================================================
//CRUD  Punto Emision
//=======================================================================
app.get('/puntoEmision', puntoEmision.list);
app.post('/puntoEmision', puntoEmision.create);
app.put('/puntoEmision/:id', puntoEmision.update);
app.delete('/puntoEmision/:id', puntoEmision.delete);
//=======================================================================
//CRUD  Punto Emision
//=======================================================================

//=======================================================================
//CRUD Retenciones 
//=======================================================================
app.get('/retencion', retencion.list);
app.post('/retencion', retencion.create);
app.put('/retencion/:id', retencion.update);
app.delete('/retencion/:id', retencion.delete);
//=======================================================================
//CRUD   Retenciones
//=======================================================================

//=======================================================================
//CRUD Role 
//=======================================================================
app.get('/role', role.list);
app.post('/role', role.create);
app.put('/role/:id', role.update);
app.delete('/role/:id', role.delete);
//=======================================================================
//CRUD   Role
//=======================================================================

//=======================================================================
//CRUD Usuarios 
//=======================================================================
app.get('/usuarios', usuarios.list);
app.post('/usuarios', usuarios.create);
app.put('/usuarios/:id', usuarios.update);
app.delete('/usuarios/:id', usuarios.delete);
//=======================================================================
//CRUD   Usuarios
//=======================================================================

//=======================================================================
//CRUD SriRetenciones 
//=======================================================================
app.get('/sriRetenciones', sriRetenciones.list);
app.post('/sriRetenciones', sriRetenciones.create);
app.put('/sriRetenciones/:id', sriRetenciones.update);
app.delete('/sriRetenciones/:id', sriRetenciones.delete);
//=======================================================================
//CRUD SriRetenciones 
//=======================================================================

/***********************************************************************************************************************/
/********************************************************RUTAS COMPUESTASS**********************************************/
/***********************************************************************************************************************/

//=======================================================================
//CRUD ComprasProductos 
//=======================================================================
app.get('/comprasProductos', comprasProductos.list);
app.post('/comprasProductos', comprasProductos.create);
app.put('/comprasProductos/:id', comprasProductos.update);
app.delete('/comprasProductos/:id', comprasProductos.delete);
//=======================================================================
//CRUD ComprasProductos 
//=======================================================================

//=======================================================================
//CRUD CorizacionesProductos 
//=======================================================================
app.get('/cotizacionesProductos', cotizacionesProductos.list);
app.post('/cotizacionesProductos', cotizacionesProductos.create);
app.put('/cotizacionesProductos/:id', cotizacionesProductos.update);
app.delete('/cotizacionesProductos/:id', cotizacionesProductos.delete);
//=======================================================================
//CRUD CotizacionesProductos 
//=======================================================================

//=======================================================================
//CRUD GuiaHasProducto 
//=======================================================================
app.get('/guiaProducto', guiaProducto.list);
app.post('/guiaProducto', guiaProducto.create);
app.put('/guiaProducto/:id', guiaProducto.update);
app.delete('/guiaProducto/:id', guiaProducto.delete);
//=======================================================================
//CRUD GuiaHasProducto 
//=======================================================================

//=======================================================================
//CRUD ImpuestoComprobanteRetencion 
//=======================================================================
app.get('/impuestoComprobanteRetencion', impuestoComprobanteRetencion.list);
app.post('/impuestoComprobanteRetencion', impuestoComprobanteRetencion.create);
app.put('/impuestoComprobanteRetencion/:id', impuestoComprobanteRetencion.update);
app.delete('/impuestoComprobanteRetencion/:id', impuestoComprobanteRetencion.delete);
//=======================================================================
//CRUD ImpuestoComprobanteRetencion 
//=======================================================================

//=======================================================================
//CRUD FacturaCompras
//=======================================================================
app.get('/facturaCompras', facturaCompras.list);
app.post('/facturaCompras', facturaCompras.create);
app.put('/facturaCompras/:id', facturaCompras.update);
app.delete('/facturaCompras/:id', facturaCompras.delete);
//=======================================================================
//CRUD FacturaCompras
//=======================================================================

//=======================================================================
//CRUD FacturaHasProducto 
//=======================================================================
app.get('/facturaProducto', facturaProducto.list);
app.post('/facturaProducto', facturaProducto.create);
app.put('/facturaProducto/:id', facturaProducto.update);
app.delete('/facturaProducto/:id', facturaProducto.delete);
//=======================================================================
//CRUD FacturaHasProducto 
//=======================================================================

//=======================================================================
//CRUD facturahasproductocompras 
//=======================================================================
app.get('/facturahasproductocompras', facturahasproductocompras.list);
app.post('/facturahasproductocompras', facturahasproductocompras.create);
app.put('/facturahasproductocompras/:id', facturahasproductocompras.update);
app.delete('/facturahasproductocompras/:id', facturahasproductocompras.delete);
//=======================================================================
//CRUD facturahasproductocompras 
//=======================================================================

//=======================================================================
//CRUD facturascobros 
//=======================================================================
app.get('/facturasCobros', facturasCobros.list);
app.post('/facturasCobros', facturasCobros.create);
app.put('/facturasCobros/:id', facturasCobros.update);
app.delete('/facturasCobros/:id', facturasCobros.delete);
//=======================================================================
//CRUD facturascobros 
//=======================================================================

//=======================================================================
//CRUD facturascompraspagos 
//=======================================================================
app.get('/facturascompraspagos', facturascompraspagos.list);
app.post('/facturascompraspagos', facturascompraspagos.create);
app.put('/facturascompraspagos/:id', facturascompraspagos.update);
app.delete('/facturascompraspagos/:id', facturascompraspagos.delete);
//=======================================================================
//CRUD facturascompraspagos 
//=======================================================================

//=======================================================================
//CRUD NotaCreditoHasProducto 
//=======================================================================
app.get('/notaCreditoProducto', notaCreditoProducto.list);
app.post('/notaCreditoProducto', notaCreditoProducto.create);
app.put('/notaCreditoProducto/:id', notaCreditoProducto.update);
app.delete('/notaCreditoProducto/:id', notaCreditoProducto.delete);
//=======================================================================
//CRUD NotaCreditoHasProducto 
//=======================================================================



















//Ruta Principal
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Servidor Corriendo, rutas OK!'
    });
});


//Exportacion de Ruta
module.exports = app;