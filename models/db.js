const Sequelize = require('sequelize');

// Conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'root', '123456', {
host: "localhost",
dialect: 'mysql'
});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;