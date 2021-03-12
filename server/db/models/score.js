const Sequelize = require('sequelize')
const db = require('../db')

const Score = db.define('score', {
  score: Sequelize.INTEGER,
  name: Sequelize.STRING
})

module.exports = Score
