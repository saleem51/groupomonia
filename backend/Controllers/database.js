const bcrypt = require('bcrypt');
const express = require('express')
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const randtoken = require('rand-token');
const cors = require('cors');
const ejs = require('ejs');

const tokengenerate = randtoken.generate(16);

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

const User = require('../model/modelUser');
const { DATE } = require('mysql2/lib/constants/types');




exports.createDataBase = (req, res, next) => {
        let sql = 'CREATE DATABASE Groupomnia';
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.send('databse created...')
      });
    };

exports.createDataTable = (req, res) => {
        let tbl = 'CREATE TABLE user (id int AUTO_INCREMENT, email VARCHAR(100), lastname VARCHAR(100), firstname VARCHAR(100),password VARCHAR(255), PRIMARY KEY(id), created VARCHAR(100))'
        db.query(tbl, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('table created !')
        });
    };

    

exports.signup = (req, res, next) => {
    const user = req.body
     bcrypt.hash(user.password, 10) 
    .then((hash) => {
        user.password = hash
        db.query(`INSERT INTO user SET ?`, user, (err, result, field) => {
            if (err) {
                console.log(err)
                return res.status(400).json("erreur")
            }
            return res.status(201).json({message : 'Votre compte a bien été crée !'})
        });
    });
};  

exports.login = (req, res, next) => {
    const username = req.body.email
	const password = req.body.password
	if (username && password) {
		db.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
			if (bcrypt.compare(req.body.password, password)) {
				req.session.loggedin = true;
                req.session.username = username;
                //res.send({data: JSON.stringify(`Bienvenu ${req.body.email}`)})
			} else {
				res.status(400).json({message: 'mot de passe incorrect !'});
			}			
            res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
        res.end();
	}
};