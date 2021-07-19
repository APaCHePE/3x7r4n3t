import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js';
import api from './plugins/axios.js';
import './plugins/bootstrap-vue.js';
import '@/assets/style/element.scss';
import '@/assets/style/stilo-responsive.scss';
import '@/assets/style/stilo-responsive.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  api,
  render: (h) => h(App),
}).$mount("#app");
