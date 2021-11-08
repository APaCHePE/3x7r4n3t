import Vue from "vue";
import VueSweetalert2 from 'vue-sweetalert2';
import "../assets/style/responsive.scss";
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#aaa',
  denyButtonColor: '#dd6b55'
};

Vue.use(VueSweetalert2, options);