const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit'); // limitation du nombre de requête et la création de compte à partir du même IP
const xss = require("xss");//contre les attaques xss (injections de scripts malveillants)
const html = xss('<script>alert("xss");</script>');
const helmet = require('helmet');
const cors = require('cors');
require('axios');
const dotenv = require("dotenv");
const session = require('express-session');


dotenv.config({path: './.env'}); //masquage des informations sensibles comme les idantifiants et les mots de passes


const app = express();

const dataRoute = require('./Routes/data');
    

app.use((req, res, next) => { // configuration des CORS, pour permettre à différentes adresse localhost de communiquer entre elles
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(session({

    secret: 'secret',
    resave: true,
    saveUninitialized: true
    
  }));

//app.set('view-engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());//body parser pour convertir les objets JSON des requêtes POST
app.use(express.json());
app.use(cors());

app.use('/api/', dataRoute);


module.exports = app;