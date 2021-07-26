<template>
  <div >
    <!-- <div > -->
    <!-- <b-button
      v-b-toggle.sidebar-1
      variant="background-color: #ffffff;box-shadow: none"
      class="buttonMenu"
    >
      <a id="left-sidebar-hide" href="#">
        <img
          src="../plugins/img/icons/ico-navbar.png"
          style="width: 25px; height: 25px"
        />
      </a>
    </b-button> -->
    
    <!-- </div> -->
    <div
      class="
        ball-scale-multiple
        top-bar-fixed
        left-sidebar-fixed
        page-footer
        boxed-layout
      "
      style=" background-color: #ffffff; width: 100% !important;"
    >


<Sidebar />

      <div class="container container-full">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
  methods: {
    // changeLang(){
    //     this.i18n = this.$i18n;
    //     this.i18n.locale = 'ar';
    //     this.$rtl.enableRTL();
    // }
  },
};
</script>

<style>
@import "../plugins/css/bootstrap/bootstrap.css";
@import "../plugins/css/bootstrap/bootstrap-select.min.css";
@import "../plugins/css/bootstrap/bootstrap-datetimepicker.min.css";
@import "../plugins/css/bootstrap/bootstrap-multiselect.css";
@import "../plugins/css/style.css";
@import "../plugins/css/main.css";
@import "../plugins/css/font-awesome.css";
@import "../plugins/css/responsive.css";

.contenedor-opciones {
  position: absolute;
}
.options {
  display: flex;
}
.navPrincipal {
  background-color: #ffffff;
  box-shadow: 3px 2px 10px #c7c7c7;
}
.buttonMenu {
  float: left;
  box-shadow: none;
}
.positionRight {
  margin-right: 0px;
  display: flex;
}
</style>