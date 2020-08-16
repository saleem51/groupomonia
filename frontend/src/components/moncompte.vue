<template>
    <div class="moncompte">
        <router-link id="routhome" to="/Home">Groupomania</router-link>
        <!--<h2>Votre compte</h2>
         <div class="espace">
            <h3>Vos Informations personnelles</h3>
            <h4>Votre pseudo</h4>
            <p>{{username}}</p>
            <h4>Votre identifiant</h4>
            <p></p>
            <h4>Votre email</h4>
           <p>{{email}}</p>
            <h4> Votre status</h4>
            <p></p>
            <button  class="btn btn-danger"> Supprimer votre compte</button>
        </div> -->

    </div>
    
</template>

<script>

import axios from 'axios'


export default {
    name: 'moncompte',
    data(){

    return {
    }
},
methods:{

    deleteUser : function () {
        if(confirm('Voulez vous vraiment supprimer le compte ?'),confirm('Cette opération est irreversible !')){
             axios.post('http://localhost:3000/api/deleteUser', {
        
        },
        {
          headers: {
            'Content-type': 'application/json',
            //x-www-form-urlencoded
              }
        })
       .then (() => { 
                    window.location.href = "http://localhost:8080/#/home"
                    alert('votre compte a bien été supprimé !')
                    
       })
       .catch(() =>{
         console.log('Votre compte n\'a pas pu être supprimé !')
       }) 
        }
    }
}


}

</script>

<style lang="scss" scoped>

#routhome{
  text-decoration: none;
  font-size: 2.4em;
  position: relative;
  bottom: 65px;
  font-weight: 500;
  color: #FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      bottom: 85px;
  }
}


/*h1{
    position: relative;
    bottom: 60px;
    color: #FFF;
    display: inline;
    @media screen and (max-width: 1024px) {
        font-size: 1.8em;
        bottom:50px;

    }
}*/

/*h2{
    position: relative;
    bottom: 30px;
    @media screen and (max-width: 1024px) {
        font-size: 1.8em;
        bottom:30px;
    }
}*/

/*.espace{
    border: 1px solid #000;
    border-radius: 10%;
    width: 50%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    
}

h3, h4, button {
    margin-bottom: 5px;
    margin-top: 5px;
}

p{
    font-size: 1.4em
    
}

button{
    margin-bottom: 10px;
}*/

</style>
