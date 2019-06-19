<template>
  <div id="app">

    <button @click="changeLang">切換語言{{lang}}</button>
    <h3>{{$t('welcome')}}</h3>
    <h3>{{$t('today')}}{{weekname}}</h3>

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
      timestamp: 0,
      lang: '',
      weekname:''
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
    },
    changeLang() {
       this.lang = localStorage.getItem('locale') || 'zh-TW';
       
       if ( this.lang === 'zh-TW' ) {
          this.lang = 'en-US';
          this.$i18n.locale = this.lang;
       } else {
          this.lang = 'zh-TW';
          this.$i18n.locale = this.lang;
       }
       localStorage.setItem('locale', this.lang);
       let week = this.getWeek();
       this.weekname = week;
    },
    getWeek() {
      let week = new Date().getDay(); 
      let day = 'week.sun';
      switch (week) {
        case 0:
          day = 'week.sun';
          break;
        case 1:
          day = 'week.mon';
          break;
        case 2:
          day = 'week.tues';
          break;
        case 3:
          day = 'week.wed';
          break;
        case 4:
          day = 'week.thur';
          break;
        case 5:
          day = 'week.fri';
          break;
        case 6:
          day = 'week.sat';
          break;
      }
      return this.$i18n.t(day);
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
