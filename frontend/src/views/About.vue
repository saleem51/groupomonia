<template>
  <div class="about">
    <headtop></headtop>
    <formulaire></formulaire>
  </div>
</template>

<script>

import headtop from '../components/headtop.vue'
import formulaire from '../components/formulaire.vue'

export default{
  name: 'App',
  components:{
    'headtop' : headtop,
    'formulaire' : formulaire
  }
}
</script>

<style lang="scss" scoped>
  
</style>
