<template>
  <b-sidebar
    id="sidebar-1"
    shadow
    class="mt-3"
    visible
    noCloseOnRouteChange
    noHeader
    :backdrop-variant="variant"
  >
    <div class="left-sidebar-wrapper">
      <div>
        <div class="scroll-area">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                ><img
                  class=""
                  src="../plugins/img/logo.png"
                  width="100"
                  height="30px"
              /></a>
            </div>
          </div>
        <div class="scroll-area" >
          <ul
            class="sidebar-nav"
            data-open-speed="250"
            data-close-speed="200"
            data-easing="linear"
          >
            <div v-for="(i, a) in itemsNav" :key="a + 'lista'">
              <li v-if="i.children">
                <a :title="i.name"
                  ><img :src="i.icon + ''" /><span class="nav-item-text">{{
                    i.name
                  }}</span></a

                >
                <ul role="menu">
                  <li
                    v-for="(child, b) in i.children"
                    :key="b + 'lista'"
                    @click="enviarSelect(child)"
                  >
                    <router-link :to="child.url"
                      ><span class="nav-item-text"
                        >{{ child.name }}
                      </span></router-link
                    >
                  </li>
                </ul>
              </li>
              <li v-else @click="enviarSelect(i)">
                <router-link :to="i.url"
                  ><img :src="i.icon" /><span class="nav-item-text"
                    >{{ i.name }}
                  </span></router-link
                >
              </li><br>
            </div><br>
          </ul>
        </div>
      </div>
    </div>
  </b-sidebar>
</template>

<script>
// import nav from "@/router/opciones-menu.js";
export default {
  name: "sidebar",
  data() {
    return {
      variant: "dark",
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
      itemsNav: [
        {
          name: "Inicio ",
          url: "/menu",
          icon: "@/plugins/img/icons/ico-menu-inbox.png",
        },
        {
          name: "Administracion",
          url: "/",
          icon: "@/plugins/img/icons/ico-menu-administracion-sistema.png",
          children: [
            {
              name: "Cuenta",
              url: "/menu/micuenta",
              icon: "@/plugins/img/icons/ico-menu-inbox.png",
            },
            {
              name: "Contactos",
              url: "/miscontactos",
              icon: "fa fa-puzzle-piece",
            },{
              name: "Usuarios",
              url: "/misusuarios",
              icon: "fa fa-puzzle-piece",
            },
          ],
        },
        {
          name: "Cerrar Sesión",
          url: "/",
          icon: "@/plugins/img/icons/ico-menu-administracion-sistema.png",
        },
      ],
    };
  },
  mounted() {
    console.log(this.itemsNav);
  },
  methods: {
    enviarSelect(param) {
      this.$emit("cambio-component", param);
      console.log(param);
    },
  },
};
</script>

<style>
</style>
<!---->