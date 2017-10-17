module.exports = {
  port: process.env.PORT || 4000,
  db: process.env.mo || 'mongodb://localhost:27017/market',
  SECRET_TOKEN: 'miclavedetokens'
}
