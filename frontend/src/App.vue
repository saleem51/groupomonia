<template>
  <div id="app">
  <footbottom></footbottom>
  <router-view/>
    
  </div>
</template>
<script>

window.location.href = "http://localhost:8080/#/home";

//import headtop from './components/headtop.vue'
import footbottom from './components/footbottom.vue'

export default{
  name: 'App',
  data(){

      return {
        emailsend : this.email
    }
  },
  components: {
    'footbottom': footbottom,
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
