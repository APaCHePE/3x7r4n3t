import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js';
import api from './plugins/axios.js';
import './plugins/bootstrap-vue.js';
import '@/assets/style/element.scss';
import '@/assets/style/stilo-responsive.scss';

// axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  api,
  render: (h) => h(App),
}).$mount("#app");
