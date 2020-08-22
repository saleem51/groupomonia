<template>
  <div class="home">
    <accueil></accueil>
    <footbottom></footbottom>
  </div>
</template>

<script>


import accueil from '../components/accueil.vue'
import footbottom from '../components/footbottom.vue'

export default{
  name: 'App',
  components:{
    'accueil' : accueil,
    'footbottom' : footbottom
    
  }
}
</script>

<style lang="scss" scoped>

</style>

