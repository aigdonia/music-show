import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

Vue.config.productionTip = false

Vue.use(VueSimpleMarkdown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
