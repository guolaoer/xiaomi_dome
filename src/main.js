// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'

import axios from 'axios'
Vue.prototype.$axios = axios


import Vant from 'vant';
import 'vant/lib/index.css';
import Vuex from 'vuex'





Vue.use(Vant);
Vue.use(Vuex)





Vue.config.productionTip = false



//防止报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
