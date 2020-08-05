<template>
    <div id="from">
        <form method="POST"  @submit.prevent = "envoi">
          <div class="form-group col-lg-3 col-sm-6">
            <label for="email">Votre email</label>
            <input type="email" class="form-control" name="" value="" id="email" v-model="email">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group col-lg-3 col-sm-6">
            <label for="lastname">Nom</label>
            <input type="text" class="form-control" name="" value="" id="lastname" v-model="lastname">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group col-lg-3 col-sm-6">
            <label for="firstname">Prénom</label>
            <input type="text" class="form-control" name="" value="" id="firstname" v-model="firstname">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group col-lg-3 col-sm-6">
            <label for="password">votre mot de passe</label>
            <input type="password" class="form-control" name="" value="" id="password" v-model="password">
          </div>
          <button  type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div> 
</template>

<script>

import axios from 'axios'

export default {
    name: 'formulaire',
    data(){
      return{
        email:"",
        lastname:"",
        firstname:"",
        password:""   
       }
    },
    methods:{
      envoi : function () {
        
        axios.post('http://localhost:3000/api/signup', {
          email: this.email,
          lastname: this.lastname,
          firstname: this.firstname,
          password: this.password,
          show: false
          
        },
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded',
              }
        })
       .then (() => console.log('envoyé'))
       .catch(() => console.log('pourquoi'))  
      }
    } 
}
</script>

<style lang="scss">

</style>

