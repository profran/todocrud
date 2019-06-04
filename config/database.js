const CONFIG = require('./config/config')
const mongoose = require('mongoose')

const mongoDB = `mongodb://${CONFIG.db_host}:${CONFIG.db_port}/todocrud`

mongoose.connect(mongoDB)
mongoose.Promise = global.Promise

module.exports = mongoose
