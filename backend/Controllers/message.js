const db = require('./mysqlconfig');//Configuration information de connections mysql
const dotenv = require("dotenv");
dotenv.config({path: './.env'}); 





//Création de la table message 
exports.createmessageTable = (req, res) => {
    let mess = 'CREATE TABLE messages (idMESSAGES int AUTO_INCREMENT,`idUSERS` int NOT NULL, message text NOT NULL,`username` varchar(100) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (idMESSAGES), FOREIGN KEY (`idUSERS`) REFERENCES `user` (`id`) ON DELETE CASCADE)ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8';
    db.query(mess, (err, result) => {
        if (err) throw err
        console.log(result)
        res.send('la  table message a été crée !')
    });
};


//Poster un message 
exports.postmessage = (req, res, next) => {
        const message = {
          message: req.body.message,
          idUSERS : req.body.idUSERS,
          username : req.body.username
        } 
        console.log(message);
        
        db.query(`INSERT INTO messages SET ?`, message, (error, result, field) => {
          if (error) {
            return res.status(400).json({ error})
          }
          return res.status(201).json({ message: 'Votre message a été posté !' })

        })
      };


//Affichage des messages posté 
exports.getMessages = (req, res, next) => {
    //WHERE idMESSAGES < 133 LIMIT 2
    db.query('SELECT * FROM messages  ORDER BY created_at DESC', (error, result, field) => {
      if (error) {
        return res.status(400).json({ error})
      }

      return res.status(200).json(result)
    })
    
}

//Affichage du message séléctionner
exports.getoneMessage = (req, res, next) => {
    
  db.query('SELECT * FROM messages WHERE idMESSAGES= ?',req.params.id, (error, result, field) => {
    if (error) {
      return res.status(400).json({ error})
    }

    return res.status(200).json(result)
  })
  
}

//Effacer un message
exports.deleteMessage = (req, res, next) => {
      db.query(
        'DELETE FROM messages WHERE idMESSAGES= ?',req.body.id, (error, results, fields) => {
          if (error) {
            return res.status(400).json(error)
          }
          return res.status(200).json({ message: 'Votre message a bien été supprimé !' })
        }
      )
    }


    //Modifier un message 
    exports.updateMessage = (req, res, next) => {
      const message = req.body.message
      const id = req.body.id
      console.log(message)
      console.log(id)
        db.query(
          `UPDATE messages SET message='${message}' WHERE idMESSAGES=${id}`, (error, results, fields) => {
            if (error) {
              return res.status(400).json(error)
            }
            return res.status(200).json({ message: 'Votre message a bien été modifié !' })
          }
           
        )

    }


    //Création de la table réponse 
    exports.createresponsetable = (req, res) => {
      let ress = 'CREATE TABLE responses (idRESPONSE int AUTO_INCREMENT,idMESSAGES int NOT NULL,`idUSERS` int NOT NULL, response text NOT NULL,`username` varchar(100) NOT NULL, `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (idRESPONSE), FOREIGN KEY (`idUSERS`) REFERENCES `user` (`id`) ON DELETE CASCADE)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8';
      db.query(ress, (err, result) => {
          if (err) throw err
          console.log(result)
          res.send('la  table reponse a été crée !')
      });
  };


  //Réponse aux messages 
    exports.responseMessage = (req, res, next) => {

      const reponse = {
        idMESSAGES : req.body.idMESSAGES,
        idUSERS : req.body.idUSERS,
        response: req.body.response,
        username : req.body.username
      } 
      console.log(reponse);
      
      db.query(`INSERT INTO responses SET ?`, reponse, (error, result, field) => {
        if (error) {
          return res.status(400).json( error)
        }
        return res.status(201).json({ message: 'Votre réponse a été posté !' })

      })
    }


    //Affichage de la réponse sélectionné
    exports.getResponse = (req, res, next) => {
      //ORDER BY created_at DESC
      db.query('SELECT * FROM responses  WHERE idMESSAGES= ?',req.params.id, (error, result, field) => {
        if (error) {
          return res.status(400).json({ error})
        }
  
        return res.status(200).json(result)
      })

    }

    //Affichage de toutes les réponses 
    exports.getAllResponses = (req, res, next) => {

      db.query('SELECT * FROM responses  ORDER BY created_at DESC', (error, result, field) => {
        if (error) {
          return res.status(400).json( error)
        }
  
        return res.status(200).json(result)
      })

    }

    //Effacer les réponses 
    exports.deleteResponse = (req, res, next) => {
      db.query(
        'DELETE FROM responses WHERE idRESPONSE= ?',req.body.id, (error, results, fields) => {
          if (error) {
            return res.status(400).json(error)
          }
          return res.status(200).json({ message: 'Votre message a bien été supprimé !' })
        }
      )
    }