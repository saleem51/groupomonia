const db = require('../mysqlconfig');




exports.createmessageTable = (req, res) => {
    let mess = 'CREATE TABLE autre (id int NOT NULL AUTO_INCREMENT, message varchar(250) NOT NULL,PRIMARY KEY (id),UNIQUE KEY id_UNIQUE (id),UNIQUE KEY message_UNIQUE (message))ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8';
    db.query(mess, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('la table autre a été crée !')
    });
};

exports.postmessage = (req, res, next) => {
        const message = req.body
        console.log(message);
        db.query('INSERT INTO autre SET ?', message, (error) => {
          if (error) {
            return res.status(400).json({ error : 'une erreur est survenue'})
          }
          return res.status(201).json({ message: 'Votre message a été posté !' })
        })
      };


// exports.getOneMessage = (req, res, next) => {
//     const id = 
//     'SELECT * FROM messages WHERE idMESSAGES=?',
// }