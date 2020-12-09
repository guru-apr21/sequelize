const { Sequelize } = require('sequelize');

module.exports = new Sequelize('test', 'postgres', 'Balanraji@99', {
  host: 'localhost',
  dialect: 'postgres',
});
