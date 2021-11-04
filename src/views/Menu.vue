<template>
  <div class="menu">
    <div class="menu-web" >
      <Sidebar />
    </div>
    <div class="menu-tablet" style="background-color: #003462">
      <SidebarTablet />
    </div>
    <div class="menu-mobil" style="background-color: #003462">
      <SidebarMobil />
    </div>
    <div class="menuMobil">
      
    </div>
    <div class="contenido-dinamico">
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebars/Sidebar.vue";
import SidebarTablet from "./Sidebars/SidebarTablet.vue";
import SidebarMobil from "./Sidebars/SidebarMobil.vue";
import "../assets/style/menu.scss";
export default {
  components: {
    Sidebar,
    SidebarTablet,
    SidebarMobil,
  },
  data() {
    return {
      activeIndex2: "1",
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
  },
};
</script>

<style lang="scss" scoped>

</style>
