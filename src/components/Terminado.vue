<template>
  <div class="card-muni">
    <div style="text-align: center">
      <p style="font-size: 30px; font-weight: bold; color: #6433">
        ¡Gracias por su votacion!
      </p>
      <p style="font-size: 18px">Se registro correctamente su voto.</p>
      <p style="font-size: 18px; font-weight: bold">
        {{ fechaActual }}
      </p>
      <el-row>
        <u
          >DESCARGAR CONSTANCIA<img
            style="padding-left: 10px; width: 20px; height: 20px"
            src="https://testingftp.square7.ch/WikiCONTRATACION/images/d/d9/Icono_pdf.png"
        /></u>
      </el-row>
      <el-row>
        <el-button style="background-color: #6433; color: white" @click="nuevoVoto"
          >NUEVO VOTO</el-button
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props:["logeado"],
  data() {
    return {
      fechaActual: "",
    };
  },
  methods: {
    nuevoVoto(){
      this.$emit("nuevoVoto");
    },
    siguiente() {
      this.$router.push({
        name: "Home",
        params: {
          id: 1,
        },
      });
    },
  },
  created() {
    
    var hoy = new Date(); //Fecha actual
    var fecha =
      hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();
    var hora = hoy.getHours() + ":" + hoy.getMinutes();
    this.fechaActual = "el " + fecha + " a las " + hora;
  },
};
</script>

<style lang="scss">
.card-muni {
  border: none;
  box-shadow: 0px 4px 25px rgba(205, 229, 243, 0.19);
  border-radius: 20px;
  padding-right: 50px;
  padding-left: 50px;
}
</style>