<template>
  <div>
    <form class="auth-login-form mt-2" action="index.html" method="POST">
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
          tabindex="1"
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
          tabindex="1"
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
          tabindex="1"
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
          tabindex="1"
          v-model="telefonoEmpresa"
        />
      </div>

      <button class="btn btn-primary btn-block" tabindex="4" @click="generarSolicitud()">Solicitar</button>
    </form>
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
        .get("http://localhost:8090/api/admin/validar-proveedor", {
          params: {
            nroDocumento: this.rucEmpresa,
          },
        })
        .then((response) => {
          console.log(response);
          if(!response.data.resultado){
            alert("no existe")
          }
          else{
            this.$swal({
                  icon: "info",
                  title: "Aviso",
                  text: 'La empresa ya ha sido registrada'
                });

            
          }
        })
        .catch((e) => {
          console.log(e)
          this.$swal({
              icon: 'error',
              title: 'Error',
              text:
                "Sucedió un error. Favor vuelva a intentar en unos minutos. "
            });
        });
    }
  }
};
</script>

