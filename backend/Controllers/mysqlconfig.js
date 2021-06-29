const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config({path: './.env'}); //masquage des informations sensibles comme les idantifiants et les mots de passes

const NAME = process.env.NAME;
const PASS = process.env.PASS;
// const HOST = 'mysql://api_mania_8580:mtn5FuprMGNWwXY1Zbvi@796c2cad-4327-4f50-829b-1fa8ba97268b.api-mania-8580.mysql.dbs.scalingo.com:31741/api_mania_8580?useSSL=true&verifyServerCertificate=false'	
const HOST = 'mysql-saleem51.alwaysdata.net';

//Connexion à la base de donnée Mysql

const db = mysql.createConnection({
    host     : 'mysql-saleem51.alwaysdata.net',
    password : 'Tutrouverapa26?',
    database: 'saleem51_groupomania',
    user: 'saleem51'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté a mysql avec l \'id '  + db.threadId);
});


module.exports = db;