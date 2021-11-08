<template>
  <div class="login">
    <div class="mt-2">
      <label>Usuario:</label>
      <el-input id="input-1" v-model="form.user" type="email"></el-input>
      <label>Contraseña:</label>

      <el-input
        id="input-1"
        v-model="form.password"
        :type="'password'"
        show-password
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
    <p class="text-center mt-2">
      <el-button type="text" @click="login = false"
        ><u><span>&nbsp;Solicitar Cuenta</span></u></el-button
      >
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
      this.$swal.fire({
        title: "Solicitando...",
        showCloseButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          this.$swal.showLoading();
        },
      });
      if (this.form.user == null || this.form.user.length <= 5) {
        this.modal("info", "", "Debe ingresar un usuario");
        return;
      } else if (this.form.password == null || this.form.password.length <= 5) {
        this.modal("info", "", "Debe ingresar una contraseña");
        return;
      } else {
        this.loginUsuario();
      }
    },
    loginUsuario() {
      const url = constantes.rutaAdmin + "/login-externos";
      axios
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
            this.$router.push("/menu");
            this.continuar = true;
            this.$swal.fire({
              icon: "success",
              title: "Bienvenido",
              text: "",
              showConfirmButton: false,
              timer: 1200,
              didOpen: () => {
                this.$swal.hideLoading();
              },
            });
          } else {
            this.modal("info", "", this.usuarioRespuesta.mensajeError);
          }
        })
        .catch((e) => {
          this.modal("error", "", e.response.data.mensajeError + "");
        });
    },
    modal(icono, titulo, texto) {
      this.$swal.fire({
        icon: icono,
        title: titulo,
        text: texto,
        showBottomCancel: true,
        didOpen: () => {
          this.$swal.hideLoading();
        },
      });
    },
  },
};
</script>

