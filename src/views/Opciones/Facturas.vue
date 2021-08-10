<template>
  <div class="page-container">
    <!-- <div class="main-content body-full positionRight"> -->
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Facturas</titulo-header><br />
      <div class="container">
            <!-- <span slot="label" class="menu"
              ><i class="el-icon-search"></i> Busqueda</span
            > -->
            <div>
              <div class="row">
                <div class="col-md-4" style="float: left">N° de Factura</div>
                <div class="col-md-4" style="float: left">Fecha</div>
                <div class="col-md-4" style="float: left">Estado</div>
                <div class="col-md-4" style="float: left"></div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <el-input style="width: 200px" v-model="numeroFac"></el-input>
                </div>
                <div class="col-md-4">
                  <el-date-picker
                    v-model="fecha"
                    type="daterange"
                    range-separator="a"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                  >
                  </el-date-picker>
                </div>
                <div class="col-md-4">
                  <el-select v-model="Estado" placeholder="TODOS">
                    <el-option
                      v-for="item in options"
                      :key="item.Estado"
                      :label="item.nombre"
                      :value="item.valor"
                    >
                    </el-option>
                  </el-select>
                </div>
              </div>
              <br />
              <el-button
                style="background-color: #51c1ff; width: 900px; color: #ffffff"
                icon="el-icon-search"
                @click="BuscarFacturas()"
                >Buscar</el-button
              ><br /><br /><br />
            </div>

            <table id="example2" class="table table-hover table-sm mb-2">
              <thead>
                <tr>
                  <th class="text-center">Número Factura</th>
                  <th class="text-center">Fecha</th>
                  <th class="text-center">Moneda</th>
                  <th class="text-center">IGV</th>
                  <th class="text-center">Importe</th>
                  <th class="text-center">Saldo</th>
                  <th class="text-center">estado</th>
                  <!-- <th class="text-center" width="7%"></th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of tableData" :key="'facturas ' + item.numeroFactura">
                  <td>
                    <template>{{ item.numeroFactura }}</template>
                  </td>
                  <td>
                    <template>{{ item.fechaDocumento }}</template>
                  </td>
                  <td>
                    <template>{{ item.moneda }}</template>
                  </td>
                  <td>
                    <template>{{ item.igv }}</template>
                  </td>
                  <td>
                    <template>{{ item.importeSoles }}</template>
                  </td>
                  <td>
                    <template>{{ item.saldo }}</template>
                  </td>
                  <td>
                    <template>{{ item.estado }}</template>
                  </td>
                  <!-- <td>
                    <template
                      ><el-button
                        type="text"
                        @click="mostrarDetalleFacturadialog(item)"
                        >VER</el-button
                      ></template
                    >
                  </td> -->
                </tr>
              </tbody>
            </table>
            <el-dialog
              title="Detalle"
              :visible.sync="dialogVisibleDetalle"
              width="50%"
              :before-close="handleClose"
            >
              <el-form>
                <el-form-item label="Importe">
                  <table id="example2" class="table table-hover table-sm mb-2">
                    <thead>
                      <tr>
                        <th class="text-center">Código Producto</th>
                        <th class="text-center">Producto</th>
                        <th class="text-center">Unida</th>
                        <th class="text-center">Item</th>
                        <th class="text-center">Precio</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item2, index2) of detalleOrden"
                        :key="'Ordenes ' + index2"
                      >
                        <td>
                          <template>{{ item2.codigo_producto }}</template>
                        </td>
                        <td>
                          <template>{{ item2.producto }}</template>
                        </td>
                        <td>
                          <template>{{ item2.unidad }}</template>
                        </td>
                        <td>
                          <template>{{ item2.tipo_item }}</template>
                        </td>
                        <td>
                          <template>{{ item2.precio }}</template>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cerrar</el-button>
              </span>
            </el-dialog>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
import TituloHeader from "@/components/utils/TituloHeader.vue";

export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      numeroFac: null, //null,
      fecha: null,
      fechaInicio: null,
      fechaFin: null,
      Estado: null,
      dialogVisibleDetalle: false,
      dialogVisible: false,
      value1: null,
      value2: null,

      options: [
        {
          nombre: "CONSOLIDADO",
          valor: 'C'
        },{
          nombre: "RE-PROCESADA",
          valor: 'R'
        }
      ],
      tableData: null,
    };
  },
  created(){
    this.BuscarFacturas();
  },
  methods: {
    BuscarFacturas() {
      let fechaInicio =
        this.fecha == null ? null : moment(this.fecha[0]).format("YYYY-MM-DD");
      let fechaFin =
        this.fecha == null ? null : moment(this.fecha[1]).format("YYYY-MM-DD");
      console.log(fechaInicio);
      console.log(fechaFin);
       axios
          .get(
            "http://localhost:8090/api/admin/consultar-comprobante", {
              params:{
                "numeroFac": this.numeroFac,
                "fecInicio": fechaInicio,
                "nroDocumento": localStorage.getItem('User'),
                "fecFin": fechaFin,
                // "estado": 9
              }
            }
          )
          .then((response) => {
            this.tableData = response.data.result
            console.log(this.tableData);
          //  alert( response.data.result[0].numeroFactura);
          })
          .catch((e) => console.log(e));
    },

    mostrarDetalleFacturadialog(valores) {
      this.dialogVisibleDetalle = true;
      this.detalleOrden = valores.facturasDestalle;
    },
  },
};
</script>

<style>
.menu {
  margin-right: 105px;
  font-size: 18px;
  margin-left: 105px;
}
.añadir {
  color: #51c1ff;
  text-align: right;
  margin-right: 60px;
}
</style>
