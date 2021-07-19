<template>
<div class="main-content body-full positionRight" >
 <div class="content contentTG left-sidebar-toggle contenedor-opciones" style="min-height: 592px;">
  <div class="container" >
      <div id="miCuenta">
        <h2 class="titulo">Mis Datos</h2>
        <div id="detalleCuenta" class="textoCuenta">
            <div class="row">
                <div class="col-md-6">Razon Social: {{nombreRazonSocial}}</div>
                <div class="col-md-6">Ruc: {{numeroRuc}}</div>
            </div><br>
            <div class="row">
                <div class="col-md-6">Cuenta Administardora: {{cuenta}}</div>
                <div class="col-md-6">Teléfono / Celular principal: {{telefono}}</div>
            </div>
        </div>
      </div>

        <div>
          <h2 class="titulo2">Mis Contactos</h2>
          <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <div class="col-md-2 ">Cargo</div>
                <div class="col-md-2">Nombres</div>
                <div class="col-md-2">Correo</div>
                <div class="col-md-2">Teléfono</div>
            </div>
             <div class="row">
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
            </div>
        </div>
        </div>



      <div>
          <h2 class="titulo2">Cuentas Bancarias</h2>
          <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <div class="col-md-2 ">Entidad Bancaria</div>
                <div class="col-md-2">Moneda</div>
                <div class="col-md-2">N° Cuenta</div>
                <div class="col-md-2">CCI</div>
            </div>
            <div class="row">
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
            </div>
            
            <div class="añadir" >
                <u @click="añadirCuenta()" style="text-decoration: none;">
            + añadir cuenta</u>
                </div>
        </div>
    </div>
    <div>
          <h2 class="titulo2">Cuenta de Detraccíon</h2>
          <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <div class="col-md-2">Entidad Bancaria</div>
                <div class="col-md-2">Moneda</div>
                <div class="col-md-2">N° Cuenta</div>
            </div>
            <div class="row">
                <div class="col-md-2"><input class="form-control form-control-merge" v-model="entidadDetraccion" disabled ></div>
                <div class="col-md-2"><input class="form-control form-control-merge" v-model="monedaDetraccion" disabled></div>
                <div class="col-md-2"><input class="form-control form-control-merge"></div>
            </div>
        </div>
    </div>
  </div>
 </div>
</div>
</template>

<script>

export default {
data(){
    return{
        nombreRazonSocial:null,
        numeroRuc:null,
        cuenta:null,
        telefono:null,
        entidadDetraccion: 'Banco de la Nacion',
        monedaDetraccion: 'soles'
    }
},
methods:{
    
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
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;

color: #727272;

width: 300px;
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
font-size: 29px;
line-height: 47px;

color: #727272;
width: 1020px;
    height: 80px;
    display: inline-flex;

}
.añadir{
    color: #51c1ff;
    text-align: right;
    margin-right: 370px;
}
</style>