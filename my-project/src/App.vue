<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ $t("hello") }}</p>
    <span v-text="$t('app-name')"></span>
    <h1>{{ count }}</h1>
    <button @click="addCount">+</button>
    <router-view/>
  </div>
</template>

<script>
import { getFormatDates, getFormatSec, getSecByTimestamp } from '@/libs/moment'
import { getLodash } from '@/libs/lodash'

export default {
  name: 'App',
  data() {
    return {
      timestamp: 0
    }
  },
  mounted() {
    this.getNow();
    //console.log( 'getLodash', getLodash('data_mounted') )
  },
  methods: {
    getNow() {
      const dateTime = Date.now();
      this.timestamp = Math.floor(dateTime / 1000 )
      //console.log( getFormatDates() )
      //console.log( getFormatSec() )
      //console.log( this.timestamp, getSecByTimestamp(this.timestamp) )
    },
    addCount() {
      this.$store.commit('addCount');  
    }
  },
  computed: {
    count : function() {
      return this.$store.state.count;
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
