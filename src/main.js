import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import vueUpload from '@websanova/vue-upload'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(vueUpload)


new Vue({
  el: '#app',
  render: h => h(App)
})
