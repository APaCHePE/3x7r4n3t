<template>
<div class="page-container positionRight" >
<div class="main-content body-full positionRight" >
 <div class="content contentTG left-sidebar-toggle contenedor-opciones" style="min-height: 592px;">
  <titulo-header>Mis Contactos</titulo-header><br>
  <div class="container" >
        <div>
          <!-- <h2 class="titulo">Mis Contactos</h2> -->
          <div id="cuentasBAncarias" class="textoCuenta2">
               <!-- <div>
                <b-table striped hover :items="items" :fields="fields"  style="width: 90%;"></b-table>
            </div>  -->

            <el-table
      :data="tableData"
      style="width: 90%">
      <el-table-column
        prop="cargo"
        label="Cargo"
        width="130">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Nombre"
        width="180">
      </el-table-column>
      <el-table-column
        prop="correo"
        label="Correo"
        width="250">
      </el-table-column>
       <el-table-column
        prop="number"
        label="Teléfono"
        width="100">
      </el-table-column>
      <el-table-column
        prop="editar"
        width="100">
        <el-button>Editar</el-button>
      </el-table-column>
    </el-table>
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
data(){
    return{
        tableData: [{
          cargo: 'Director',
          name: 'Tom',
          correo: 'No. 189, Grove St, Los Angeles',
          number: '987654321'
        }, {
          cargo: 'Director',
          name: 'Tom',
          correo: 'No. 189, Grove St, Los Angeles',
          number: '987654321'
        }, {
          cargo: 'Director',
          name: 'Tom',
          correo: 'No. 189, Grove St, Los Angeles',
          number: '987654321'
        }, {
          cargo: 'Director',
          name: 'Tom',
          correo: 'No. 189, Grove St, Los Angeles',
          number: '987654321'
        }],


        nombreRazonSocial:null,
        numeroRuc:null,
        cuenta:null,
        telefono:null,
        entidadDetraccion: 'Banco de la Nacion',
        monedaDetraccion: 'soles'
    }
},
methods:{
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    



    añadirCuenta(){
        
        this.$swal({
                  title: "Nueva Cuenta",
  text: "Espacio para anadir una nueva cuenta bancaria",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  inputPlaceholder: "Write something"
});

}
}
}
</script>

<style>
.textoCuenta{
    text-align: left;
    width: 950px;
    margin-left: 65px;

    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;

}
.textoCuenta2{
    text-align: left;
    margin-left: 65px;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
}
.titulo{
font-family: roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;

color: #727272;

width: 280px;
height: 70px;
}
/* .inputEntrada{
border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-color: #b1b1b78c;
} */
.titulo2{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 47px;
color: #51c1ff;
width: 1020px;
height: 50px;
display: inline-flex;

}
.añadir{
    color: #51c1ff;
    text-align: right;
    margin-right: 370px;
}
</style>