<template>
  <div class="home">
    <div class="home-contenedor">
      <div class="izquierda">
        <a class="brand-logo" href="javascript:void(0);">
          <!-- <h2 class="brand-text text-white ml-1">ESTEC</h2> -->
          <!-- <div class="texto"><h2 ><u>Portal pago a provedores</u></h2></div> -->
          <img class="img-fluid" :src="logo_v2" alt="Login V2" />
        </a>
      </div>
      <div class="derecha">
          <!-- <template
            ><img
              class="derecha-imagen"
              src="../plugins/img/nuevo.png"
              width="250"
              height="75px"
          /></template> -->
        <div class="derecha-contenido">
          <p class="mb-1" v-if="login"><b>Registrate!</b></p>
          <p class="mb-1" v-else><b>Te damos la bienvenida!</b></p>
          <div class="forms">
            <div v-if="login">
              <Registro @cambiar-registro="cambiarModo" :Login="login" />
            </div>
            <div v-else>
              <Login @cambiar-registro="cambiarModo" />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Registro from "@/components/Registro.vue";
import image from "@/assets/images/pages/login-v2.svg";

import "../assets/style/home.scss";

export default {
  props: ["finish"],
  name: "Home",
  components: {
    Login,
    Registro,
  },
  data() {
    return {
      login: this.finish,
      pantalla: 2,
      loading: false,
      logo_v2: image,
    };
  },
  created() {
    // if (!this.logeado) {
    //   return this.$router.replace("/");
    // }
  },
  methods: {
    cambiarModo() {
      console.log("recibiendo parametro " + this.login);
      this.login = this.login == undefined ? true : !this.login;
      console.log(this.login);
    },
    limpiarVoto() {
      console.log("EVENTO NUEVO VOTO");
      this.login = false;
    },
  },
};
</script>
<style lang="scss">
</style>