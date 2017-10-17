"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//crea el esquema de los usuarios
const UsuarioSchema = new Schema({

  nombre: {type: String, required: true},
  telf: {type: String},
  correo: {type: String, unique: true, require: true, lowercase: true},
  clave: {type: String, select: false, require: true},
  tipo: {type: String, require: true,enum:['admin','user']},
  signupDate: {type: String, default: Date.now()} //registrar la fecha que el usuario fue creado

});

module.exports = mongoose.model('Usuario', UsuarioSchema);
