const Sequelize = require('sequelize');
const db = require('./dataUser');
const { STRING } = require('sequelize');
const mysql2 = require('mysql2');


module.exports = db.sequelize.define('user',{

    id:{
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    lastname: {
        type: Sequelize.STRING,
    },
    firstname: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
   
    
})