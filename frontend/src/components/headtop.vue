<template>
  <div class="home" id="hom">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary" id="navv">
      <img id="icon" alt="logo de l'entreprise" src="../assets/icon-left-font-monochrome-white.png">
    </nav>
  </div>
</template>

<script>

export default{
  name: 'headtop'

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
