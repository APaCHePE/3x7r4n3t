<template>
  <div class="mi-cuenta">
    <div class="container contenedor-opciones">
      <titulo-header>Mis Datos</titulo-header><br />
      <div class="container-body">
        <div id="miCuenta"><br>
          <div style="font-size:12px; ">
            <el-row :gutter="10" class="d-flex justify-content-end">
              <el-col :md="6"><p><b>Razon Social:</b></p></el-col>
              <el-col :md="6"><p>{{ nombreRazonSocial }}</p> </el-col>
              <el-col :md="6"><p><b>Ruc:</b></p></el-col>
              <el-col :md="6"><p>{{ numeroRuc }}</p></el-col>
            </el-row>
            <el-row :gutter="10" class="d-flex justify-content-end">
              <el-col :md="6"><p><b>Cuenta:</b></p></el-col>
              <el-col :md="6"><p>{{ cuenta }}</p></el-col>
              <el-col :md="6"><p><b>Teléfono / Celular:</b></p></el-col>
              <el-col :md="6"><p>{{ telefono }}</p></el-col>
            </el-row>
          </div>

        </div>
        <br />
        <div>
          <div id="cuentasBAncarias" >

            <!-- <div class="table-responsive-sm">
              <table id="example2" class="table table-hover table-sm mb-2">
                <thead>
                  <tr>
                    <th class="text-center">Entidad Bancaria</th>
                    <th class="text-center">Moneda</th>
                    <th class="text-center">N° Cuenta</th>
                    <th class="text-center">CCI</th>
                    <th class="text-center" width="7%"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(item, iFacturas) of tableData"
                    :key="'cuentas_bancarias_' + iFacturas"
                  >
                    <td>
                      <template>{{ item.entidad }}</template>
                    </td>
                    <td>
                      <template>{{ item.moneda }}</template>
                    </td>
                    <td>
                      <template>{{ item.cCorriente }}</template>
                    </td>
                    <td>
                      <template>{{ item.cInterbancaria }}</template>
                    </td>
                    <td>
                      <template
                        ><button
                          type="button" class="btn btn-primary"
                          @click="dialogVisible = true"
                        >
                          VER
                        </button></template
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> -->

            <div class="añadir">
              <el-button type="text" @click="dialogVisible = true"
                >+ añadir cuenta</el-button
              >
            </div>
            <el-table
              :data="tableData"
              style="width: 90%;margin-left: auto; ">
              <el-table-column
                prop="entidad"
                label="Entidad Bancaria"
                width="250">
              </el-table-column>
              <el-table-column
                prop="moneda"
                label="Moneda"
                width="200">
              </el-table-column>
              <el-table-column
                prop="cCorriente"
                label="N° Cuenta"
                width="180">
              </el-table-column>
              <el-table-column
                prop="cInterbancaria"
                label="CCI"
                width="180">
              </el-table-column>
            </el-table><br><br>




            <h4 style="color:#5278d2">Cuentas Bancarias</h4><br>
               <div class="añadir" style="margin-top: -5%;">
              <el-button type="text" @click="dialogVisible = true"
                >+ añadir cuenta</el-button
              >
            </div>
            <el-table
              :data="tableData2"
              style="width: 90%;margin-left: auto; ">
              <el-table-column
                prop="entidad"
                label="Entidad Bancaria"
                width="250">
              </el-table-column>
              <el-table-column
                prop="moneda"
                label="Moneda"
                width="200">
              </el-table-column>
              <el-table-column
                prop="cCorriente"
                label="N° Cuenta"
                width="180">
              </el-table-column>
              <el-table-column
                prop="cInterbancaria"
                label="CCI"
                width="180">
              </el-table-column>
            </el-table><br>

            <!-- <div class="row">
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
            </div> -->

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
        </div><br><br>



        <div>
          <div id="cuentasBAncarias" class="textoCuenta">
            <h4 style="color:#5278d2">Cuentas Bancarias</h4><br>
             <el-table
              :data="tableData2"
              style="width: 90%;margin-left: auto; ">
              <el-table-column
                prop="entidad"
                label="Entidad Bancaria"
                width="250">
              </el-table-column>
              <el-table-column
                prop="moneda"
                label="Moneda"
                width="200">
              </el-table-column>
              <el-table-column
                prop="cCorriente"
                label="N° Cuenta"
                width="180">
              </el-table-column>
            </el-table><br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TituloHeader from "@/components/utils/TituloHeader.vue";
import "../../assets/style/micuenta.scss";

export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      tableData: [
        {
          entidad: "Banco de Credito del Peru",
          moneda: "Solex",
          cCorriente: "19190274632095",
          cInterbancaria: "100191902746320951",
        },
      ],
       tableData2: [
        {
          entidad: "",
          moneda: "",
          cCorriente: "",
          cInterbancaria: "",
        },
      ],
      dialogVisible: false,
      //datos principales 
      nombreRazonSocial: localStorage.getItem("nombreUsuario"),
      numeroRuc: localStorage.getItem("numeroDocumento"), 
      cuenta: localStorage.getItem("usuario"),
      telefono: localStorage.getItem("telefonoPrincipal"),
      //
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

