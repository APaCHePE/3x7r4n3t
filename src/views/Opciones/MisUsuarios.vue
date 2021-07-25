<template>
  <div class="page-container positionRight">
    <div class="main-content body-full positionRight">
      <div
        class="content contentTG left-sidebar-toggle contenedor-opciones"
        style="min-height: 592px"
      >
        <titulo-header>Mis Usuarios</titulo-header><br />
        <div class="container">
          <div id="misUsuarios">
            <!-- <h2 class="titulo">Mis Usuarios</h2> -->
            <div id="cuentasBAncarias" class="textoCuenta2">
              <div class="row">
                <!-- <div class="col-md-2">Cargo</div> -->
                <div class="col-md-4">Nombres</div>
                <div class="col-md-4">Correo</div>

                <div class="col-md-3">Clave</div>
              </div>
              <br />
              <div class="row" v-for="(item, index) in Usuarios" :key="index">
                <!-- <div class="col-md-3"><input class="form-control form-control-merge" v-model="item.cargo"></div> -->
                <div class="col-md-4">
                  <input
                    class="form-control form-control-merge"
                    v-model="item.nombres"
                  />
                </div>
                <div class="col-md-4">
                  <input
                    class="form-control form-control-merge"
                    v-model="item.correo"
                  />
                </div>
                <div class="col-md-2">
                  <input
                    type="password"
                    class="form-control form-control-merge"
                    v-model="item.clave"
                    disabled
                  />
                </div>
                <div class="col-md-2" style="text-align: center">
                  <el-button @click="dialogEdit = true">Editar</el-button>
                </div>

                <br /><br />
                <br />
              </div>
              <div class="añadir">
                <el-button type="text" @click="dialogVisible = true"
                  >+ añadir cuenta</el-button
                >
              </div>

              <el-dialog
                title="Editar"
                :visible.sync="dialogEdit"
                width="30%"
                :before-close="handleClose"
              >
                <!-- <span>Nueva cuenta</span> -->
                <el-form>
                  <el-form-item label="Nueva Contraseña">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Confirmar Contraseña">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="dialogVisible = false"
                    >Guardar</el-button
                  >
                </span>
              </el-dialog>

              <el-dialog
                title="Nuevo Usuario"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose"
              >
                <!-- <span>Nueva cuenta</span> -->
                <el-form>
                  <el-form-item label="Nombres">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Correo">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Clave">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="dialogVisible = false"
                    >Guardar</el-button
                  >
                </span>
              </el-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TituloHeader from "@/components/utils/TituloHeader.vue";

export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      editarPass: true,
      dialogEdit: false,
      dialogVisible: false,
      Usuarios: [
        {
          idUsuario: 1,
          cargo: "Director",
          nombres: "jose pablo",
          correo: "jose@pablo",
          clave: "qwqwq",
        },
        {
          idUsuario: 1,
          cargo: "Director",
          nombres: "jose pablo",
          correo: "jose@pablo",
          clave: "qwqwq",
        },
        {
          idUsuario: 1,
          cargo: "Director",
          nombres: "jose pablo",
          correo: "jose@pablo",
          clave: "qwqwq",
        },
        {
          idUsuario: 1,
          cargo: "Director",
          nombres: "jose pablo",
          correo: "jose@pablo",
          clave: "qwqwq",
        },
      ],
    };
  },
  methods: {
    handleClose(done){
      thi.$confirm('Desea cerrar pop-up').then(_=>{
        done();
      }).catch(_=>{})
    },
    añadirCuenta() {
      this.$swal({
        title: "Nuevo Usuario",
        text: "Espacio para anadir un nuevo usuario",
        type: "input",
        showCancelButton: true,
        closeOnConfirm: false,
        inputPlaceholder: "Write something",
      });
    },
  },
};
</script>

<style>
.textoCuenta2 {
  text-align: left;
  margin-left: 65px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 23px;
}

.titulo {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;

  color: #727272;

  width: 300px;
  height: 70px;
}
.form-control form-control-merge {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-color: #b1b1b78c;
}
.titulo2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  line-height: 47px;

  color: #727272;

  width: 350px;
  height: 70px;
}
.añadir {
  color: #51c1ff;
  text-align: right;
  margin-right: 0px;
}
</style>
