<template>
    <div id="moncompte">
        <!-- <router-link id="routhome" to="/home">Groupomania</router-link> -->
        <h2>Mon espace</h2>
        <div class="btn-group dropleft">
            <button type="button" class="btn btn-light btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{data.username}}
            </button>
            <div class="dropdown-menu col-sm">
                <p class="dropdown-item ">{{data.username}}</p>
                <div class="dropdown-divider"></div>
                <router-link id="compte" to="/mur">Retour au mur</router-link>
                <div class="dropdown-divider"></div>
                <button  @click= "deco" id="deco">Se déconnecter</button>
            </div>
        </div>
       
            <h3>Vos Informations personnelles</h3>
            <h4>Votre pseudo</h4>
            <p>{{data.username}}</p>
            <h4>Votre identifiant</h4>
            <p>{{data.userId}}</p>
            <h4>Votre email</h4>
           <p>{{data.email}}</p>
            <h4> Votre status</h4>
            <p>{{data.status}}</p>
            <button @click= "deleteUser" class="btn btn-danger">Supprimer votre compte</button>
        

    </div>
    
</template>

<script>

import axios from 'axios'


export default {
    name: 'moncompte',
    data(){

    return {
        data:JSON.parse(this.$session.get('user')),
        userId:""
    }
},
methods:{

    deleteUser : function () {
        let token = this.data.token
        if(confirm('Voulez vous vraiment supprimer le compte ?'),confirm('Cette opération est irreversible !')){
             axios.post(`http://localhost:3000/api/deleteUser`, {
                 userId: this.data.userId
        },
        {
          headers: {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
            //x-www-form-urlencoded
              }
        })
       .then (() => { 
                    this.$session.remove('user')
                    document.getElementById('moncompte').style.display = 'none'
                    alert('votre compte a bien été supprimé !')
                    window.location.href = "http://localhost:8080/#/home"
                    
       })
       .catch(() =>{
         console.log('Votre compte n\'a pas pu être supprimé !')
       }) 
        }
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
    top: 20px;
    margin-bottom: 5px;
    @media screen and (max-width: 1024px) {
        font-size: 1.8em;
        bottom:30px;
    }
}

.espace{
    border: 1px solid #000;
    border-radius: 10%;
    width: 50%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    
}

h3{
    font-size: 1.6em;
}

p{
    font-size: 1.4em
    
}

button{
    margin-bottom: 10px;
}

#mur{
  position: relative;
  right: 560px;
  color: #FFF;
  display: block;
  bottom: 60px;
  
}

#mur:hover{

    background-color: #FFF;
    color: #000;
    text-decoration: none;
}

.btn-group{
  position: relative;
  left:580px;
  bottom: 101px;
}

#compte, #deco{
  position: relative;
  left: 15px;
}


</style>
