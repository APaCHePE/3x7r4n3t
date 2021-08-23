<template>
  <div class="auth-login-form mt-2">
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="NomEmpresa"
        >Razón social</label
      >
      <input
        class="form-control"
        id="NomEmpresa"
        type="text"
        name="NomEmpresa"
        placeholder=""
        aria-describedby="NomEmpresa"
        autofocus=""
        maxlength="100"
        v-model="NombreEmpresa"
        v-uppercase
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
        maxlength="11"
        aria-describedby="ruc"
        autofocus=""
        v-model="rucEmpresa"
        @keypress="soloNumeros"
      />
    </div>
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="correo"
        >Correo electrónico</label
      >
      <input
        class="form-control"
        id="correo"
        type="text"
        name="correo"
        placeholder=""
        aria-describedby="correo"
        autofocus=""
        maxlength="30"
        v-model="correoEmpresa"
        v-uppercase
      />
    </div>
    <div class="form-group">
      <label class="form-label position-left size-text-login" for="telefono"
        >Teléfono / Celular</label
      >
      <input
        @keypress="soloNumeros"
        class="form-control"
        id="telefono"
        type="text"
        name="telefono"
        placeholder=""
        aria-describedby="telefono"
        autofocus=""
        maxlength="9"
        v-model="telefonoEmpresa"
      />
    </div>
    <div class="form-group">
      <label class="form-label position-left size-text-login">Dirección</label>
      <input
        class="form-control"
        id="direccion"
        type="text"
        placeholder=""
        autofocus=""
        maxlength="50"
        v-model="direccion"
        v-uppercase
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
    soloNumeros(event){
      var key = window.event ? event.which : event.keyCode;
      if(key == 8){
        console.log("solo numeros ");
      }else if (key < 48 || key > 57) {
        event.preventDefault();
      }
    },
    validacionFormulario() {
      this.cargando = true;
      if (!this.NombreEmpresa || this.NombreEmpresa.length <= 2) {
        this.modal("info","Ingrese razón social" ,"");
        return ;
      }else if(!this.rucEmpresa){
        this.modal("info","Ingrese su número de RUC" ,"");
        return ;
      }else if(this.rucEmpresa.trim().length != 11){
        this.modal("info","Verifique el número de RUC" ,"");
        return ;
      }else if(!this.correoEmpresa || this.correoEmpresa.length <= 2){
        this.modal("info","Ingrese su correo electrónico" ,"");
        return ;
      }else if ( !this.correoEmpresa.includes("@") || !this.correoEmpresa.includes(".")) {
				return this.modal('info','Verifique el campo de correo','');
			}else if(!this.telefonoEmpresa || this.telefonoEmpresa.length <= 2){
        this.modal("info","Ingrese teléfono/celular" ,"");
        return ;
			}else if(!this.direccion || this.direccion.length <= 2){
        this.modal("info","Ingrese dirección" ,"");
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
          }).finally(()=>{
          this.cargando=false;
        });;
    },
  },
};
</script>

