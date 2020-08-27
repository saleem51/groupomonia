<template>
    <div id="mur">
      <h2>Bienvenu <span>{{data.username}} </span>!</h2>
      <div class="getMessag">
        <h3 id="mess">Les messages</h3>
        <div id="messdiv" class="msg"  v-for="mess in msg" :key="mess.idMESSAGES">
          <p class="nameus">{{mess.username}}</p>  
          <p class="text">{{mess.message}}</p>
          <p class="datt">{{moment(mess.created_at).fromNow()}}</p>
          <button  @click= "deletemess(mess.idMESSAGES)"  v-if="data.username == mess.username || data.status =='admin'" type="button" class="btn btn-danger btn-sm sup"><font-awesome-icon icon="trash"/></button> 
          <button @click= "response(mess.idMESSAGES)" class="btn btn-info btn-circle text-uppercase bt" id="reply"><span class="glyphicon glyphicon-share-alt"></span>Repondre</button>
          <a class="btn btn-warning btn-circle text-uppercase bt" data-toggle="collapse" href="#replyOne"><span class="glyphicon glyphicon-comment"></span>Voir les réponses</a>
        </div>
      </div>
      <h5>Écriver votre message</h5>
      <form id="form" method="POST" class="from-group" @submit.prevent= "sendMessage" >
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



let moment = require('moment')
moment.locale('fr');


export default {
    name:'mur',
    data() {

      return {
        data:JSON.parse(this.$localStorage.get('user')),
        message:"",
        msg:"",
        date:"",
        moment: moment,
        idmess:"",
        reponse:""       
        
      }
    },
    mounted (){ 
        axios.get('http://localhost:3000/api/getmessages')
        .then(response => {
          console.log(response.data)
          this.msg = response.data
        
         
        })
        .catch(error => console.log(error))
    },
    methods: {
      
      sendMessage : function(){
        let token = this.data.token
        let idUSERS = this.data.userId
        let userName = this.data.username
        if (this.message === ""){
          alert('Vous n\'avez rien écris vous ne pouvez pas envoyé un message vide !')
        } else{
           axios.post('http://localhost:3000/api/postmessage',
        {
          message: this.message,
          token: this.data.token,
          idUSERS : idUSERS,
          username: userName

        },{
          headers: {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
              }
        })
        .then (() => { 
                    console.log('message envoyé')
                    this.message ==="";
                    alert('votre message a bien été envoyé !')
                    location.reload(true);

                    
       })
       .catch(() =>{
         console.log('le message n\'a pas été envoyé')
       }) 
        }
       
      },

      deco: function(){
            if(window.confirm('Voulez-vous vraiment vous déconnecter ?')){
              this.$session.remove('user');
              window.location.href = "http://localhost:8080/#/home";
            } 
      },

      deletemess: function(delid){
        let token = this.data.token;
        let idmess = delid
       
        if(confirm('êtes vous sûr de vouloir supprimer ce message ?') && confirm('cela effacera définitivement le message')){

          axios.post('http://localhost:3000/api/deletemessage',
          {
       
            id: idmess
           
          },
          {
          headers: {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
              }
        })
        .then (() => { 
                    console.log('message supprimé')
                    alert('votre message a bien été supprimé')
                    location.reload(true);

                    
       })
       .catch(() =>{
         console.log('le message n\'a pas été supprimé !')
       }) 

        }
     
        },

        // response: function() {

          
        //   window.location.href = 
        // }
      

    }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 300px) and (max-width: 992px){
    .btn-group{
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
  }

h2{
  position: relative;
  top: 30px;
}

span{
  text-transform: uppercase;
}

.text, .datt{
  color: #FFF;
}

.msg{
  border: 1px solid lightgray;
  width: 50%;
  line-height: 15px;
  height:120px;
  position: relative;
  top: 70px;
  margin-right: auto;
  background-color:#6902ad;
  border-radius: 5px;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 80px;
  @media screen and (min-width: 320px) and (max-width: 830px){

  }
}

#mess{
  position: relative;
  top: 50px;
}

.nameus{
  font-size: .8em;
  text-transform: uppercase;
  font-weight: bolder;
  margin-top: 10px;
  color: rgb(240, 210, 136)
}

.datt{
  font-size: 0.7em;
  position: relative;
   text-transform: lowercase;
}

.text{
  position: relative;
  font-size: .9em;
  font-weight: 700;
}



h4{
  position: relative;
  top: 30px;
}

h5{
  margin-top: 40px;
  position: relative;
  top: 70px;
  margin-bottom: 50px;
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

#deco{
  text-decoration: none;
}

.btn-circle {
    font-weight: bold;
    font-size: 12px;
    border-radius:10px;
    height:30%;
    margin-right: 10px;
    position: relative;
    margin-bottom: 20px;
    top: 20px;

}
.btn-circle span { padding-right: 0px; }
.embed-responsive { margin-bottom: 10px; }


h5{
  margin-top: 100px;
}

.sup{
  position: absolute;
  left: 570px;
  bottom: 10px;
}

</style>