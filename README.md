# groupomania.github.io

## Créez un réseau social interne d’entreprise 


### Technologies utilisées
* Back
    * NodeJS
    * Express
    * mySql
* Front
    * Vue.js 
    * Sass

#########################################

Première étape cloner le repository : https://github.com/groupomania/groupomania.github.io.git
 

Ensuite rendez-vous dans le dossier Groupomania à l'aide du terminal ou de l'invite de commande :

cd Groupomania


#########################################

* Backend: 

Connectez vous à mysql avec vos identifiants et mot de passe habituels, une fois connecté il faut créer la base de donnée Groupomania :

commande sql : CREATE DATABASE Groupomnia;

ensuite il faut créer une table user :

commande sql : 

CREATE TABLE user  ( id int NOT NULL AUTO_INCREMENT, 
email varchar(100) NOT NULL, 
username  varchar(100) NOT NULL,
password varchar(250) NOT NULL, 
isAdmin tinyint NOT NULL DEFAULT 0 ,
PRIMARY KEY (id),UNIQUE KEY id_UNIQUE (id),
UNIQUE KEY email_UNIQUE (email),
UNIQUE KEY username_UNIQUE (username))ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

#########################################

ensuite il faut créer une table message :

commande sql : 

CREATE TABLE message (idMESSAGES int AUTO_INCREMENT,
`idUSERS` int NOT NULL,
 message text NOT NULL,
`username` varchar(100) NOT NULL,
`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, 
 PRIMARY KEY (idMESSAGES),
 FOREIGN KEY (`idUSERS`) REFERENCES `user` (`id`) ON DELETE CASCADE)ENGINE=InnoDB AUTO_INCREMENT=124 DEFAULT CHARSET=utf8;
 
 #########################################
 
 
 Une fois que la base de donnée Groupomania a été crée et que les tables user et message ont été crée, 

dans le terminal (ou l'invite de commande )

lancer la commande : cd backend

Puis lancer la commande suivante :
     
    1)npm install 
    
    une fois l'installation terminée 
    
    créer un fichier .env dans le dossier backend et le remplir de la manière suivante (ne pas ajouter de virgules ou de points virgule nulle part).
    
 
   NAME = 'votre identifiant mysql'

   PASS = 'votre mot de passe mysql'

   HOST = 'localhost'

  TOKEN = 'créer votre propre token  '


une fois toute ces étapes réalisés lancer la commande :
    
    2)nodemon server (ou npx nodemon)
    
    
#########################################


* Frontend:

 se rendre dans le dossier frontend : cd frontend

et lancer la commande suivante :

    npm install
     
 une fois l'installation terminé lancer la commande :    
     
    npm run serve

Par défaut le serveur client est accessible en local via le port 8080: http://localhost:8080/

Bonne navigation !
