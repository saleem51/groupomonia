<template>
    <div id="nav">
      <router-link id="routhome" to="/Home">Groupomania</router-link>
     
    </div>
</template>

<script>



export default {
    name:'postmur',
}

</script>

<style lang="scss" scoped>

#routhome{
  text-decoration: none;
  font-size: 2.4em;
  font-weight: 500;
  position: relative;
  bottom: 95px;
  color:#FFF!important;
  @media screen and (max-width:1024px){
      font-size: 1.8em;
      bottom: 85px;
  }
}

#deconec{
  position: relative;
  bottom: 80px;
  left: 400px;
  color: #FFF;
}


</style>
