<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Clipboard/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Clipboard from '@/components/Clipboard.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Clipboard
  }
}
</script>
