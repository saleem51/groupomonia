<template>
    <div id="mur">
      <h2>Bienvenu {{data.username}} !</h2>
      <h5>Écriver votre message</h5>
      <div class="btn-group dropleft">
        <button type="button" class="btn btn-light btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         {{data.username}} 
        </button>
        <div class="dropdown-menu col-sm">
          <p class="dropdown-item ">{{data.username}}</p>
          <div class="dropdown-divider"></div>
          <router-link id="compte" to="/compte">Mon espace</router-link>
          <div class="dropdown-divider"></div>
          <button  @click= "deco" id="deco" >Se déconnecter</button>
        </div>
      </div>
     
      <form method="POST" class="from-group" @submit.prevent= "sendMessage" >
        <div class="form-group">
          <label for="message">
            <textarea  class="form-control" name="message" id="message" cols="50" rows="5" v-model= "message"></textarea>
          </label>
        </div>
        <button  type="submit" id="envoi" class="btn btn-primary">Envoyer</button>
      </form> 
    </div> 

</template>

<script>



import axios from 'axios'

export default {
    name:'mur',
    data() {

      return {
        data:JSON.parse(this.$session.get('user')),
        message:""
      }
    },
    methods: {

      sendMessage : function(){
        //let token = this.data.token
        axios.post('http://localhost:3000/api/message/postmessage',
        {
          message: this.message,
          //token: this.data.token
        },{
          headers: {
            'Content-type': 'application/json',
            //'Authorization' : `Bearer ${token}`
              }
        })
        .then (() => { 
                    console.log('message envoyé')
                    alert('votre message a bien été envoyé !')
                    
       })
       .catch(() =>{
         console.log('le message n\'a pas été envoyé')
       }) 
      },

      deco: function(){
            if(window.confirm('Voulez-vous vraiment vous déconnecter ?')){
              this.$session.remove('user');
              window.location.href = "http://localhost:8080/#/home";
            } 
      }

    }

}
</script>

<style lang="scss" scoped>

h2{
  position: relative;
  top: 30px;
}

h5{
  margin-top: 20px;
  position: relative;
  top: 70px;
}

#message{
  position: relative;
  bottom: 100px;
}

#envoi{
  position: relative;
  top: 30px;
}

.form-group{
  position: relative;
  top: 150px;
}

.media{
  width: 70%;
  position: relative;
  left: 150px;
}

.btn-group{
  position: relative;
  left:580px;
  bottom: 148px;
  @media screen and (min-width: 320px) and (max-width: 992px){
    .btn-group{
      left: 0;
      bottom: 0;
    }
  }
}

#compte, #deco{
  position: relative;
  left: 15px;
}

#deco{
  text-decoration: none;
}


</style>
