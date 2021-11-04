<template>
  <div class="sidebar" style="box-sizing: content-box">
    <el-menu
      default-active="1"
      :background-color="'rgb(' + blue_custom + ')'"
      text-color="#fff"
      :active-text-color="'rgb(' + secondary_custom + ')'"
      @open="handleOpen"
      @close="handleClose"
    >
      <template ><img class="el-menu-imagen" src="../../plugins/img/nuevo.png" width="250" height="75px" /></template>

      <router-link :to="'/menu'">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">Inicio</span>
        </el-menu-item></router-link
      >

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span style="font-size: 13px">Administración</span>
        </template>
        <el-menu-item-group @click="enviarSelect(ruta)" title="Group One">
          <router-link :to="'/micuenta'">
            <el-menu-item index="2-1">
              <span>Cuenta</span>
            </el-menu-item></router-link
          >
          <router-link :to="'/miscontactos'">
            <el-menu-item index="2-2">
              <span>Contactos</span>
            </el-menu-item></router-link
          >
          <router-link :to="'/misusuarios'"
            ><el-menu-item index="2-3">
              <span>Usuarios</span>
            </el-menu-item></router-link
          >
        </el-menu-item-group>
      </el-submenu>

      <!-- <el-submenu index="3" >
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span style="">Ordenes</span>
          </template>
          <el-menu-item-group>
            <router-link :to="'/ordenes'"><el-menu-item index="1-1">
              <span>Listado</span>
            </el-menu-item></router-link>
             <router-link :to="'/nueva-orden'"><el-menu-item index="1-2">
             <span>Nuevo</span>
            </el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu> -->

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>Facturas</span>
        </template>
        <el-menu-item-group>
          <router-link :to="'/facturas'"
            ><el-menu-item index="4-1">
              <span>Listado</span>
            </el-menu-item></router-link
          >
          <router-link :to="'/neo-digital'"
            ><el-menu-item index="4-2">
              <span>Nueva</span>
            </el-menu-item></router-link
          >
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>Recibo por Honorarios</span>
        </template>
        <el-menu-item-group>
          <router-link :to="'/facturas'"
            ><el-menu-item index="5-1">
              <span>Listado</span>
            </el-menu-item></router-link
          >
          <router-link :to="'/neo-rxh'"
            ><el-menu-item index="5-2">
              <span>Nuevo</span>
            </el-menu-item></router-link
          >
        </el-menu-item-group>
      </el-submenu>

      <!-- <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span style=" ">Archivo Banco</span>
          </template>
          <el-menu-item-group>
             <router-link :to="'archivo-banco'"><el-menu-item index="6-1">
             <span>Bandeja</span>
            </el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu> -->

      <router-link :to="'/'"
        ><el-menu-item index="6">
          <i class="el-icon-circle-close"></i>
          <span slot="title">Cerrar Sesión</span>
        </el-menu-item></router-link
      >
    </el-menu>
  </div>
</template>

<script>
// import nav from "@/router/opciones-menu.js";
import "../../assets/style/sidebar.scss";
export default {
  name: "sidebar",
  data() {
    return {
      isCollapse: true,
      cuenta: "/micuenta",
      variant: "dark",
      blue_custom: "0,54,95",
      secondary_custom: "81,193, 225",
      variants: [
        "transparent",
        "white",
        "light",
        "dark",
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
      ],
    };
  },
  mounted() {
    console.log(this.itemsNav);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    enviarSelect(param) {
      this.$emit("cambio-component", param);
      console.log(param);
    },
  },
};
</script>

