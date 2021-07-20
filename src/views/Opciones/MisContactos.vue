<template>
<div class="page-container positionRight" >
<div class="main-content body-full positionRight" >
 <div class="content contentTG left-sidebar-toggle contenedor-opciones" style="min-height: 592px;">
  <div class="container" >
        <div>
          <h2 class="titulo">Mis Contactos</h2>
          <div id="cuentasBAncarias" class="textoCuenta2">
               <div>
                <b-table striped hover :items="items" :fields="fields"  style="width: 90%;">
                    <button>sss</button>
                </b-table>
            </div>
           <!-- <div class="row">
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
            </div> -->
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
        fields: ['Cargo', 'Nombres', 'Correo','Teléfono', ' Acccion '],
        items: [
          { isActive: true, Teléfono: 40, Cargo: 'Dickerson', Nombres: 'Macdonald' },
          { isActive: false, Teléfono: 21, Cargo: 'Larsen', Nombres: 'Shaw' },
          { isActive: false, Teléfono: 89, Cargo: 'Geneva', Nombres: 'Wilson' },
          { isActive: true, Teléfono: 38, Cargo: 'Jami', Nombres: 'Carney' }
        ],
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