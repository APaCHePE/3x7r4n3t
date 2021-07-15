<template>
  <el-row>
    <div >
   
     

        <div v-if="login">
          <Terminado @nuevoVoto='limpiarVoto'/>
        </div>
        <div v-else>
          <Login style="align-vertical: center; margin-top: 20px" />
        </div><br>
        
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