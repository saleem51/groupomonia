const Sequelize = require('sequelize');
const db = {}
const mysql2 = require('mysql2');

const NAME = process.env.NAME;
const PASS = process.env.PASS;
const HOST = process.env.HOST;


const  sequelize = new Sequelize('Groupomania', NAME, PASS, {
    host: HOST,
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }

})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db