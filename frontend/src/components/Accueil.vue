<template>
<div class="Home">
    <!-- <router-link id="routhome" to="/home">Groupomania</router-link> -->
    <div class="img">
         <img src="../assets/reseaud.jpg" alt="Photo de la page d'accueil">
    </div>
      
</div>
    
</template>

<script>



export default {
    name: 'Accueil',
}

</script>


<style lang="scss" scoped>

/*#routhome{
  text-decoration: none;
  font-size: 2.4em;
  position: relative;
  display: inline;
  bottom: 80px;
  font-weight: 500;
  color: #FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      bottom: 70px;
  }
}*/

.Home{
    display: inline;
}

img{
    width: 700px;
    @media screen and (max-width: 1024px){
        width: 300px;
    }
}
    
</style>
