<template>
  <el-row>
    <div >
   
        <div v-if="login">
          <Registro @nuevoVoto='limpiarVoto'/>
        </div>
        <div v-else>
          <Login />
        </div><br>
        
      </div>
     
  </el-row>
</template>

<script>
import Login from "@/components/Login.vue";
import Registro from "@/components/Registro.vue";

export default {
  props: ["finish"],
  name: "Home",
  components: {
    Login,
    Registro,
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