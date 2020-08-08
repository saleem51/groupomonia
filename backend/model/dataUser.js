const Sequelize = require('sequelize');
const db = {};
const mysql2 = require('mysql2');

const dotenv = require('dotenv')

dotenv.config({path: '../.env'})

const NAME = process.env.NAME;
const PASS = process.env.PASS;
const HOST = process.env.HOST;


const  sequelize = new Sequelize('Groupomania', NAME, PASS, {
    host: HOST,
    port: '3306',
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }

})

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;