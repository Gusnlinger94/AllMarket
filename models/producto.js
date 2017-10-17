"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//crea el esquema de los productos
const ProductoSchema = new Schema({
  nombre: {type: String, required: true},
  foto: String,
	precio: {type: Number, default : 0},
	categoria: { type: String, enum:['computadoras','telefonos','juegos']},
  descripcion: String
  //idUsuario:(type: String, required: true)
});

module.exports = mongoose.model('Producto', ProductoSchema)
