const Sequelize = require('sequelize')

const sequelize = new Sequelize('chatterbox', 'donovancarreno', null, {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize
