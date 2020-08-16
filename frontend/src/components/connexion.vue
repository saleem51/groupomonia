<template>
  <div id="from">
    <div id="nav">
      <router-link id="routhome" to="/Home">Groupomania</router-link>
      <h1>Connexion</h1>
    </div>
      <form method="POST" id="formulaire" @submit.prevent = "envoi">
        <div class="form-group col-lg-3 col-sm-6">
          <label for="pseudo">Votre pseudo</label>
          <input type="text" class="form-control" name="" value="" id="pseudo" pattern="[a-zâäàéèùêëîïôöçñA-Z-0-9\s]{3,25}" v-model="username">
          <small id="pseudo" class="form-text text-muted"></small>
        </div>
        <div class="form-group col-lg-3 col-sm-6">
          <label for="password">Mot de passe</label>
          <input type="password"  class="form-control" name="" value="" id="password" pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})" v-model="password">
          <small id="smallpass" class="text-danger"></small>
        </div>
        <button type="submit" class="btn btn-primary">Connexion</button>
        <p>Pas encore inscrit ? <a href="/#/about">Inscrivez-vous</a></p>
      </form>
  </div> 
</template>

<script>

import axios from 'axios'


export default {
    name: 'connexion',
    data(){
      return{
        username:"",
        password:"",
        
       }
    },
    methods:{
      envoi : function () {

        if(this.username == "" || this.password == ""){
          alert("Veuillez entrer votre email et votre mot de passe pour vous connecter")
        } else {
          
          axios.post('http://localhost:3000/api/login', {
          username: this.username,
          password: this.password,
        },
        {
          headers: {
            'Content-type': 'application/json',
            //x-www-form-urlencoded
              }
        })
       .then ( () => { 
                    
                    console.log('Connexion réussi !')
                   
                    window.location.href = "http://localhost:8080/#/mur"
                    localStorage.setItem('username', this.username)
                    
       })
       .catch(() =>{
         console.log('la connexion a échouée')
         document.querySelector('#smallpass').innerHTML = 'pseudo ou mot de  passe incorrect'
       }) 

        }

      },
      
      
    } 
}
</script>

<style  lang="scss" scoped>

h1{
  position: relative;
  bottom: 80px;
  margin-bottom: 50px;
  @media screen and (max-width: 1024px){
      bottom: 0px;
      margin-top: 80px;
  }
}

#from{
  height: 100%;
  margin-bottom: 200px;
  padding-bottom: 100px;
}

#routhome{
  text-decoration: none;
  font-size: 2.4em;
  position: relative;
  bottom: 95px;
  color: #FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      bottom: 85px;
  }
}

form{
  padding-bottom: 100px;
}

.form-group{
  position: relative;
  bottom: 80px;
  margin-right: auto;
  margin-left: auto;
}

button{
  position: relative;
  bottom: 80px;
}

</style>

