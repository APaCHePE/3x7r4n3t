import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import MisUsuarios from "../views/Opciones/MisUsuarios.vue";
import MiCuenta from "../views/Opciones/MiCuenta.vue";
import MisContactos from "../views/Opciones/MisContactos.vue";
import Ordenes from "../views/Opciones/Ordenes.vue";
import Facturas from "../views/Opciones/Facturas.vue";
import NeoFacturaDigital from "../components/Facturas/NeoFacturaDigital.vue";
import ReciboHonorarios from "../components/RecibosH/ReciboHonorarios.vue";
import ArchivoBanco from "../components/ArchivoBanco/Bandeja.vue";
import VueSwal from 'vue-swal';
 
Vue.use(VueSwal);
Vue.use(VueRouter);

const routes = [
 
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
    props: true,
    children:[
      {
        path: '/',
        component: ()=>import('../views/Opciones/menuPrincipal.vue') 
      },
      {
        path: '/misusuarios',
        name: "Mis Usuarios",
        component: MisUsuarios,
      },
      {
        path: '/miscontactos',
        name: "Mis Contactos",
        component: MisContactos,
      },
      {
        path: '/micuenta',
        name: "MiCuenta",
        component: MiCuenta
      },
      {
        path: '/ordenes',
        name: "Ordenes",
        component: Ordenes
      },
      {
        path: '/neo-digital',
        name: "neo-digital",
        component: NeoFacturaDigital
      },
      {
        path: '/facturas',
        name: "Facturas",
        component: Facturas
      },
      {
        path: '/neo-rxh',
        name: "ReciboHonorarios",
        component: ReciboHonorarios
      },
      {
        path: '/archivo-banco',
        name: "ArchivoBanco",
        component: ArchivoBanco
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },{
    path: "/pass/:hash",
    name: "Contraseña",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Contraseña.vue"), 
  },

  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
