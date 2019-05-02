<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ $t("hello") }}</p>
    <p>{{ 'hello' | lang }}</p>

    <span v-text="$t('app-name')"></span>
    <h1>{{ count }}</h1>
    <button @click="addCount">+</button>
    <router-view/>
  </div>
</template>

<script>
import { getFormatDates, getFormatSec, getSecByTimestamp } from '@/libs/moment'
import { getLodash } from '@/libs/lodash'
import { tw } from '@/i18n/my-TW'

export default {
  name: 'App',
  data() {
    return {
      timestamp: 0
    }
  },
  created() {
    console.log('created', this.$store.state.count);
  },
  mounted() {
    this.getNow();
    //console.log( 'getLodash', getLodash('data_mounted') )
  },
  filters: {
    lang(val) {
      return tw(val)
    }
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
    count() {
      console.log('computed', this.$store.state.count);
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
