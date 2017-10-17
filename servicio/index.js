'use string'

const jwt = require ('jwt-simple')
const moment =  require('moment')
const config = require('../config')

function createToken(usuario){
  const payload = {
    sub: usuario._id,
    iat: moment().unix(),//creacion del token
    exp: moment().add(14,'days').unix(),//y cuando expira
  }
  return jwt.encode(payload,config.SECRET_TOKEN)
}

function decodeToken(token){
  const decoded = new Promise((resolve,reject) => {
    try {
      const payload = jwt.decode(token, config.SECRET_TOKEN)
      if (payload.exp < moment().unix() ){
        reject({
          status: 401,
          menssage: 'El token a expirado'
        })
      }
      reject(payload.sub)
    } catch (e) {
      reject({
        status: 500,
        message: 'token invalido'
      })
    }
  })
  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
