<template>
  <div class="home" id="hom">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary" id="navv">
      <img id="icon" alt="logo de l'entreprise" src="../assets/icon-left-font-monochrome-white.png">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown" id="linav">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{myData}}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/mur">{{myData}}</router-link>
              <div class="dropdown-divider"></div>
              <router-link  class="dropdown-item" to="/home">Se déconnecter</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>



export default{
  name: 'headmur',
  data(){

    return {
       myData: JSON.parse('<%- data %>')
    }
},

}



</script>

<style lang="scss" scoped>

#navv{
  height: 70px;
}

#droplink{
  text-align: center;
}

#icon{
 width: 10%;
}
#navbarDropdown{
  @media screen and (min-width: 1024px){
     color: #FFF;
  }
  position: relative;
}
#navv{
  height: 70px;
}

#ulnav{
  display: flex;
}

#linav{
  margin-left: 950px;
}


#toggleButton{
  background-color: lightblue;
  color: #007bff;
}

.dropdown-item:hover{
    background-color:#007bff;
    color: #FFF;
}

@media screen and (min-width: 319px) and (max-width: 1024px){

#icon{
  width: 70px;
  bottom: 10px;
  position: relative;
}
.drop-item{
  background-color: #007bff;
}
#linav{
  color: #000;
  margin-left: 0px;
}

.dropdown-item{
  text-align:center;
}

.navbarDropdown{
  color: #000;
}

}

</style>
