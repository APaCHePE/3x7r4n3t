<template>
  <div class="registro mt-2">
    <label>Razón social:</label>
    <el-input
      id="name"
      name="nombreRazSocial"
      type="text"
      v-model="nombreEmpresa"
      maxlength="100"
      required
    ></el-input>
    <label>RUC:</label>
    <el-input
      id="ruc"
      name="ruc"
      v-model="rucEmpresa"
      type="text"
      maxlength="11"
      required
      autofocus
      @keypress.native="soloNumeros"
    ></el-input>
    <label>Correo electrónico:</label>
    <el-input
      id="correo"
      name="correo"
      v-model="correoEmpresa"
      type="text"
      maxlength="60"
    ></el-input>
    <label>Teléfono / Celular:</label>
    <el-input
      id="telefono"
      name="telefono"
      v-model="telefonoEmpresa"
      type="text"
      maxlength="9"
      required
      autofocus
      @keypress.native="soloNumeros"
    ></el-input>
    <label>Dirección:</label>
    <el-input
      id="direccion"
      name="direccion"
      type="text"
      v-model="direccion"
      maxlength="150"
      required
      autofocus
    ></el-input>
    <b-button
      class="btn btn-primary mt-3"
      style="width: 100%"
      submit
      variant="primary"
      @click="validacionFormulario()"
    >
      Solicitar
    </b-button>

    <p class="text-center mt-2">
      <el-button type="text" @click="login = false"
        ><u><span>&nbsp;Ya tengo cuenta</span></u></el-button
      >
    </p>
  </div>
</template>

<script>
import axios from "axios";
import image from "@/assets/images/pages/login-v2.svg";
import constantes from "../store/Constantes";
import "../assets/style/registro.scss";
export default {
  data() {
    return {
      nombreEmpresa: null,
      rucEmpresa: null,
      correoEmpresa: null,
      telefonoEmpresa: null,
      tipoDocumento: 6,
      direccion: null,
      logo_v2: image,
    };
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
        this.$emit("cambiar-registro");
      },
    },
  },
  methods: {
    soloNumeros(event) {
      var key = window.event ? event.which : event.keyCode;
      if (key == 8) {
        console.log("solo numeros ");
      } else if (key < 48 || key > 57) {
        event.preventDefault();
      }
    },
    validacionFormulario() {
      this.$swal.fire({
        title: "Solicitando...",
        showCloseButton: false,
        showCancelButton: false,
        allowOutsideClick: false,
        didOpen: () => {
          console.log("mostrando ");
          this.$swal.showLoading();
        },
      });
      if (!this.nombreEmpresa || this.nombreEmpresa.length <= 2) {
        this.modal("info", "Ingrese razón social", "");
        return;
      } else if (!this.rucEmpresa) {
        this.modal("info", "Ingrese su número de RUC", "");
        return;
      } else if (this.rucEmpresa.trim().length != 11) {
        this.modal("info", "Verifique el número de RUC", "");
        return;
      } else if (!this.correoEmpresa || this.correoEmpresa.length <= 2) {
        this.modal("info", "Ingrese su correo electrónico", "");
        return;
      } else if (
        !this.correoEmpresa.includes("@") ||
        !this.correoEmpresa.includes(".")
      ) {
        this.modal("info", "Verifique el campo de correo", "")
        return ;
      } else if (!this.telefonoEmpresa || this.telefonoEmpresa.length <= 2) {
        this.modal("info", "Ingrese teléfono/celular", "");
        return;
      } else if (!this.direccion || this.direccion.length <= 2) {
        this.modal("info", "Ingrese dirección", "");
        return;
      } else {
        this.generarSolicitud();
      }
    },
    async modal(icono, titulo, texto) {
      
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
    generarSolicitud() {
      axios
        .post(constantes.rutaAdmin + "/guardar-proveedor", {
          usuario: this.correoEmpresa,
          tipoCuenta: 6,
          persona: {
            nroDocumento: this.rucEmpresa,
            tipoDocumento: this.tipoDocumento,
            nombreCompleto: this.nombreEmpresa,
            telefonoPrincipal: this.telefonoEmpresa,
            direccion: this.direccion,
            idSistema: 9,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.esCorrecto) {
            this.modal("success", "", "Se ha registrado su solicitud con éxito");
            this.login = false;
          } else {
            this.modal("info", "Aviso", "El proveedor ya ha sido registrado");
          }
        })
        .catch((e) => {
          this.modal("error", "No se ha podido registrar", e.response.data.mensajeError + "");
        })
    },
  },
};
</script>

