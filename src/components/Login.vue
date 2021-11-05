<template>
  <div class="login">
    <div class="mt-2">
      <label>Usuario:</label>
      <el-input
        id="input-1"
        v-model="form.user"
        type="email"
        placeholder="Ingrese usuario"
      ></el-input>
      <label>Contraseña:</label>

      <el-input
        id="input-1"
        v-model="form.password"
        autocomplete="off"
        :type="'password'"
        placeholder="Ingreser contraseña"
        required
      ></el-input>
      <el-button
        class="mt-3"
        ref="contraseniaFocus"
        @click="validarLogin()"
        type="primary"
        style="width: 100%"
      >
        Ingresar
      </el-button>
    </div>
    <el-dialog :visible.sync="cargando" width="30%">
      <div
        class="spinner-border"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </el-dialog>
    <!-- <router-link v-if="continuar" to="/menu"></router-link> -->
    <p class="text-center mt-2">
      <a @click="login = false"><span>&nbsp;Solicitar Cuenta</span></a>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import constantes from "../store/Constantes";
import "../assets/style/login.scss";

export default {
  name: "Login",
  data() {
    return {
      form: {
        user: null,
        password: null,
      },
      usuarioRespuesta: null,
      continuar: false,
      cargando: false,
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  created() {},
  directives: {
    uppercase: {
      update(el) {
        el.value = el.value.toUpperCase();
      },
    },
  },
  computed: {
    login: {
      get: function () {
        return this.Login;
      },
      set: function () {
        console.log("enviando parametro ");
        this.$emit("cambiar-registro");
      },
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.log("CONSOLEANDO EL FORMULARIO VALDACION ");
        console.log(valid);
        console.log("CONSOLEANDO EL FORMULARIO ");
        console.log(formName);
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    validarLogin() {
      this.cargando = true;
      if (this.form.user == null || this.form.user.length <= 5) {
        this.$swal({
          icon: "info",
          title: "info",
          text: "Debe ingresar un usuario",
        });
        this.cargando = false;
        return;
      } else if (this.form.password == null || this.form.password.length <= 5) {
        this.$swal({
          icon: "info",
          title: "info",
          text: "Debe ingresar una contraseña",
        });
        this.cargando = false;
        return;
      }else {
        this.loginUsuario();
      }
    },
    async loginUsuario() {
      const url = constantes.rutaAdmin + "/login-externos";
      let acces = false;
      await axios
        .get(url, {
          params: {
            user: this.form.user,
            clave: this.form.password,
          },
        })
        .then((response) => {
          this.usuarioRespuesta = response.data;
          this.cargando = false;
          if (response.data.esCorrecto) {
            localStorage.setItem(
              "User",
              this.usuarioRespuesta.resultado.persona.nroDocumento
            );
            localStorage.setItem(
              "nombreUsuario",
              this.usuarioRespuesta.resultado.persona.nombreCompleto
            );
            localStorage.setItem(
              "numeroDocumento",
              this.usuarioRespuesta.resultado.persona.nroDocumento
            );
            localStorage.setItem(
              "telefonoPrincipal",
              this.usuarioRespuesta.resultado.persona.telefonoPrincipal
            );
            localStorage.setItem(
              "usuario",
              this.usuarioRespuesta.resultado.usuario
            );
            // debugger
            acces = true;
            this.continuar = true;
          } else {
            this.$swal({
              icon: "info",
              title: "info",
              text: this.usuarioRespuesta.mensajeError,
            });
          }
        })
        .catch((e) => {
          this.cargando = false;
          console.log("error al logear ");
          console.log(e.response.data.mensajeError);
          this.$swal({
            icon: "error",
            title: "Error",
            text: e.response.data.mensajeError,
          });
        })
        .finally(() => {
          this.cargando = false;
        });
      // debugger
      if (acces) this.$router.push("/menu");
      console.log("paso el replace");
    },
  },
};
</script>

