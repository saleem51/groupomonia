const db = require('../mysqlconfig');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config({path: './.env'}); 
const TOKEN = process.env.TOKEN;





exports.createmessageTable = (req, res) => {
    let mess = 'CREATE TABLE message (idMESSAGES int AUTO_INCREMENT,`idUSERS` int NOT NULL, message text NOT NULL,`username` varchar(100) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (idMESSAGES), FOREIGN KEY (`idUSERS`) REFERENCES `user` (`id`) ON DELETE CASCADE)ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8';
    db.query(mess, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('la  table message a été crée !')
    });
};

exports.postmessage = (req, res, next) => {
        const message = {
          message: req.body.message,
          idUSERS : req.body.idUSERS,
          username : req.body.username
        } 
        console.log(message);
        
        db.query(`INSERT INTO message SET ?`, message, (error, result, field) => {
          if (error) {
            return res.status(400).json({ error})
          }
          return res.status(201).json({ message: 'Votre message a été posté !' })

        })
      };


exports.getMessages = (req, res, next) => {
    //WHERE idMESSAGES < 133 LIMIT 2
    db.query('SELECT * FROM message  ORDER BY created_at DESC', (error, result, field) => {
      if (error) {
        return res.status(400).json({ error})
      }

      return res.status(200).json(result)
    })
    
}

exports.getoneMessage = (req, res, next) => {
    
  db.query('SELECT * FROM message WHERE idMESSAGES= ?',req.params.id, (error, result, field) => {
    if (error) {
      return res.status(400).json({ error})
    }

    return res.status(200).json(result)
  })
  
}
exports.deleteMessage = (req, res, next) => {
      db.query(
        'DELETE FROM message WHERE idMESSAGES= ?',req.body.id, (error, results, fields) => {
          if (error) {
            return res.status(400).json(error)
          }
          return res.status(200).json({ message: 'Votre message a bien été supprimé !' })
        }
      )
    }
