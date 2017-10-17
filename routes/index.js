'use string'

const express = require("express");
const productoCtrl = require('../controlador/producto')
const api = express.Router()
const usuario = require('../models/usuario')
const auth = require('../middlewares/autentificacion')
const userCtrl = require('../controlador/usuario')
const compraCtrl = require('../controlador/compra')

//METODOS DE PRODUCTO
api.get('/producto', productoCtrl.getProducto) //DEVUELVE TODOS LOS PRODUCTOS
api.get('/producto/:productoId', productoCtrl.getProducto)// DEVUELVE UN PRODUCTO POR SU ID
api.post('/producto/', productoCtrl.saveProducto)//AGREGAR UN NUEVO PRODUCTO
api.put('/producto/:productoId', productoCtrl.updateProducto)//ACTUALIZA UN PRODUCTO POR SU ID
api.delete('/producto/:productoId', productoCtrl.deleteProducto)//BORRA PRODUCTO POR SU ID
api.get('/idp', productoCtrl.getID) //DEVUELVE TODOS LOS PRODUCTOS

//METODOS DE USUARIO
api.get('/usuario', userCtrl.getUsuario) //DEVUELVE TODOS LOS USUARIOS
api.get('/usuario/:usuarioId', userCtrl.getUsuario)// DEVUELVE UN USUARIO POR SU CORREO
//api.post('/usuario/', userCtrl.signUp)//AGREGAR UN NUEVO USUARIO
//api.put('/usuario/:usuarioId', userCtrl.updateUsuario)//ACTUALIZA UN USUARIO POR SU ID
api.delete('/usuario/:usuarioId', userCtrl.deleteUsuario)//BORRA USUARIO POR SU ID
api.get('/private', auth, (req, res) => {
  res.status(200).send( {message: 'Tienes acceso'})
})

api.post('/signup', userCtrl.signUp)//AGREGAR UN NUEVO USUARIO
api.post('/signin', userCtrl.signIn)
api.get('/idp', userCtrl.getID) //DEVUELVE TODOS LOS PRODUCTOS


//METODOS DE COMPRA
api.post('/comprar/', compraCtrl.addCompra)//AGREGAR COMPRA
api.get('/compra/:usuarioId', compraCtrl.getCompra)//LISTAR COMPRAS DE USUARIO

module.exports = api;
