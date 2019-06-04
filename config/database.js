const CONFIG = require('./config')
const mongoose = require('mongoose')

const mongoDB = `mongodb://${CONFIG.db_host}:${CONFIG.db_port}/todocrud`

mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose
