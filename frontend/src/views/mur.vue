<template>
    <div class="mur">
        <headmur></headmur>
        <postmur></postmur>
    </div>
</template>

<script>

import postmur from '../components/postmur'
import headmur from '../components/headmur'

export default {
    name: 'App',
  components:{
    'postmur' : postmur,
    'headmur' : headmur
  }
}


</script>

<style lang="scss" scoped>


</style>
