<template>
  <div class="home">
    <img id="icon" alt="Vuelogo" src="../assets/icon-above-font.png">
    <HelloWorld msg="Le réseau fait pour vous "/>


    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>

<style lang="scss">

#icon{
  width: 200px;
}


</style>
