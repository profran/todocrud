require('dotenv').config() // instatiate environment variables

let CONFIG = {} // Make this global to use all over the application

CONFIG.app = process.env.APP || 'dev'
CONFIG.port = process.env.PORT || '3000'

CONFIG.db_dialect = process.env.DB_DIALECT || 'mongodb'
CONFIG.db_host = process.env.DB_HOST || 'localhost'
CONFIG.db_port = process.env.DB_PORT || '27017'

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'jwt_please_change'
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000'

module.exports = CONFIG
