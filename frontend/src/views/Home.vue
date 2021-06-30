<template>
  <div class="home">
    <Accueil></Accueil>>
    <buttonadmin></buttonadmin>
    <buttondeco></buttondeco>
    <footbottom></footbottom>
  </div>
</template>

<script>


import Accueil from '../components/Accueil.vue'
import buttonadmin from '../components/buttonadmin.vue'
import buttondeco from '../components/buttondeco.vue'
import footbottom from '../components/footbottom.vue'

export default{
  name: 'Home',

  components:{
    'Accueil' : Accueil,
    'buttonadmin': buttonadmin,
    'buttondeco' : buttondeco,
    'footbottom' : footbottom
    
  }
}
</script>

<style lang="scss" scoped>

</style>

