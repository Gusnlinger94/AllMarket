'use string'

const mongoose = require('mongoose')
const app = require('./app')
const hbs = require('express-handlebars')
const config = require('./config')

mongoose.connect(config.db, (err, res) =>{
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }
  console.log('Conexion a la base de datos establecida...');
//probando git ignore
  //Hacer que la API corra en el puerto establecido
  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
