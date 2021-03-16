// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import VueI18n from 'vue-i18n';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import store from './store'

Vue.use(ElementUI);
Vue.use(VueI18n);
Vue.use(Vuex);

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./Vuei18n/language-zh'),
    'en': require('./Vuei18n/language-en')
  }
})

axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }); 

  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store:store,
  components: { App },
  template: '<App/>'
})


