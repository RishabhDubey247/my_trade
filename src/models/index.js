const { Sequelize } = require('sequelize');
var _users = require('./users');
var _cryptolist = require('./cryptolist');

function initModels(sequelize) {
    var Users = _users(sequelize, Sequelize);
    var Cryptolist = _cryptolist(sequelize, Sequelize);
    return {
        Users,
        Cryptolist
    }
};
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    timezone: '+05:30', // for writing to database
});

module.exports = initModels(sequelize);
module.exports.sequelize = sequelize;