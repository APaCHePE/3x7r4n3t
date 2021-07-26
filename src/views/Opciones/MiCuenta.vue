<template>
  <div class="page-container positionRight">
    <div class="main-content body-full positionRight">
      <div
        class="content contentTG left-sidebar-toggle contenedor-opciones"
        style="min-height: 592px"
      >
        <titulo-header>Mis Datos</titulo-header><br />
        <div class="container">
          <div id="miCuenta">
            <!-- <h2 class="titulo">Mis Datos</h2> -->
            <div id="detalleCuenta" class="textoCuenta">
              <div class="row">
                <div class="col-md-6">
                  Razon Social: {{ nombreRazonSocial }}
                </div>
                <div class="col-md-6">Ruc: {{ numeroRuc }}</div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-6">Cuenta Administardora: {{ cuenta }}</div>
                <div class="col-md-6">
                  Teléfono / Celular principal: {{ telefono }}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div id="cuentasBAncarias" class="textoCuenta2">
              <h2 class="titulo2">Cuentas Bancarias</h2>
              <div class="row">
                <div class="col-md-3">Entidad Bancaria</div>
                <div class="col-md-3">Moneda</div>
                <div class="col-md-3">N° Cuenta</div>
                <div class="col-md-3">CCI</div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
              </div>
              <br />
              <div class="añadir">
                <el-button type="text" @click="dialogVisible = true"
                  >+ añadir cuenta</el-button
                >
              </div>

              <el-dialog
                title="Nueva cuenta"
                :visible.sync="dialogVisible"
                width="30%"
              >
                <!-- <span>Nueva cuenta</span> -->
                <el-form>
                  <el-form-item label="Entidad Bancaria">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="Moneda">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="N° de Cuenta">
                    <el-input autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="CCI">
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
          <div>
            <h2 class="titulo2">Cuenta de Detraccíon</h2>
            <div id="cuentasBAncarias" class="textoCuenta2">
              <div class="row">
                <div class="col-md-3">Entidad Bancaria</div>
                <div class="col-md-3">Moneda</div>
                <div class="col-md-3">N° Cuenta</div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <input
                    class="form-control form-control-merge"
                    v-model="entidadDetraccion"
                    disabled
                  />
                </div>
                <div class="col-md-3">
                  <input
                    class="form-control form-control-merge"
                    v-model="monedaDetraccion"
                    disabled
                  />
                </div>
                <div class="col-md-3">
                  <input class="form-control form-control-merge" />
                </div>
              </div>
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
      dialogVisible: false,
      nombreRazonSocial: null,
      numeroRuc: null,
      cuenta: null,
      telefono: null,
      entidadDetraccion: "Banco de la Nacion",
      monedaDetraccion: "soles",
    };
  },
  methods: {
    añadirCuenta() {
      this.$swal({
        title: "Nueva Cuenta",
        text: "Espacio para anadir una nueva cuenta bancaria",
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
.textoCuenta {
  text-align: left;
  width: 950px;
  margin-left: 65px;

  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
}
.textoCuenta2 {
  text-align: left;
  margin-left: 65px;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 23px;
}
.titulo {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;

  color: #727272;

  width: 280px;
  height: 70px;
}
.titulo2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 47px;
  color: #51c1ff;
  width: 1020px;
  height: 50px;
  display: inline-flex;
}
.añadir {
  color: #51c1ff;
  text-align: right;
  margin-right: 0px;
}
</style>
>
