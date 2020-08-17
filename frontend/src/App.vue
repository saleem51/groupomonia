<template>
  <div id="app">
    <headtop></headtop>
    <espace></espace>
    <footbottom></footbottom>
    <router-view/>
  </div>
</template>
<script>

//window.location.href = "http://localhost:8080/#/home";

import headtop from './components/headtop.vue'
import espace from './components/espace.vue'
import footbottom from './components/footbottom.vue'

export default{
  name: 'App',
  data(){

      return {
        
    }
  },
  components: {
    'headtop' : headtop,
    'espace'    : espace,
    'footbottom': footbottom
  }

}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
</style>
