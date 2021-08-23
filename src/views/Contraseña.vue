<template>
  <div style="float: center">
    <br /><br />
    <h2 class="brand-text text-primary ml-1">ESTEC</h2>
    <br />
    <h4>Para culminar su registro por favor registre su contraseña</h4>
    <br />
    <el-card class="box-card" style="width: 50%; padding: auto; margin: auto">
      <div>
        <el-form status-icon class="demo-ruleForm">
          <el-form-item label="Contraseña : " prop="pass">
            <el-input
              type="password"
              v-model="pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Confirmar Contraseña : " prop="checkPass">
            <el-input
              type="password"
              v-model="passConf"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="confirmaContraseña()"
              >Confirmar</el-button
            >
            <el-button @click="limpiar()">Limpiar</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      pass: null,
      passConf: null,
    };
  },
  methods: {
    confirmaContraseña() {
      if (this.pass == this.passConf) {
        axios
          .post("http://localhost:8090/api/admin/modificar-pass-proveedor", {
            user: this.$route.params.hash,
            contrasena: this.pass,
            estado: 1,
          })
          .then((response) => {
            this.tableData = response.data.result;
            console.log(this.tableData);
            this.$swal({
              icon: "success",
              title: "",
              text: "Se ha registrado con éxito.",
            });
            this.$router.replace("/");
          })
          .catch((e) => {
            console.log(e);
            this.$swal({
              icon: "info",
              title: "Aviso",
              text: "Ocurrio un error intentelo más tarde.",
            });
          });
      } else {
        this.$swal({
          icon: "error",
          title: "Error",
          text: "Las contraseñas no coinciden.",
        });
      }
    },
    limpiar() {
      this.pass = null;
      this.passConf = null;
    },
  },
};
</script>

<style>
</style>