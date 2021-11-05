<template>
  <div class="registro mt-2">
    <b-form @submit="validacionFormulario" class="align-left">
      <b-form-group
        id="name"
        label="Razón social:"
        label-for="nombreRazSocial"
        description=""
      >
        <b-form-input
          id="name"
          name="nombreRazSocial"
          type="text"
          placeholder="Razón social"
          v-model="form.nombreEmpresa"
          maxlength="100"
          required
          v-uppercase
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="ruc"
        label-for="ruc"
        label="RUC:"
        description=""
      >
        <b-form-input
          id="ruc"
          name="ruc"
          v-model="form.rucEmpresa"
          type="text"
          placeholder="RUC"
          maxlength="11"
          required
          autofocus
          v-uppercase
          @keypress="soloNumeros"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="correo"
        label-for="correo"
        label="Correo electrónico:"
        description=""
      >
        <b-form-input
          id="correo"
          name="correo"
          v-model="form.correoEmpresa"
          type="text"
          placeholder="Correo electrónico"
          maxlength="30"
          required
          autofocus
          v-uppercase
          @keypress="soloNumeros"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="telefono"
        label-for="telefono"
        label="Teléfono / Celular:"
        description=""
      >
       
        <b-form-input
          id="telefono"
          name="telefono"
          v-model="form.telefonoEmpresa"
          type="text"
          placeholder="Teléfono"
          maxlength="9"
          required
          autofocus
          v-uppercase
          @keypress="soloNumeros"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="direccion"
        label="Dirección:"
        label-for="input-1"
        description=""
      >
        <b-form-input
          id="direccion"
          name="direccion"
          type="text"
          v-model="form.direccion"
          placeholder="RUC"
          maxlength="150"
          required
          autofocus
          v-uppercase
        ></b-form-input>
      </b-form-group>
      <b-button class="btn btn-primary mt-3" style="width: 100%" submit  variant="primary" @click="generarSolicitud()">
        Solicitar
      </b-button>
    </b-form>

    <p class="text-center mt-2" >
      <a @click="login = false"><span>&nbsp;Ya tengo cuenta</span></a>
    </p>
    <el-dialog :visible.sync="cargando" width="30%">
      <div
        class="spinner-border"
        style="width: 3rem; height: 3rem"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </el-dialog>
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
      form: {
        nombreEmpresa: "",
        rucEmpresa: "",
        correoEmpresa: "",
        telefonoEmpresa: "",
        direccion: "",
      },
      cargando: false,
      NombreEmpresa: null,
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
      this.cargando = true;
      if (!this.form.NombreEmpresa || this.form.NombreEmpresa.length <= 2) {
        this.modal("info", "Ingrese razón social", "");
        return;
      } else if (!this.form.rucEmpresa) {
        this.modal("info", "Ingrese su número de RUC", "");
        return;
      } else if (this.form.rucEmpresa.trim().length != 11) {
        this.modal("info", "Verifique el número de RUC", "");
        return;
      } else if (!this.form.correoEmpresa || this.form.correoEmpresa.length <= 2) {
        this.modal("info", "Ingrese su correo electrónico", "");
        return;
      } else if (
        !this.correoEmpresa.includes("@") ||
        !this.correoEmpresa.includes(".")
      ) {
        return this.modal("info", "Verifique el campo de correo", "");
      } else if (!this.form.telefonoEmpresa || this.form.telefonoEmpresa.length <= 2) {
        this.modal("info", "Ingrese teléfono/celular", "");
        return;
      } else if (!this.form.direccion || this.form.direccion.length <= 2) {
        this.modal("info", "Ingrese dirección", "");
        return;
      } else {
        this.generarSolicitud();
      }
    },
    modal(icono, titulo, texto) {
      this.$swal({
        icon: icono,
        title: titulo,
        text: texto,
      });
      if (this.cargando) this.cargando = false;
    },
    generarSolicitud() {
      axios
        .post(constantes.rutaAdmin + "/guardar-proveedor", {
          usuario: this.form.correoEmpresa,
          tipoCuenta: 6,
          persona: {
            nroDocumento: this.form.rucEmpresa,
            tipoDocumento: this.tipoDocumento,
            nombreCompleto: this.form.NombreEmpresa,
            telefonoPrincipal: this.form.telefonoEmpresa,
            direccion: this.form.direccion,
            idSistema: 9,
          },
        })
        .then((response) => {
          console.log(response);
          if (response.data.esCorrecto) {
            this.$swal({
              icon: "success",
              title: "",
              text: "Se ha registrado su solicitud con éxito",
            });
            this.login = false;
          } else {
            this.$swal({
              icon: "info",
              title: "Aviso",
              text: "El proveedor ya ha sido registrada",
            });
          }
        })
        .catch((e) => {
          console.log(e);
          this.$swal({
            icon: "error",
            title: "",
            text: "No se ha podido registrar, intente mas tarde.",
          });
        })
        .finally(() => {
          this.cargando = false;
        });
    },
  },
};
</script>

