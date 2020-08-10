<template>
  <div class="connexion">
    <headtop></headtop>
    <formconnex></formconnex>
  </div>
</template>

<script>

import headtop from '../components/headtop.vue'
import formconnex from '../components/formconnex.vue'

export default{
  name: 'App',
  components:{
    'headtop' : headtop,
    'formconnex' : formconnex
  }
}
</script>

<style lang="scss" scoped>
  
</style>
