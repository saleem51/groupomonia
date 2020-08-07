<template>
  <div id="from">
    <div id="nav">
      <router-link id="routhome" to="/Home">Groupomania</router-link>
      <h1>Connexion</h1>
    </div>
      <form method="POST"  @submit.prevent = "envoi">
        <div class="form-group col-lg-3 col-sm-6">
          <label for="email">Votre email</label>
          <input type="email" class="form-control" name="" value="" id="email" v-model="email">
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group col-lg-3 col-sm-6">
          <label for="password">Mot de passe</label>
          <input type="password" class="form-control" name="" value="" id="password" v-model="password">
        </div>
        <button  type="submit" class="btn btn-primary">Connexion</button>
      </form>
  </div> 
</template>

<script>

import axios from 'axios'

export default {
    name: 'formconnex',
    data(){
      return{
        email:"",
        password:""   
       }
    },
    methods:{
      envoi : function () {
        
        axios.post('http://localhost:3000/api/signup', {
          email: this.email,
          password: this.password,
        },
        {
          headers: {
            'Content-type': 'application/json',
            //x-www-form-urlencoded
              }
        })
       .then (() => console.log('Inscription réussi !'))
       .catch(() => console.log('Echec de l\'inscription'))  
      }
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

