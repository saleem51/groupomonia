<template>
    <div id="mur">
      <h2>Bienvenu <span>{{data.username}} </span>!</h2>
      <div class="getMessag">
        <h3 id="mess">Les messages</h3>
        <div  id="msg"  v-for="mess in msg" :key="mess">
          <p id="nameus">{{mess.username}}</p>  
          <p id="text">{{mess.message}}</p>
          <p id="datt">{{mess.created_at}}</p>
           <a class="btn btn-info btn-circle text-uppercase" href="#" id="reply"><span class="glyphicon glyphicon-share-alt"></span>Repondre</a>
        <a class="btn btn-warning btn-circle text-uppercase" data-toggle="collapse" href="#replyOne"><span class="glyphicon glyphicon-comment"></span>Commentaires</a>
        </div>
      </div>

      <h5>Écriver votre message</h5>
    
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
//import moment from 'moment'




export default {
    name:'mur',
    data() {

      return {
        data:JSON.parse(this.$session.get('user')),
        message:"",
        msg:"",
        date:""

      }
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

    },
    mounted (){ 
        axios.get('http://localhost:3000/api/getmessages')
        .then(response => {
          console.log(response.data)
          this.msg = response.data
        })
        .catch(error => console.log(error))
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

#msg{
  border: 1px solid lightgray;
  width: 50%;
  position: relative;
  top: 70px;
  margin-right: auto;
  background-color:rgb(241, 241, 241);
  border-radius: 5px;
  margin-left: auto;
  margin-top: 20px;
  margin-bottom: 60px;
  @media screen and (min-width: 320px) and (max-width: 830px){

  }
}

#mess{
  position: relative;
  top: 50px;
}

#nameus{
  font-size: .8em;
  text-transform: uppercase;
  font-weight: bolder;
}

#datt{
  font-size: 0.6em;
  position: relative;
  align-items: flex-end;
}

#text{
  position: relative;
  top: 30px;
  margin-bottom: 40px;
  font-size: .9em
}



h4{
  position: relative;
  top: 30px;
}

h5{
  margin-top: 20px;
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

.media{
  width: 70%;
  position: relative;
  left: 150px;
}



#deco{
  text-decoration: none;
}

.btn-circle {
    font-weight: bold;
    font-size: 12px;
    border-radius:10px;
    height:20%;
    position: relative;
    top: 70px;

}
.btn-circle span { padding-right: 0px; }
.embed-responsive { margin-bottom: 20px; }


</style>
