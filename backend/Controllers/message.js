const db = require('../mysqlconfig');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const dotenv = require("dotenv");
dotenv.config({path: './.env'}); 
const TOKEN = process.env.TOKEN;





exports.createmessageTable = (req, res) => {
    let mess = 'CREATE TABLE msg (idMESSAGES int AUTO_INCREMENT,`idUSERS` int NOT NULL, message text NOT NULL,`username` varchar(100) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (idMESSAGES))ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8';
    db.query(mess, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('la  table msge a été crée !')
    });
};

exports.postmessage = (req, res, next) => {
        const message = {
          message: req.body.message,
          idUSERS : req.body.idUSERS,
          username : req.body.username
        } 
        console.log(message);
        
        db.query(`INSERT INTO msg SET ?`, message, (error, result, field) => {
          if (error) {
            return res.status(400).json({ error})
          }
          return res.status(201).json({ message: 'Votre message a été posté !' })

        })
      };


exports.getMessages = (req, res, next) => {
    
    db.query('SELECT * FROM msg', (error, result, field) => {
      if (error) {
        return res.status(400).json({ error})
      }

      return res.status(200).json(result)
    })
    
}

exports.getoneMessage = (req, res, next) => {
    
  
  
}
exports.deleteMessage = (req, res, next) => {
  db.query(
    'SELECT * FROM msg WHERE idMESSAGES=?',
    req.params.id,
    console.log(req.params.id), (error, results, fields) => {
      if (error) {
        return res.status(400).json(error)
      }
      const token = req.headers.authorization.split(' ')[1]
      console.log(token)
      const decodedToken = jwt.verify(token, TOKEN)
      const userId = decodedToken.userId
      const status = decodedToken.status
      const messageId = results[0].idUSERS
      console.log(messageId)
      if (userId !== messageId || status !== 'admin') {
        return res.status(401).json({ message: 'Accès non autorisé' })
      }
      db.query(
        `DELETE FROM msg WHERE idMESSAGES=${req.params.id}`,
        req.params.id,
        function (error, results, fields) {
          if (error) {
            return res.status(400).json(error)
          }
          return res.status(200).json({ message: 'Votre message a bien été supprimé !' })
        }
      )
    }
  )
}