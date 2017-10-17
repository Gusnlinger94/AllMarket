'use string'

const Compra = require('../models/compra')
const Usuario = require('../models/usuario')
const Producto = require('../models/producto')
const service = require('../servicio')
const productoCtrl = require('../controlador/producto')

function addCompra (req, res) {
  const compra = new Compra({
    idProducto: productoCtrl.getID,
    idUsuario: productoCtrl.getID,
    pago: req.body.pago,
    fecha: req.body.fecha,
  })

  compra.save((err) => {
    if (err) res.status(500).send({message: `Error al hacer la compra: ${err}`})

    return res.status(200).send({token: service.createToken(compra)})
  })
}

function getCompra (req, res){ // BUSCA USUARIO POR ID
  const correo = req.params.correo

  Compra.findOne(correo, (err, compra) =>{
    if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
    if(!compra) return res.status(404).send({message: 'La compra no existe'})

    res.status(200).send({ compra: compra })
  })
}

module.exports = {
  addCompra,
  getCompra
}
