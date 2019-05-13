import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MyApp from './components/MyApp'

Vue.config.productionTip = false

Vue.component('MyComponentApp', MyApp );

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')



