<template>
    <div id="from">
        <form>
          <div class="form-group col-lg-3 col-sm-6">
            <label for="email">Votre email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group col-lg-3 col-sm-6">
            <label for="lastname">Nom</label>
            <input type="text" class="form-control" id="lastname" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group col-lg-3 col-sm-6">
            <label for="firstname">Prénom</label>
            <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp">
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
          <div class="form-group col-lg-3 col-sm-6">
            <label for="password">votre mot de passe</label>
            <input type="password" class="form-control" id="password">
          </div>
          <button  v-on:click = "envoi" type="submit" class="btn btn-primary">Submit</button>
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
        nom:"",
        prenom:""
      }
    },
    methods:{
      envoi : function () {
        
        axios.post('http://localhost:3000/api/signup')
        .then()
      }
    }

}
</script>

<style lang="scss">

</style>

