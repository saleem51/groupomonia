<template>
<!--Header-->
  <div class="home" id="hom">
   <nav class="navbar navbar-expand-lg navbar-light" id="navv">
     <img id="icon" alt="logo de l'entreprise" src="../assets/icon-left-font-monochrome-white.svg">
      <router-link id="routhome" to="/home">Groupomania</router-link>
      <buttondeco></buttondeco>
   </nav>
  </div>
</template>

<script>

import buttondeco from './buttondeco.vue'

export default{
  name: 'headtop',
  components:{
    'buttondeco' : buttondeco
  }

}


</script>

<style lang="scss" scoped>

#routhome{
  text-decoration: none;
  font-size: 2.4em;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  right: 60px;
  text-align: center;
  font-weight: 500;
  color: #FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      right: 20px;
  }
}


#navv{
  height: 70px;
  background-color: #752EA3;
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
