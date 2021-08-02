<template>
  <div class="auth-login-form mt-2">
      <div class="form-group">
        <label
          class="form-label position-left size-text-login"
          for="login-email"
          >Usuario</label
        >
        <input
          class="form-control"
          id="login-email"
          type="text"
          name="login-email2"
          placeholder=""
          aria-describedby="login-email"
          autofocus=""
          tabindex="1"
          v-model="user"
        />
      </div>
      <div class="form-group">
        <div class="d-flex justify-content-between">
          <label class="size-text-login" for="login-password"
            >Contrase&ntilde;a</label
          >
           <a 
            ><small>Olvidaste tu contrase&ntilde;a?</small></a
          > 
        </div>
        <div class="input-group input-group-merge form-password-toggle">
          <input
            class="form-control form-control-merge"
            id="login-password"
            type="password"
            name="login-password"
            placeholder=""
            aria-describedby="login-password"
            tabindex="2"
            v-model="password"
          />
          <!-- <div class="input-group-append"><span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span></div> -->
        </div>
      </div>
     <button class="btn btn-primary btn-block" tabindex="4" @click="guardarUser()">
          Ingresar
        </button>
      <router-link v-if="continuar" to="/menu"></router-link>
    <p class="text-center mt-2" style="color: #51c1ff">
      <a @click="login=false"><span>&nbsp;Solicitar Cuenta</span></a>
    </p>
  </div>
</template>

<script>
import image from "@/assets/images/pages/login-v2.svg";
import axios from 'axios';

export default {
  name: "Login",
  data() {
    return {
      logo_v2: image,
      user: null,
      password:null,
      usuarioRespuesta:null,
      continuar:false
    };
  },
  created() {
    
  },
  computed: {
    login: {
      // getter
      get: function () {
        return this.Login;
      },
      // setter
      set: function () {
        console.log("enviando parametro ");
        this.$emit('cambiar-registro')
      },
    },
  },
  methods: {
    guardarUser(){
      axios
          .get(
            "http://localhost:8090/api/admin/login-externos", {
              params:{
                "user": this.user,
                "clave": this.password,
              }
            }
          )
          .then((response) => {
            this.usuarioRespuesta = response.data;
            if (response.data.esCorrecto){ 
              localStorage.setItem("User", this.usuarioRespuesta.resultado.persona.nroDocumento);
             this.$router.replace("/menu");
            //  router.push("/menu")
              this.continuar = true
            }
            else{
              this.$swal({
              icon: 'error',
              title: 'Error',
              text: "La cuenta no existe"
            });
            }
            
          })
          .catch((e) => {
            console.log(e)
            this.$swal({
              icon: 'error',
              title: 'Error',
              text: "Intentelo más tarde"
            });
            });
     
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
