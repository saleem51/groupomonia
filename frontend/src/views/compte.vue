<template>
  <div class="compte">
    <moncompte></moncompte>
  </div>
</template>

<script>


import moncompte from '../components/moncompte.vue'


export default{
  name: 'App',
  components:{
    
    'moncompte' : moncompte,
   
  }
}
</script>

<style lang="scss" scoped>

</style>
