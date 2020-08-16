<template>
    <div id="nav">
      <router-link id="routhome" to="/Home">Groupomania</router-link>
      <h3>Poster un message</h3>
      <form method="POST" class="from-group" @submit.prevent= "sendMessage" >
        <div class="form-group">
          <label for="titre">
            <textarea class="form-control" name="title" id="title" cols="100" rows="1" placeholder="titre du message" v-model= "title"></textarea>
          </label>
          <label for="message">
            <textarea  class="form-control" name="message" id="message" cols="100" rows="10" v-model= "message"></textarea>
          </label>
        </div>
        <button  type="submit" id="submit" class="btn btn-primary">Envoyer</button>
      </form>
    </div> 
</template>

<script>

import axios from 'axios'

export default {
    name:'mur',
    data() {

      return {
        
        message:""
      }
    },
    methods: {
      sendMessage : function(){
        axios.post('http://localhost:3000/api/message/postmessage',
        {
          message: this.message
        },{
          headers: {
            'Content-type': 'application/json',
            //x-www-form-urlencoded
              }
        })
        .then (() => { 
                    console.log('message envoyé')
                    alert('votre message a bien été envoyé !')
                    
       })
       .catch(() =>{
         console.log('le message n\'a pas été envoyé')
       }) 
      }

    }
}
</script>

<style lang="scss" scoped>

#routhome{
  text-decoration: none;
  font-size: 2.4em;
  font-weight: 500;
  position: relative;
  bottom: 140px;
  display: inline;
  color:#FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      bottom: 85px;
  }
}

#deconec{
  position: relative;
  bottom: 80px;
  left: 400px;
  color: #FFF;
}

#title{
  position: relative;
  top: 15px;
}

#submit{

margin-bottom: 100px;

}
  

</style>
