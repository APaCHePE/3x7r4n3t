<template>
<div class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="blank-page">

   <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="auth-wrapper auth-v2">
                    <div class="auth-inner row m-0">
                        <!-- Brand logo--><a class="brand-logo" href="javascript:void(0);">
                           
                            <h2 class="brand-text text-primary ml-1">ESTEC</h2>
                        </a>
                        <!-- /Brand logo-->
                        <!-- Left Text-->
                        <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                            <div class="w-100 d-lg-flex align-items-center justify-content-center px-5"><img class="img-fluid"  :src="logo_v2" alt="Login V2" /></div>
                        </div>
                        <!-- /Left Text-->
                        <!-- Login-->
                        <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                            <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                                <h2 class="card-title font-weight-bold mb-1">ESTEC</h2>
                                <p class="card-text mb-2">Portal pago a provedores</p>
                                  <div >
                                
                                    <div v-if="login">
                                      <Registro @cambiar-registro='cambiarModo' :Login="login"/>
                                    </div>
                                    <div v-else>
                                      <Login @cambiar-registro='cambiarModo'/>
                                    </div><br>
                                    
                                  </div>
                            </div>
                        </div>
                        <!-- /Login-->
                    </div>
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
  created(){
    // if (!this.logeado) {
    //   return this.$router.replace("/");
    // }
  },
  methods: {
    cambiarModo(){
      console.log("recibiendo parametro "+this.login);
      this.login = (this.login == undefined)?true: !this.login;
      console.log(this.login);
    },
    limpiarVoto(){
      console.log("EVENTO NUEVO VOTO")
      this.login = false;
    }
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600");
@import "../assets/css/colors.css";
@import "../assets/css/bootstrap.css";
@import "../assets/css/bootstrap-extended.css";
@import "../assets/css/components.css";
@import "../assets/css/themes/dark-layout.css";
@import "../assets/css/themes/bordered-layout.css";
@import "../assets/css/themes/semi-dark-layout.css";
@import "../assets/css/core/menu/menu-types/vertical-menu.css";
@import "../assets/css/plugins/forms/form-validation.css";
@import "../assets/css/pages/page-auth.css";
@import "../assets/style.css";
.position-left {
  float: left;
}
.size-text-login {
  font-size: 13px;
}
</style>