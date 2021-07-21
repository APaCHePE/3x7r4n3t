<template>
  <div class="page-container positionRight" >
<div class="main-content body-full positionRight" >
 <div class="content contentTG left-sidebar-toggle contenedor-opciones" style="min-height: 592px;">
  <titulo-header>Ordenes</titulo-header><br>
  <div class="container" >
<div>
    <div class="row" >
                <!-- <div class="col-md-2">Cargo</div> -->
                <div class="col-md-4" style="float:left">N° de Orden </div>
                <div class="col-md-4" style="float:left">Fecha</div>
               
                <div class="col-md-4" style="float:left">Estado </div>
                <div class="col-md-4" style="float:left"> </div>
</div>

<div class="row">
                <div class="col-md-4"><!-- <div class="col-md-2">Cargo</div> -->
                <el-input style="width: 200px;"></el-input>
                </div> <div class="col-md-4">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="a"
                  start-placeholder="Start date"
                  end-placeholder="End date">
                </el-date-picker>
                </div>
               <div class="col-md-4">  <el-select v-model="select" slot="prepend" placeholder="Select">
      <el-option label="Restaurant" value="1"></el-option>
      <el-option label="Order No." value="2"></el-option>
      <el-option label="Tel" value="3"></el-option>
    </el-select> </div>
                
                    
            
</div><br>
<el-button style="background-color: #51C1FF; width: 990px" icon="el-icon-search">Buscar</el-button><br><br><br>
  </div>
      <el-table
      :data="tableData"
      style="width: 120%">
      <el-table-column
        prop="date"
        label="Tipo">
      </el-table-column>
      <el-table-column
        prop="name"
        label="N° de Orden">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Fecha">
      </el-table-column>}
      <el-table-column
        prop="numero"
        label="Importe">
      </el-table-column>
       <el-table-column
        prop="numero"
        label="Importe Facturado">
      </el-table-column>
       <el-table-column
        prop="numero"
        label="Saldo">
      </el-table-column>
      <el-table-column
        prop="numero"
        label="Estado">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
        <u>ver</u>
      </el-table-column>
    </el-table>
  
  </div></div></div></div>
</template>

<script>
import TituloHeader from "@/components/utils/TituloHeader.vue";

export default {
components: {
    TituloHeader,
  },
  data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            numero: '1'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            numero: '1'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            numero: '1'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
            numero: '1'
          }]
        }
      }
}
</script>

<style>

</style>