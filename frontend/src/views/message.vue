<template>
  <div class="message">
    <message></message>
  </div>
</template>

<script>


import message from '../components/message.vue'

export default{
  name: 'messages',
  components:{
    'message' : message
  }
}
</script>

<style lang="scss" scoped>
  
</style>
