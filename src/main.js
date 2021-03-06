import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store/store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.filter('uppercase', function(value){
  return value.toUpperCase()
})

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: "GOOGLE MAP API KEY"
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
