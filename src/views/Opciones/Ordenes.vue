<template>
  <div class="page-container positionRight">
    <div class="main-content body-full positionRight">
      <div
        class="content contentTG left-sidebar-toggle contenedor-opciones"
        style="min-height: 592px"
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
          <el-table :data="tableData" style="width: 120%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <p>Ruc: {{ props.row.Ruc }}</p>
                <p>Proveedor: {{ props.row.Proveedor }}</p>
                <p>Moneda: {{ props.row.Moneda }}</p>
                <p>Forma de pago: {{ props.row.formaPago }}</p>
                <p>Solicitante: {{ props.row.Solicitante }}</p>
                <p>Observaciones: {{ props.row.Observaciones }}</p>
                <p>Descripcion: {{ props.row.Descripcion }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="tipoDato" label="Tipo"> </el-table-column>
            <el-table-column prop="tipoDato" label="Tipo"> </el-table-column>
            <el-table-column
              prop="numOrdenDato"
              label="N° de Orden"
            ></el-table-column>
            <el-table-column prop="fechDato" label="Fecha"> </el-table-column>
            <el-table-column
              prop="importeDato"
              label="Importe"
            ></el-table-column>
            <el-table-column
              prop="imporFacDato"
              label="Importe Facturado"
            ></el-table-column>
            <el-table-column prop="saldoDato" label="Saldo"> </el-table-column>
            <el-table-column prop="estadoDato" label="Estado"></el-table-column>
            <!-- <el-table-column
              fixed="right"
              label="Operaciones"
              width="120">
              <template slot-scope = "scope">
                <el-button @click="mostrarDetalle(scope)" size="small">Detalle</el-button>
                
              </template>
            </el-table-column> -->
          </el-table>
          <!-- <el-dialog
                title="Detalle"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose" >
                <el-form>
                  <el-form-item label="Detalle">
                    <p>{{detalleData}}</p>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">Cerrar</el-button>
                 
                </span>
              </el-dialog> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import TituloHeader from "@/components/utils/TituloHeader.vue";

export default {
  components: {
    TituloHeader,
  },
  data() {
    return {
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

      tableData: [
        {
          tipoDato: "Factura",
          numOrdenDato: "123",
          fechDato: "2016-05-03",
          importeDato: "10",
          imporFacDato: "100",
          saldoDato: "30",
          estadoDato: "Pagado",
          Ruc: null,
          Proveedor: null,
          Moneda: null,
          formaPago: null,
          Solicitante: null,
          Observaciones: null,
          Descripcion: null,
        },
      ],
    };
  },
  methods: {
    BuscarOrdenes() {
      let fechaInicio =
        this.fecha == null ? "" : moment(this.fecha[0]).format("YYYY-MM-DD");
      let fechaFin =
        this.fecha == null ? "" : moment(this.fecha[1]).format("YYYY-MM-DD");
      console.log(fechaInicio);
      console.log(fechaFin);
    },
    mostrarDetalle(detalle) {
      (this.dialogVisible = true), (this.detalleData = detalle);
    },
  },
};
</script>

<style></style>
