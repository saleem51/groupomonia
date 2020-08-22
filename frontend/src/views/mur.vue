<template>
    <div class="mur">
        <mur></mur>
        <footbottom></footbottom>
    </div>
</template>

<script>

import mur from '../components/mur'
import footbottom from '../components/footbottom.vue'

export default {
    name: 'App',
  components:{
    'mur' : mur,
    'footbottom' : footbottom
  }
}


</script>

<style lang="scss" scoped>


</style>
