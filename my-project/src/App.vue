<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { getFormatDates, getFormatSec, getSecByTimestamp } from '@/libs/moment'

export default {
  name: 'App',
  data() {
    return {
      timestamp: 0
    }
  },
  mounted() {
    this.getNow();
    
  },
  methods: {
    getNow() {
      const dateTime = Date.now();
      this.timestamp = Math.floor(dateTime / 1000 )
      console.log( getFormatDates() )
      console.log( getFormatSec() )
      console.log( this.timestamp, getSecByTimestamp(this.timestamp) )
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
