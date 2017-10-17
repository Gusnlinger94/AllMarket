'use string'

const Producto = require('../models/producto')

function saveProducto(req, res){
  console.log('POST /api/producto')
  console.log(req.body)

  const producto = new Producto()
  producto.nombre = req.body.nombre
  producto.foto = req.body.foto
  producto.precio = req.body.precio
  producto.categoria = req.body.categoria
  producto.descripcion = req.body.descripcion

  producto.save((err, productStored) =>{
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err}`})

    res.status(200).send({producto: productStored})
  })
}
function getProducto (req, res){
  const productoId = req.params.productoId

  Producto.findById(productoId, (err, producto) =>{
    if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
    if(!producto) return res.status(404).send({message: 'El producto no existe'})

    res.status(200).send({ producto: producto })
  })
}

function getProducto (req, res){
  Producto.find({}, (err, producto) =>{
    if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
    if(!producto) return res.status(404).send({message: 'No existen productos'})

    res.status(200).send({ producto: producto })
  })
}

function updateProducto (req, res){
  const productoId = req.params.productoId
  const update = req.body

  Producto.findByIdAndUpdate(productoId, update, (err, productoUpdate) =>{
    if(err) return res.status(500).send({message: `Error al Actualizar el producto: ${err}`})

    res.status(200).send({ producto: productoUpdate})
  })
}

function deleteProducto (req, res){
  const productoId = req.params.productoId

  Producto.findById(productoId, (err, producto) =>{
    if(err) return res.status(500).send({message: `Error al borrar el producto: ${err}`})

    producto.remove(err =>{
      if(err) return res.status(500).send({message: `Error al borrar el producto: ${err}`})
      res.status(200).send({message: 'El producto ha sido eliminado'})
    })
  })
}

function getID (req, res){
  const productoId = req.params.productoId

  Producto.findById(productoId, (err, producto) =>{
    if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
    if(!producto) return res.status(404).send({message: 'El producto no existe'})

    res.status(200).send({ producto: producto._id })
  })
}

module.exports = {
  saveProducto,
  getProducto,
  getProducto,
  updateProducto,
  getID,
  deleteProducto
}
