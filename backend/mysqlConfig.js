const mysql = require('mysql');
const dotenv = require("dotenv");

dotenv.config({path: './.env'}); //masquage des informations sensibles comme les idantifiants et les mots de passes

const NAME = process.env.NAME;
const PASS = process.env.PASS;
const HOST = process.env.HOST;

const db = mysql.createConnection({
    host     : HOST,
    user     : NAME,
    password : PASS,
    database: 'Groupomania'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connecté a mysql avec l \'id '  + db.threadId);
});


module.exports = db;