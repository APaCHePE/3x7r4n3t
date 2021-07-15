<template>
  <el-row>
    <div
      class="question"
      v-loading="loading"
      element-loading-text="Loading..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
    <div class="flex-container">
      <div class="thank">
        <div
          style="
            column-count: 2;
            background: linear-gradient(-90deg, #026433, white);
          "
        >
          <br />
          <div>
            <img
              style="width: 100px; height: 100px; text-aling: lefth"
              alt="Vue logo"
              src="../assets/logo_smg.png"
            /><br />
          </div>
          <div>
            <br />
            <p style="color: white; font-weight: bold">VOTO ELECTRÓNICO</p>
            <p style="color: #76f63a; font-weight: bold">
              Elecciones Complementarias para Delegados 2021
            </p>
          </div>
        </div>

        <div v-if="login">
          <Terminado @nuevoVoto='limpiarVoto'/>
        </div>
        <div v-else>
          <Login style="align-vertical: center; margin-top: 20px" />
        </div><br>
        
      </div>
      <div class="item"><p style="font-size: 14px; color: red">
          En caso de inconvenientes llamar: 923536657, 923536841, 913005754
        </p></div></div>
    </div>
  </el-row>
</template>

<script>
import Login from "@/components/Login.vue";
import Terminado from "@/components/Terminado.vue";

export default {
  props: ["finish"],
  name: "Home",
  components: {
    Login,
    Terminado,
  },
  data() {
    return {
      login: this.finish,
      pantalla: 2,
      loading: false,
    };
  },
  created(){
    // if (!this.logeado) {
    //   return this.$router.replace("/");
    // }
  },
  methods: {
    limpiarVoto(){
      console.log("EVENTO NUEVO VOTO")
      this.login = false;
    }
  },
};
</script>
<style scoped lang="scss">

</style>