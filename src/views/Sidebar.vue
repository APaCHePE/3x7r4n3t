<template>
  <b-sidebar id="sidebar-1" shadow>
    <div class="left-sidebar-wrapper">
      <div>
        <div class="scroll-area">
          <ul
            class="sidebar-nav"
            data-open-speed="250"
            data-close-speed="200"
            data-easing="linear"
          >
            <div v-for="(i, a) in itemsNav" :key="a + 'lista'">
              <li v-if="i.children">
                <a href="#" title="Administracion"
                  ><img :src="i.icon + ''" /><span class="nav-item-text"
                    >Administración</span
                  ></a
                >
                <ul role="menu">
                  <li
                    v-for="(child, b) in i.children"
                    :key="b + 'lista'"
                    @click="enviarSelect(child)"
                  >
                    <a>{{ child.name }}</a>
                  </li>
                </ul>
              </li>
              <li v-else @click="enviarSelect(i)">
                <a :title="i.name"
                  ><img :src="i.icon" /><span class="nav-item-text"
                    >{{ i.name }}
                  </span></a
                >
              </li>
            </div>
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
      itemsNav: [
        {
          name: "Inicio ",
          url: "/menu",
          icon: "../plugins/img/icons/ico-menu-inbox.png",
        },
        {
          name: "Administracion",
          url: "/components/licencias",
          icon: "../plugins/img/icons/ico-menu-inbox.png",
          children: [
            {
              name: "Mi cuenta",
              url: "/components/licencias/bandejacertificado",
              icon: "../plugins/img/icons/ico-menu-inbox.png",
            },
            {
              name: "Mis usuarios",
              url: "/components/licencias/bandejacertificado",
              icon: "fa fa-puzzle-piece",
            },
          ],
        },
        {
          name: "Cerrar Sesión",
          url: "/auth/login",
          icon: "../plugins/img/icons/ico-menu-administracion-sistema.png",
        },
      ],
    };
  },
  mounted() {
    console.log(this.itemsNav);
  },
  methods: {
    enviarSelect(param) {
      this.$emit("cambio-component", param)
      console.log(param);
    },
  },
};
</script>

<style>
</style>
<!---->