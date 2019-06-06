const express = require('express')
const logger = require('morgan')
const users = require('./routes/users')
const todos = require('./routes/todos')
const bodyParser = require('body-parser')
const mongoose = require('./config/database')
const CONFIG = require('./config/config')
var jwt = require('jsonwebtoken')
const app = express()

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error'))

app.set('secretKey', 'nodeRestApi')
app.use(logger('dev'))

app.use(bodyParser.json({ extended: true }))

app.get('/', function (req, res) {
  res.json({ 'tutorial': 'Build REST API with node.js' })
})

app.use('/users', users)

app.use('/todos', validateUser, todos)

function validateUser (req, res, next) {
  jwt.verify(req.headers['authorization'], req.app.get('secretKey'), function (err, decoded) {
    if (err) {
      res.json({ status: 'error', message: err.message })
    } else {
      // add user id to request
      req.body.userId = decoded.id
      next()
    }
  })
}
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function (req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})
// handle errors
app.use(function (err, req, res, next) {
  console.log(err)

  if (err.status === 404) { res.status(404).json({ message: 'Not found' }) } else { res.status(500).json({ message: 'Something looks wrong :( !!!' }) }
})

app.listen(CONFIG.port, function () {
  console.log(`Node server listening on port ${CONFIG.port}`)
})
