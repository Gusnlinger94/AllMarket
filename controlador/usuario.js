'use string'

const Usuario = require('../models/usuario')
const service = require('../servicio')
const bcrypt = require('bcrypt')

function signUp (req, res) {
	const usuario = new Usuario({
		nombre: req.body.nombre,
		telf: req.body.telf,
		correo: req.body.correo,
		clave: req.body.clave,
		tipo: req.body.tipo,
	});
	usuario.save((err) => {
		if (err) res.status(500).send({message: `Error al crear el usuario: ${err}`})

			return res.status(200).send({token: service.createToken(usuario)})
	})
}

function signIn(req, res) {
	console.log(req.body);
	Usuario.findOne({ correo: req.body.correo, clave: req.body.clave}, (err, user) => {
		if (err) return res.status(500).send({ message: err })
		if (!user) return res.status(404).send({message: 'Por favor, verifique sus fucking datos'})

		res.status(200).send({
			message : 'Te has logueado',
			token: service.createToken(user)
		})

	})//deberia buscar por el ID o un EMAIL
}

function getUsuario (req, res){
	Usuario.find({}, (err, usuario) =>{
		if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
			if(!usuario) return res.status(404).send({message: 'No existen usuarios'})

				res.status(200).send({ usuario: usuario })
		})
}

function deleteUsuario (req, res){
	const usuarioId = req.params.usuarioId

	Usuario.findById(usuarioId, (err, usuaro) =>{
		if(err) return res.status(500).send({message: `Error al borrar el usuario: ${err}`})

			usuario.remove(err =>{
				if(err) return res.status(500).send({message: `Error al borrar el usuario: ${err}`})
					res.status(200).send({message: 'El usuario ha sido eliminado'})
			})
	})
}

function getUsuario (req, res){ // BUSCA USUARIO POR ID
	const correo = req.params.correo

	Usuario.findOne(correo, (err, usuario) =>{
		if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
			if(!usuario) return res.status(404).send({message: 'El producto no existe'})

				res.status(200).send({ usuario: usuario })
		})
}

function getID (req, res){ // BUSCA USUARIO POR ID
	const correo = req.params.correo

	Usuario.findOne(correo, (err, usuario) =>{
		if(err) return res.status(500).send({message: `Error al realizar peticion: ${err}`})
			if(!usuario) return res.status(404).send({message: 'El producto no existe'})

				res.status(200).send({ usuario: usuario._id })
		})
}

module.exports = {
	signUp,
	signIn,
	getUsuario,
	getID,
	//updateUsuario,
	deleteUsuario
}
