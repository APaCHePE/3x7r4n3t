<template>
  <div class="auth-login-form mt-2">
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="NomEmpresa"
        >Nombre Empresa</label
      >
      <input
        class="form-control"
        id="NomEmpresa"
        type="text"
        name="NomEmpresa"
        placeholder=""
        aria-describedby="NomEmpresa"
        autofocus=""
        v-model="NombreEmpresa"
      />
    </div>
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="ruc"
        >RUC</label
      >
      <input
        class="form-control"
        id="ruc"
        type="text"
        name="ruc"
        placeholder=""
        aria-describedby="ruc"
        autofocus=""
        v-model="rucEmpresa"
      />
    </div>
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="correo"
        >Correo de administrador</label
      >
      <input
        class="form-control"
        id="correo"
        type="text"
        name="correo"
        placeholder=""
        aria-describedby="correo"
        autofocus=""
        v-model="correoEmpresa"
      />
    </div>
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="telefono"
        >Teléfono / Celular</label
      >
      <input
        class="form-control"
        id="telefono"
        type="text"
        name="telefono"
        placeholder=""
        aria-describedby="telefono"
        autofocus=""
        v-model="telefonoEmpresa"
      />
    </div>
    <div class="form-group">
      <label class="form-label position-left size-text-login">Dirección</label>
      <input
        class="form-control"
        id="direccion"
        type="text"
        placeholder="Dirección"
        autofocus=""
        v-model="direccion"
      />
    </div>

    <button class="btn btn-primary btn-block" @click="validacionFormulario()">
      Solicitar
    </button>
    <p class="text-center mt-2" style="color: #51c1ff">
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
export default {
  data() {
    return {
      cargando: false,
      NombreEmpresa: null,
      rucEmpresa: null,
      correoEmpresa: null,
      telefonoEmpresa: null,
      tipoDocumento: 4,
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
    validacionFormulario() {
      this.cargando = true;
      if (!this.NombreEmpresa || this.NombreEmpresa.length <= 2) {
        this.modal("info","info","Ingresar nombre de la empresa");
        return ;
      }else if(!this.rucEmpresa || this.rucEmpresa.trim().length != 11){
        this.modal("info","info","Ingrese su ruc");
        return ;
      }else if(!this.correoEmpresa || this.correoEmpresa.length <= 2){
        this.modal("info","info","Ingrese su correo");
        return ;
      }else if(!this.telefonoEmpresa || this.telefonoEmpresa.length <= 2){
        this.modal("info","info","Ingrese telefono/celular");
        return ;
      }else{
        this.generarSolicitud()
      }
    },
    modal(icono, titulo, texto){
      this.$swal({
          icon: icono,
          title: titulo,
          text: texto,
        });
      if(this.cargando)this.cargando=false;
    },
    generarSolicitud() {
        axios
          .post("http://localhost:8090/api/admin/guardar-proveedor", {
            usuario: this.correoEmpresa,
            tipoCuenta: 6,
            persona: {
              nroDocumento: this.rucEmpresa,
              tipoDocumento: this.tipoDocumento,
              nombreCompleto: this.NombreEmpresa,
              telefonoPrincipal: this.telefonoEmpresa,
              direccion: this.direccion,
              idSistema: 9,
            },
          })
          .then((response) => {
            console.log(response);
            if (response.data.esCorrecto) {
              this.$swal({
                icon: "success",
                title: "",
                text: "Se ha registrado con éxito.",
              });
              this.login = false;
            } else {
              this.$swal({
                icon: "info",
                title: "Aviso",
                text: "La empresa ya ha sido registrada.",
              });
            }
          })
          .catch((e) => {
            console.log(e);
            this.$swal({
              icon: "error",
              title: "Error",
              text: "No se ha podido registrar, intente mas tarde.",
            });
          });
    },
  },
};
</script>

