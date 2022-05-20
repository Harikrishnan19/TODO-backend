const {Sequelize, DataTypes} = require('sequelize')
const config = require('../config/config');

// database connection establishment
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect
    }
)

const db = {}

db.sequelize = sequelize
db.models = {}

db.models.User = require('./user')(sequelize, DataTypes)
db.models.ToDo = require('./todo')(sequelize)

module.exports = db

