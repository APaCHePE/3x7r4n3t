<template>
  <div>
    <div class="hello">
      <el-form>
        <el-input
          placeholder="Ingrese su usuario"
          v-model="usuario"
          maxlength="8"
        >
          <i class="el-icon-user el-input__icon" slot="suffix"></i> </el-input
        ><br /><br />

        <el-input
          placeholder="Ingrese su contraseña"
          maxlength="8"
          v-model="contrasena"
          show-password
        >
        </el-input>
      </el-form>

      <div class="desk">
        <div><p style="font-size: 14px">Formaato DDMMAAAA</p></div>
        <div>
          <p style="font-size: 14px" class="textColor">
            Ejemplo: Si naciste el 01 de abril de 1965, debe ingresar: 01041965
          </p>
        </div>
      </div>
      <br />
      <router-link
        :to="{ name: 'ContainListas', params: { logeado: 'true' } }"
        replace
      >
        <el-button
          style="background-color: #026433; color: white"
          @click="siguiente()"
          >INGRESAR
        </el-button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      usuario: "",
      contrasena: "",
      parametro: 1,
    };
  },
  created() {
    //this.parametro=
  },
  methods: {
    siguiente() {
      this.$router.replace("/contain");
    },
    //   soloNumeros: function(event){
    //   var key = window.event ? event.which : event.keyCode;
    //   if(key == 8){
    //   }else if (key < 48 || key > 57) {
    //     event.preventDefault();
    //   }
    // }
  },
};
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.textColor {
  color: red;
}
.desk {
  column-count: 2;
  text-align: left;
}
@media screen and (max-width: 600px) {
  .desk {
    column-count: 1;
    text-align: left;
  }
}
</style>
