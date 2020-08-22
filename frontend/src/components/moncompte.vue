<template>
    <div id="moncompte">
        <h2>Mon espace</h2>
        <div class="layout">
            <h3>Vos Informations personnelles</h3>
            <h4 id="pseudo">Votre pseudo</h4>
            <p id="myname" class="allp"><span>{{data.username}}</span></p>
            <h4>Votre identifiant</h4>
            <p class="allp">{{data.userId}}</p>
            <h4>Votre email</h4>
            <p class="allp">{{data.email}}</p>
            <h4> Votre status</h4>
            <p class="allp" id="last">{{data.status}}</p>
            <button @click= "deleteUser" class="btn btn-danger">Supprimer votre compte</button>
        </div>
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
    top: 5px;
    margin-bottom: 10px;
    @media screen and (max-width: 1024px) {
        font-size: 1.8em;
        bottom:30px;
    }
}

span{
    text-transform: uppercase;
}

.layout{
    border: 1px solid gray;
    border-radius: 5%;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(235, 235, 235);
    margin-bottom: 100px;
}

h3{
    font-size: 1.3em;
    position: relative;
    top: 10px;
    @media screen  and (min-width: 300px) and (max-width:600px) {
        font-size: .9em;
    }
}

p{
    font-size: 1.1em;
    position: relative;
    top: 10px;
    @media screen  and (min-width: 300px) and (max-width:600px) {
        font-size: .7em;
    }
    
}

h4{
    font-size: 1.2em;
    position: relative;
    top: 10px;
    margin-top: 0px;
    margin-bottom: 10px;
    @media screen  and (min-width: 300px) and (max-width:600px) {
        font-size: .8em;
    }
}

#pseudo{
position: relative;
top: 30px;
margin-bottom: 10px;
}

#myname{
position: relative;
top: 30px;
margin-bottom: 40px;
// border: 1px solid black;
// width: 50%;
// border-radius: 10%;
// margin-left: auto;
// margin-right: auto;
}

.allp{
    border: 1px solid black;
    width: 50%;
    border-radius: 10%;
    margin-left: auto;
    margin-right: auto;
    background-color:#000;
    color: #FFF;
}

#last{
    position: relative;
    margin-bottom: 40px;
}
button{
    margin-bottom: 10px;
     @media screen  and (min-width: 300px) and (max-width:600px) {
        font-size: .8em;
    }
}

</style>
