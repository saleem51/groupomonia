<template>
  <div id="app">
    <headtop></headtop>
    <espace></espace>
    <router-view/>
  </div>
</template>
<script>

//window.location.href = "http://localhost:8080/#/home";

import headtop from './components/headtop.vue'
import espace from './components/espace.vue'


export default{
  name: 'App',
  data(){

      return {
        idresponse:""
    }
  },
  components: {
    'headtop' : headtop,
    'espace'    : espace,
  }

}
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0e2c4b;
}

#nav {
  padding: 30px;
}
</style>
