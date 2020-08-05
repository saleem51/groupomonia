const bcrypt = require('bcrypt');``
const jwt = require('jsonwebtoken');
const mysql = require('mysql');



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
    console.log('mysql connected !');
});



exports.createDataBase = (req, res, next) => {
        let sql = 'CREATE DATABASE deuxieme';
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.send('databse created...')
      });
    };

exports.createDataTable = (req, res) => {
        let tbl = 'CREATE TABLE Users (id int AUTO_INCREMENT, email VARCHAR(250), lastname VARCHAR(100), firstname VARCHAR(100),password VARCHAR(255), PRIMARY KEY(id))'
        db.query(tbl, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('table created !')
        });
    };

exports.signup = (req, res, next) => {
    const user = req.body
    console.log(user)
     bcrypt.hash(user.password, 10) 
    .then((hash) => {
        user.password = hash
        db.query(`INSERT INTO Users SET ?`, user, function(err, result, field){
            if (err) {
                console.log(err)
                return res.status(400).json("erreur")
            }
            return res.status(201).json({message : 'Votre compte a bien été créer !'})
        });
    });
};  