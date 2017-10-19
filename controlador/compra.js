'use string'

const Compra = require('../models/compra')
const Usuario = require('../models/usuario')
const Producto = require('../models/producto')
const service = require('../servicio')
const productoCtrl = require('../controlador/producto')

function addCompra (req, res) {
  const compra = new Compra({
    idProducto: req.body.idProducto,
    idUsuario: req.body.idUsuario,
    pago: req.body.pago
  })

  compra.save((err) => {
    if (err) res.status(500).send({message: `Error al hacer la compra: ${err}`})

    return res.status(200).send({message: 'Compra realizada con éxito'})
  })
}

function getCompra (req, res){ // BUSCA USUARIO POR ID
  const id = req.params.usuarioId

  Compra.find({idUsuario: id}, (err, compras) =>{
    let promesa = new Promise((resolve, reject) => {

    })
      if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`});
      if(!compras) return res.status(404).send({message: 'La compra no existe'});
      /*let final = []
      compras.forEach((compra, index) => {
        let productoId = compra.idProducto;
        Producto.findById(productoId, (err, producto) =>{
          console.log("entreee");
          // compra['producto'] = producto.nombre
          final.push({
            pago: compra.pago,
            nombreProducto: producto.nombre
          })
        })
      });*/

      res.status(200).send(compras)
    })
}

module.exports = {
  addCompra,
  getCompra
}
