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
              <!-- <div class="col-md-2">Cargo</div> -->
              <div class="col-md-4">N° de Orden</div>
              <div class="col-md-4">Fecha</div>
              <div class="col-md-4">Estado</div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <!-- <div class="col-md-2">Cargo</div> -->
                <el-input style="width: 200px"></el-input>
              </div>
              <div class="col-md-4">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                >
                </el-date-picker>
              </div>

              <div class="col-md-4">
                <el-input style="width: 200px"></el-input>
              </div>
              <div></div>
            </div>
            <br />
            <el-button type="promary" style=" width: 980px" icon="el-icon-search">Buscar</el-button><br><br><br>
          </div>
          <el-table :data="tableData" style="width: 120%">
            <el-table-column prop="date" label="Fecha" width="180">
            </el-table-column>
            <el-table-column prop="name" label="Estado" width="230">
            </el-table-column>
            <el-table-column prop="address" width="500" label="Detalle">
            </el-table-column
            >}
            <el-table-column prop="numero" label="N° de Orden">
            </el-table-column>
            <el-table-column prop="file" label="">
              <el-button type="text">Ver</el-button>
            </el-table-column>
          </el-table>
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
      tableData: [
        {
          date: "2016-05-03",
          name: "PENDIENTE",
          address: "No. 189, Grove St, Los Angeles",
          numero: "1",
          file: "https://mz-services.miraflores.gob.pe:8090/api/files/recuperarEntidadArchivo/8707/0/1611430",
        },
        {
          date: "2016-05-02",
          name: "PENDIENTE",
          address: "No. 189, Grove St, Los Angeles",
          numero: "1",
          file: "https://mz-services.miraflores.gob.pe:8090/api/files/recuperarEntidadArchivo/8707/0/1611430",
        },
        {
          date: "2016-05-04",
          name: "PENDIENTE",
          address: "No. 189, Grove St, Los Angeles",
          numero: "1",
          file: "https://mz-services.miraflores.gob.pe:8090/api/files/recuperarEntidadArchivo/8707/0/1611430",
        },
        {
          date: "2016-05-01",
          name: "PENDIENTE",
          address: "No. 189, Grove St, Los Angeles",
          numero: "1",
          file: "https://mz-services.miraflores.gob.pe:8090/api/files/recuperarEntidadArchivo/8707/0/1611430",
        },
      ],
    };
  },
};
</script>

<style>
</style>