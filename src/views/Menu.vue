<template>
  <div>
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
      style="background-color: #ffffff; width: 100% !important"
    >
      <div class="menuDesplegar" style=" background-color:#003462;">
        <Sidebar />
      </div>
      <div class="">
        <div class="menuMobil">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">expand</el-radio-button>
            <el-radio-button :label="true">collapse</el-radio-button>
          </el-radio-group>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Navigator One</span>
              </template>
              <el-menu-item-group>
                <span slot="title">Group One</span>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">item four</span>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="contenedor">
          <router-view />
        </div>
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
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // changeLang(){
    //     this.i18n = this.$i18n;
    //     this.i18n.locale = 'ar';
    //     this.$rtl.enableRTL();
    // }
  },
};
</script>

<style lang="scss" scoped>

// @import "../plugins/css/font-awesome.css";
// @import "../plugins/css/responsive.css";

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
.menuDesplegar {
  display: block;
}
.menuMobil {
  max-width: 15%;
  display: none !important;
  position: static;
}
@media (max-width: 606px) {
  .menuDesplegar {
    display: none !important;
    background-color:#003462;
  }
  .menuMobil {
    display: block !important;
  }
  /*
  .position{
    column-count: 1;
    justify-content: center;
  } */

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
