import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import MisUsuarios from "../views/Opciones/MisUsuarios.vue";
import MiCuenta from "../views/Opciones/MiCuenta.vue";
 
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
        path: '/menu/micuenta',
        name: "MiCuenta",
        component: MiCuenta
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
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
