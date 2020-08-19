const db = require('../mysqlconfig');




exports.createmessageTable = (req, res) => {
    let mess = 'CREATE TABLE postes (id int NOT NULL AUTO_INCREMENT, message varchar(250) NOT NULL,PRIMARY KEY (id),UNIQUE KEY id_UNIQUE (id),UNIQUE KEY message_UNIQUE (message))ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8';
    db.query(mess, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('la table a été crée !')
    });
};

exports.postmessage = (req, res, next) => {
        const message = req.body.message
        console.log(message);
        db.query('INSERT INTO postes SET ?', message, (error, result, field) => {
          if (error) {
            return res.status(400).json({ error})
          }
          return res.status(201).json({ message: 'Votre message a été posté !' })
        })
      };


// exports.getOneMessage = (req, res, next) => {
//     const id = 
//     'SELECT * FROM messages WHERE idMESSAGES=?',
// }