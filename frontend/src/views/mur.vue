<template>
    <div class="mur">
        <mur></mur>
        <buttonadmin></buttonadmin>
        <buttondeco></buttondeco>
        <footbottom></footbottom>
    </div>
</template>

<script>


import buttondeco from '../components/buttondeco.vue'
import mur from '../components/mur'
import buttonadmin from '../components/buttonadmin.vue'
import footbottom from '../components/footbottom.vue'


export default {
    name: 'murs',
  components:{
    'mur' : mur,
    'buttondeco' : buttondeco,
    'buttonadmin': buttonadmin,
    'footbottom' : footbottom
  }
}
</script>

<style>


</style>
