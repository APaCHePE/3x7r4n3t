<template>
  <div class="auth-login-form mt-2">
      <div class="form-group">
        <label
          class="form-label position-left size-text-login"
          for="NomEmpresa"
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
        <label
          class="form-label position-left size-text-login"
          for="ruc"
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
        <label
          class="form-label position-left size-text-login"
          for="correo"
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
        <label
          class="form-label position-left size-text-login"
          for="telefono"
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
        <label
          class="form-label position-left size-text-login"
          >Dirección</label
        >
        <input
          class="form-control"
          id="direccion"
          type="text"
          placeholder="Dirección"
          autofocus=""
          v-model="direccion"
        />
      </div>

      <button class="btn btn-primary btn-block"  @click="generarSolicitud()">Solicitar</button>
    <p class="text-center mt-2" style="color: #51c1ff">
      <a @click="login=false"><span>&nbsp;Ya tengo cuenta</span></a>
    </p>
  </div>
</template>

<script>
import axios from "axios";
import image from "@/assets/images/pages/login-v2.svg";
export default {
  data() {
    return {
      NombreEmpresa:null,
      rucEmpresa:null,
      correoEmpresa:null,
      telefonoEmpresa:null,
      tipoDocumento: 4,
      direccion:null,
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
        this.$emit('cambiar-registro')
      },
    },
  },
  methods:{
    generarSolicitud(){
            axios
        .post("http://localhost:8090/api/admin/guardar-proveedor",
            {
              "usuario": this.correoEmpresa,
              "tipoCuenta":   6,
              "persona": 
                {
                  "nroDocumento": this.rucEmpresa,
                  "tipoDocumento": this.tipoDocumento,
                  "nombreCompleto": this.NombreEmpresa,
                  "telefonoPrincipal":  this.telefonoEmpresa,
                  "direccion": this.direccion,
                  "idSistema": 9,
                }
            }
        )
        .then((response) => {
          console.log(response);
          if(response.data.esCorrecto){
            this.$swal({
                  icon: "success",
                  title: "",
                  text: 'Se ha registrado con éxito.'
                }); 
            this.login=false;
          }
          else{
            this.$swal({
                  icon: "info",
                  title: "Aviso",
                  text: 'La empresa ya ha sido registrada.'
                }); 
          }
        })
        .catch((e) => {
          debugger
          console.log(e)
          this.$swal({
            icon: 'error',
            title: 'Error',
            text: "No se ha podido registrar, intente mas tarde."
          });
        });
    }
  }
};
</script>

