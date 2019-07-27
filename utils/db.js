const Sequelize = require('sequelize')
const keys = require('../config/keys')

const sequelize = new Sequelize('chatterbox', keys.dbUsername, keys.dbPassword, {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize
