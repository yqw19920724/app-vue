// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Button, ActionSheet, Toast } from 'vant'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(ActionSheet)
Vue.use(Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
