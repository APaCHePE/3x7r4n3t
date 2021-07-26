<template>
  <div class="page-container positionRight">
    <!-- <div class="main-content body-full positionRight"> -->
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Ordenes</titulo-header><br />
      <div class="container">
        <div>
          <div class="row">
            <div class="col-md-4" style="float: left">N° de Orden</div>
            <div class="col-md-4" style="float: left">Fecha</div>
            <div class="col-md-4" style="float: left">Estado</div>
            <div class="col-md-4" style="float: left"></div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <el-input style="width: 200px" v-model="numeroOrden"></el-input>
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
              <el-select v-model="Estado" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.Estado"
                  :label="item.Estado"
                  :value="item.Estado"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <br />
          <el-button
            style="background-color: #51c1ff; width: 990px; color: #ffffff"
            icon="el-icon-search"
            @click="BuscarOrdenes()"
            >Buscar</el-button
          ><br /><br /><br />
        </div>
        <table id="example2" class="table table-hover table-sm mb-2">
          <thead>
            <tr>
              <th width="7%">Tipo</th>
              <th class="text-center">N° de Orden</th>
              <th class="text-center">Fecha</th>
              <th class="text-center">Importe</th>
              <th class="text-center">Importe Facturado</th>
              <th class="text-center">Saldo</th>
              <th class="text-center">Estado</th>
              <th class="text-center">Forma de pago</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of tableData" :key="'ordenes ' + item.idOrden">
              <td>
                <template>{{ item.tipoDocumentoNombre }}</template>
              </td>
              <td>
                <template>{{ item.nroOrden }}</template>
              </td>
              <td>
                <template>{{ item.fecha }}</template>
              </td>
              <td>
                <template>{{ item.importe }}</template>
              </td>
              <td>
                <template>{{ item.importeFacturado }}</template>
              </td>
              <td>
                <template>{{ item.saldo }}</template>
              </td>
              <td>
                <template>{{ item.estado }}</template>
              </td>
              <td>
                <template>{{ item.formaPago }}</template>
              </td>
              <td>
                <template
                  ><el-button
                    type="text"
                    @click="mostrarDetalleOrdendialog(item)"
                    >VER</el-button
                  ></template
                >
              </td>
            </tr>
          </tbody>
        </table>

        <el-dialog
          title="Detalle"
          :visible.sync="dialogVisible"
          width="50%"
        >
          <el-form>
            <el-form-item label="Importe">
             
              <table id="example2" class="table table-hover table-sm mb-2">
                <thead>
                  <tr>
                    
                    <th class="text-center">N° de Orden</th>
                    <th class="text-center">Código</th>
                    <th class="text-center">Descripcion</th>
                    <th class="text-center">Cantidad</th>
                    <th class="text-center">Precio Unitario</th>
                    <th class="text-center">IGV</th>
                    <th class="text-center">Total Soles</th>
                    <th class="text-center">total Dolares</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item2 of detalleOrden"
                    :key="'Ordenes ' + item2.numeroOrdenDetalle"
                  >
                    <td>
                      <template>{{ item2.numeroOrdenDetalle }}</template>
                    </td>
                    <td>
                      <template>{{ item2.codigo }}</template>
                    </td>
                    <td>
                      <template>{{ item2.descripcionOrden }}</template>
                    </td>
                    <td>
                      <template>{{ item2.cantidadOrden }}</template>
                    </td>
                    <td>
                      <template>{{ item2.precioUnitario }}</template>
                    </td> 
                    <td>
                      <template>{{ item2.precioDeIgv }}</template>
                    </td>
                    <td>
                      <template>{{ item2.totalSoles }}</template>
                    </td>
                    <td>
                      <template>{{ item2.totalDolares }}</template>
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
import TituloHeader from "@/components/utils/TituloHeader.vue";
import axios from "axios";
export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
      detalleOrden: null,
      detalleData: null,
      dialogVisible: false,
      numeroOrden: null,
      fecha: null,
      fechaInicio: null,
      fechaFin: null,
      Estado: null,
      options: [
        {
          Estado: "estado",
        },
      ],
      tableData: null,
    };
  },
  methods: {
    mostrarDetalleOrdendialog(valores) {
      this.dialogVisible = true;
      this.detalleOrden = valores.listaDetalles;
    },
    BuscarOrdenes() {
      let fechaInicio =
        this.fecha == null ? null : moment(this.fecha[0]).format("YYYY-MM-DD");
      let fechaFin =
        this.fecha == null ? null : moment(this.fecha[1]).format("YYYY-MM-DD");
      console.log(fechaInicio);
      console.log(fechaFin);
      axios
        .get("http://localhost:8090/api/admin/getOrdenes", {
          params: {
            nroOrden: this.numeroOrden,
            fecInicio: fechaInicio,
            nroDocumento: localStorage.getItem("User"),
            fecFin: fechaFin,
            estado: 2,
          },
        })
        .then((response) => {
          this.tableData = response.data.result;
          console.log(this.tableData);
        })
        .catch((e) => console.log(e));
    },
    mostrarDetalle(detalle) {
      (this.dialogVisible = true), (this.detalleData = detalle);
    },
  },
};
</script>

<style></style>
