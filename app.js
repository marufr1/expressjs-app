const express = require('express')
const router = require('./src/routes/app.route')
const app = express()
const port = 3000
const { Sequelize } = require('sequelize')
const config = require('./config/config.json')

module.exports = config

// by Muhammad Ma'ruf Rahman

appInit(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  const db = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password, {
      host: config.development.host,
      port: 5432,
      dialect: config.development.dialect
    })
  db.authenticate()
    .then(console.log('Success connected to database'))
    .catch(err => {
      console.log('Failed connect to database', err)
      process.exit()
    })
})

function appInit(app) {
  app.use(express.json())
  app.use(express.urlencoded({
    extended: false
  }))
  app.use('/', router)
}