import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js';
import api from './plugins/axios.js';
import './plugins/bootstrap-vue.js';
import '@/assets/style/element.scss';
import '@/assets/style/stylos-personalizados.scss';
import '@/assets/style/stilo-responsive.scss';
// main.js 
import VueSweetalert2 from 'vue-sweetalert2';

// Si no necesita los estilos, no conecte 
// import  'sweetalert2/dist/sweetalert2.min.css' ;

Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.directive('uppercase', {
  update(el) {
    el.value = el.value.toUpperCase()
  },
})
Vue.directive('numeric', {
  bind(el) {
    el.addEventListener('keydown', (e) => {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        // let it happen, don't do anything
        return
      }
      // Ensure that it is a number and stop the keypress
      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault()
      }
    })
  }
})
new Vue({
  router,
  store,
  axios,
  api,
  render: (h) => h(App),
}).$mount("#app");
