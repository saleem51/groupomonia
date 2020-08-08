const bcrypt = require('bcrypt');
const express = require('express')
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const randtoken = require('rand-token');
const cors = require('cors');

const tokengenerate = randtoken.generate(16);

const NAME = process.env.NAME;
const PASS = process.env.PASS;
const HOST = process.env.HOST;

// const db = mysql.createConnection({
//     host     : HOST,
//     user     : NAME,
//     password : PASS,
//     database: 'Groupomania'
// });

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('mysql connected !');
// });

const User = require('../model/modelUser');
const { DATE } = require('mysql2/lib/constants/types');


exports.createDataBase = (req, res, next) => {
        let sql = 'CREATE DATABASE ';
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result)
            res.send('databse created...')
      });
    };

exports.createDataTable = (req, res) => {
        let tbl = 'CREATE TABLE Users (id int AUTO_INCREMENT, email VARCHAR(250), lastname VARCHAR(100), firstname VARCHAR(100),password VARCHAR(255), PRIMARY KEY(id), created VARCHAR(100))'
        db.query(tbl, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('table created !')
        });
    };

    exports.signup = (req, res, next) => {
        const today = new Date();
        const userData = {
            email : req.body.email,
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            password: req.body.password,
            created: today
        }
    
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if(!user){
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                    .then(user => {
                        res.json({status: user.email + 'created'})
                        // db.query(`INSERT INTO Users SET ?`, userData, function(err, result, field){
                        //     if (err) {
                        //         console.log(err)
                        //         return res.status(400).json("erreur")
                        //     }
                        //     return res.status(201).json({message : 'Votre compte a bien été crée !'})
                        // });
                    })
                    .catch(err => {
                        res.send('error' + err)
                    })
                    
                
                })
            } else {
                res.json({error : 'Utilisateur déjà existant !'})
            }
        })
        .catch( err => {
            res.send('error' + err)
        })
        
          
          
    };  

exports.login = (req, res, next) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(user.dataValues, tokengenerate, tokengenerate,{ expiresIn: '24h' })
                res.send(token)
            }
        } else{
            res.status(400).json({error: 'Utilisateur inexistant !'})
        }
    })
    .catch(err => {
        res.status(400).json({error : err})
    })
}