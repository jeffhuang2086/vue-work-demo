// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/style/index.less'

import {Button, Select, Menu, MenuItem} from 'element-ui';

Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(MenuItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
