import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './../node_modules/materialize-css/dist/js/materialize.min.js'
import './../node_modules/materialize-css/dist/css/materialize.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee,faIdCard,faUtensils, faNewspaper,faCode,faHome,faGamepad  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faIdCard,faUtensils,faNewspaper,faCode,faHome,faGamepad)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
