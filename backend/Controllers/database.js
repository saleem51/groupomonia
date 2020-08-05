const bcrypt = require('bcrypt');``
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const express = require('express');


const NAME = process.env.NAME;
const PASS = process.env.PASS;
const HOST = process.env.HOST;

const db = mysql.createConnection({
    host     : HOST,
    user     : NAME,
    password : PASS
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected !');
});



exports.createDataBase = (req, res, next) => {
        let sql = 'CREATE DATABASE Groupomania';
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.send('databse created...')
      });
    };

exports.createDataTable = (req, res) => {
        let select = 'USE Groupomania';
        let tbl = 'CREATE TABLE posts (id int AUTO_INCREMENT, nom VARCHAR(100), prenom VARCHAR(100), email VARCHAR(250), PRIMARY KEY (id))'
        db.query(select,tbl, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('table created !')
        });
    };

exports.signup = (req, res, next) => {
    const user = req.body
    console.log(req.body)
    bcrypt.hash(user.password, 10)
    .then((hash) => {
        user.password = hash
        db.query('INSERT INTO posts SET ?', function(err, result, field){
            if (err) {
                console.log(err)
                return res.status(400).json(err.sqlMessage)
            }
            return res.status(201).json({message : 'Votre compte a bien été créer !'})
        });
    })
};  