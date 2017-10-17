'use string'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express();
const api = require('./routes')

//Inicializa el bodyParser
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.engine('.hbs', hbs({
  defaultLayout : 'default',
  extname : '.hbs'
}))

 app.set('view engine', '.hbs')

  var scripts = [{ script: '/scripts/jquery-3.2.1.min.js' }];
//
// res.render('contact', { title: 'Kontakt', scripts: scripts });

app.use('/api',api)
app.get('/login', (req, res)=> {
  res.render('login', {title: 'login', scripts:scripts})
})
/*app.get('/hola/:name', (req, res) => {
  res.send({message: `hola ${req.params.name}!`})
}) por si lo necesito*/

/*//TODOS LOS CONTROLADORES DE PRODUCTO
app.get('/api/producto', productoCtrl.getProducto) //DEVUELVE TODOS LOS PRODUCTOS
app.get('/api/producto/:productoId', productoCtrl.getProducto)// DEVUELVE UN PRODUCTO POR SU ID
app.post('/api/producto/', productoCtrl.saveProducto)//AGREGAR UN NUEVO PRODUCTO
app.put('/api/producto/:productoId', productoCtrl.updateProducto)//ACTUALIZA UN PRODUCTO POR SU ID
app.delete('/api/producto/:productoId', productoCtrl.deleteProducto)//BORRA PRODUCTO POR SU ID
*/
module.exports = app
