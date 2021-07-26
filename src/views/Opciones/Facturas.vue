<template>
  <div class="page-container positionRight">
    <!-- <div class="main-content body-full positionRight"> -->
    <div
      class="content contentTG left-sidebar-toggle contenedor-opciones"
      style="min-height: 592px; margin-left: 70px"
    >
      <titulo-header>Facturas</titulo-header><br />
      <div class="container">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label" class="menu"
              ><i class="el-icon-search"></i> Busqueda</span
            >
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
                  <th class="text-center">Subtotal</th>
                  <th class="text-center">Total</th>
                  <th class="text-center">Cod Vendedor</th>
                  <th class="text-center" width="7%"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item of tableData" :key="'facturas ' + item.numeroFactura">
                  <td>
                    <template>{{ item.numeroFactura }}</template>
                  </td>
                  <td>
                    <template>{{ item.fecha }}</template>
                  </td>
                  <td>
                    <template>{{ item.moneda }}</template>
                  </td>
                  <td>
                    <template>{{ item.igv }}</template>
                  </td>
                  <td>
                    <template>{{ item.subTotal }}</template>
                  </td>
                  <td>
                    <template>{{ item.total }}</template>
                  </td>
                  <td>
                    <template>{{ item.vendedor }}</template>
                  </td>
                  <td>
                    <template
                      ><el-button
                        type="text"
                        @click="mostrarDetalleFacturadialog(item)"
                        >VER</el-button
                      ></template
                    >
                  </td>
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
                        v-for="item2 of detalleOrden"
                        :key="'Ordenes ' + item2.codigo_producto"
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
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label" class="menu"
              ><i class="el-icon-folder-opened"></i> Añadir</span
            >
            <br />
            <div class="row">
              <div class="col-md-4" style="float: left">
                Fecha de Vencimiento
              </div>
              <div class="col-md-4" style="float: left">Fecha de Emisión</div>
              <div class="col-md-4" style="float: left">Tipo Moneda</div>
            </div>
            <div class="row">
              <div class="col-md-4" style="float: left">
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="Pick a day"
                >
                </el-date-picker>
              </div>
              <div class="col-md-4" style="float: left">
                <el-date-picker
                  v-model="value2"
                  type="date"
                  placeholder="Pick a day"
                >
                </el-date-picker>
              </div>
              <div class="col-md-4" style="float: left">
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
            <div class="añadir">
              <el-button type="text" @click="dialogVisible = true"
                >+ añadir items</el-button
              >
            </div>
            <br /><br />

            <div v-if="dialogVisible">
              <div class="row">
                <!-- <div class="col-md-2">Cargo</div> -->
                <div class="col-md-4" style="float: left">Código</div>
                <div class="col-md-4" style="float: left">Descripcion</div>
                <div class="col-md-4" style="float: left">Valor Unitario</div>
              </div>
              <div class="row">
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
              </div>
              <br />

              <div class="row">
                <div class="col-md-4" style="float: left">IGV</div>
                <div class="col-md-4" style="float: left">Valor Venta</div>
              </div>
              <div class="row">
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-input autocomplete="off"></el-input>
                </div>
                <div class="col-md-4" style="float: left">
                  <el-button>+ agregar</el-button>
                </div>
              </div>
              <br /><br />

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span><h2>ITEMS</h2></span>
                  <el-table :data="tableData2" style="width: 100%">
                    <el-table-column prop="date" label="ITEM" width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="UNIDAD MEDIDA"
                      width="180"
                    >
                    </el-table-column>
                    <el-table-column prop="address" label="CANTIDAD">
                    </el-table-column>
                    <el-table-column prop="address" label="CODIGO">
                    </el-table-column>
                    <el-table-column prop="address" label="DESCRIPCIÓN">
                    </el-table-column>
                    <el-table-column prop="address" label="VALOR UNITARIO">
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
        </el-tabs>
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
          Estado: "estado",
        },
      ],
      tableData: null,
    };
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
            "http://localhost:8090/api/admin/getFacturas", {
              params:{
                "numeroFac": this.numeroFac,
                "fecInicio": fechaInicio,
               "nroDocumento": localStorage.getItem('User'),
                "fecFin": fechaFin,
                "estado": 2
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
  margin-right: 205px;
  font-size: 18px;
  margin-left: 205px;
}
.añadir {
  color: #51c1ff;
  text-align: right;
  margin-right: 60px;
}
</style>
