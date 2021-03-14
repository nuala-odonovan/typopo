const Sequelize = require('sequelize')
const db = require('../db')

const Text = db.define('text', {
  text: Sequelize.TEXT
})

module.exports = Text
