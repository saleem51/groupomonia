<template>
  <div class="home">
    <headtop></headtop>
    <Accueil></Accueil>
  </div>
</template>

<script>

import headtop from '../components/headtop.vue'
import Accueil from '../components/Accueil.vue'

export default{
  name: 'App',
  components:{
    'Accueil' : Accueil,
    'headtop' : headtop
  }
}
</script>

<style lang="scss" scoped>

</style>

