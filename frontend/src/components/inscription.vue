<template>
  <div id="from">
    <div id="nav">
      <router-link id="routhome" to="/Home">Groupomania</router-link>
      <h1>Inscription</h1>
    </div>
      <form method="POST"  @submit.prevent = "envoi">
        <div class="form-group col-lg-3 col-sm-6">
          <label for="email">Votre email</label>
          <input type="email" class="form-control" name="" value="" id="email" pattern="[a-zâäàéèùêëîïôöçñA-Z0-9.-_]+[@]{1}[a-zA_Z0-9.-_]+[.]{1}[a-z]{2,4}" v-model="email">
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group col-lg-3 col-sm-6">
          <label for="username"> Votre pseudo</label>
          <input type="text" class="form-control" name="" value="" id="username" pattern="[a-zâäàéèùêëîïôöçñA-Z-0-9\s]{3,25}" v-model="username">
          <small id="pseudo" class="form-text text-muted"></small>
        </div>
        <div class="form-group col-lg-3 col-sm-6">
          <label for="password">Mot de passe</label>
          <input type="password" v-on:focus="showdiv" v-on:blur="maskdiv" class="form-control" name="" value="" id="password"  pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})" v-model="password">
        </div>
        <div class="form-group col-lg-3 col-sm-6">
          <label for="password2"> Confirmez le mot de passe</label>
          <input type="password" v-on:blur="verif" class="form-control" name="" value="" id="password2"  pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})" v-model="password2">
          <small id="confirm" class="text-danger"></small>
        </div>
        <button  type="submit" class="btn btn-primary">S'inscrire</button>
        <p>Déjà inscrit ? <a href="/#/connexion">Connectez-vous</a></p>
      </form>
      <div id="showfocus">
        <h4>Votre mot de passe doit contenir:</h4>
        <ul>
          <li>de 8 à 15 caractères</li>
          <li>au moins une lettre minuscule</li>
          <li>au moins une lettre majuscule</li>
          <li>au moins un chiffre</li>
          <li>au moins un de ces caractères spéciaux: $ @ % * + - _ !</li>
          <li>aucun autre caractère possible: pas de & ni de { par exemple)</li>
        </ul>
      </div>
  </div> 
</template>

<script>

import axios from 'axios'

export default {
    name: 'inscription',
    data(){
      return{
        email:"",
        username:"",
        password:"",
        password2:""   
       }
    },
    methods:{
      envoi : function () {

        if (this.email == "" || this.username == "" || this.password == ""  ){
          alert('Veuillez remplir tous les champs avant d\'envoyer le formulaire !')
        }else if (this.password != this.password2){
          alert('Les deux mots de passe ne sont pas identiques !')
        }else {
        axios.post('http://localhost:3000/api/signup', {
          email: this.email,
          username: this.username,
          password: this.password,
        },
        {
          headers: {
            'Content-type': 'application/json',
            //x-www-form-urlencoded
              }
        })
       .then (() => {
         console.log('Inscription réussi !')
         })
       .catch(() => console.log('Echec de l\'inscription')) 
        }
        
        
      },

      showdiv: function() {
        document.getElementById('showfocus').style.display = 'block';
      },

      maskdiv: function() {
        document.getElementById('showfocus').style.display = 'none';
      },
      verif: function() {
        if (this.password != this.password2){
          document.getElementById('confirm').innerHTML = 'Veuillez entrer le même mot de passe'
        } else {
          document.getElementById('confirm').innerHTML = ''
        }
      }
    } 
}
</script>

<style lang="scss" scoped>

h1{
  position: relative;
  bottom: 80px;
  margin-bottom: 40px;
  @media screen and (max-width: 1024px){
      bottom: 0px;
      margin-top: 90px;
     margin-bottom: 100px;

  }
}

#from{
  height: 100%;
  margin-bottom: 200px;
  padding-bottom: 100px;
  margin-left:auto;
  margin-right:auto;
}


#routhome{
  text-decoration: none;
  font-size: 2.4em;
  position: relative;
  bottom: 95px;
  color: #FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      bottom:85px
  }
}

form{
  padding-bottom: 100px;
}

.form-group{
  position: relative;
  bottom: 120px;
  margin-right: auto;
  margin-left: auto;
}

button{
  position: relative;
  bottom: 75px;
  
}

#showfocus{
  display: none;
  border: 1px solid black;
  position: relative;
  bottom: 470px;
  left: 800px;
  width:35%;
  @media screen and (max-width: 1024px) {
  bottom: 170px;
  left: 20px;
  width:85%;
  }
  
}
li{
  list-style-type:  none;
  font-weight: bolder;
}
</style>

