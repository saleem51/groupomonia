<template>
    <div id="mur">
      <!-- <router-link id="routhome" to="/home">Groupomania</router-link> -->
      <h3>Écriver votre message</h3>
      <div class="btn-group dropleft">
        <button type="button" class="btn btn-light btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          saleem51
        </button>
        <div class="dropdown-menu col-sm">
          <p class="dropdown-item ">saleem51</p>
          <div class="dropdown-divider"></div>
          <router-link id="compte" to="/compte">Mon espace</router-link>
        </div>
      </div>
     
      <form method="POST" class="from-group" @submit.prevent= "sendMessage" >
        <div class="form-group">
          <label for="message">
            <textarea  class="form-control" name="message" id="message" cols="50" rows="5" v-model= "message"></textarea>
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

h3{
  margin-top: 20px;
}

/*#routhome{
  text-decoration: none;
  font-size: 2.4em;
  position: relative;
  bottom: 110px;
  font-weight: 500;
  color: #FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      bottom: 85px;
  }
}*/


/*#routhome{
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
}*/

#submit{

margin-bottom: 100px;

}

.media{
  width: 70%;
  position: relative;
  left: 150px;
}

.btn-group{
  position: relative;
  left:580px;
  bottom: 110px;
  @media screen and (min-width: 320px) and (max-width: 992px){
    .btn-group{
      left: 0;
      bottom: 0;
    }
  }
}

#compte{
  position: relative;
  left: 15px;
}


</style>
