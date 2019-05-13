import Vue from 'vue'
import App from './App.vue'
import MyApp from './components/MyApp'

Vue.config.productionTip = false

Vue.component('MyComponentApp', MyApp );

new Vue({
  render: h => h(App),
}).$mount('#app')



