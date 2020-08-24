<template>
    <div class="mur">
        <res></res>
        <footbottom></footbottom>
    </div>
</template>

<script>

import res from '../components/res.vue'
import footbottom from '../components/footbottom.vue'

export default {
    name: 'App',
  components:{
    'res' : res,
    'footbottom' : footbottom
  }
}


</script>

<style lang="scss" scoped>


</style>
