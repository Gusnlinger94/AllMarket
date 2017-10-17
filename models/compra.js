"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//crea el esquema de los usuarios
const CompraSchema = new Schema({

  idProducto: {type: String, required: true},
  idUsuario: {type: String, required: true},
  pago: {type: String, require: true, lowercase: true},
  fecha: {type: String, default: Date.now()} //registrar la fecha que el usuario fue creado

});

module.exports = mongoose.model('Compra', CompraSchema);
