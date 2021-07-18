<template>
  <div >

 <nav class="navbar navbar-expand-lg navbar-light navPrincipal" >      
   
  <b-button v-b-toggle.sidebar-1 variant="background-color: #ffffff;box-shadow: none" class="buttonMenu">
     <!-- <li class="sidebar-hide" style=" background-color: #ffffff "> -->
        <a id="left-sidebar-hide" href="#"> 
           <img src="../plugins/img/icons/ico-navbar.png" style="width: 25px; height: 25px;">
        </a> 
     <!-- </li> -->
  </b-button>
    
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a><img class="" src="../plugins/img/logo.png" width="100" height="30px"></a>
      <a class="nav-item nav-link" href="#">Pago a Proveedores</a>
    </div>
  </div>
  </nav>


    <!-- <b-button v-b-toggle.sidebar-1 style="float: left; background-color: #ffffff "><li class="sidebar-hide" style=" background-color: #ffffff "><a id="left-sidebar-hide" href="#"> <img src="../plugins/img/icons/ico-navbar.png" style="width: 50px; height: 50px;"></a> </li></b-button>
    <Sidebar/>
    <h2 style="float: left; background-color: #ffffff "><img class="" src="../plugins/img/logo.png" width="75" height="15px"></h2>
 </nav> -->
  
   <!-- FIN: MENU PRINCIPAL -->
     <!-- INICIO: CUERPO CONTENIDO -->
  <div class="ball-scale-multiple top-bar-fixed left-sidebar-fixed page-footer boxed-layout">
     <div class="container container-full">
        <Sidebar/>
        <div class="page-container">
           
           <div class="main-content body-full">
              <div class="content contentTG left-sidebar-toggle contenedor-opciones" style="min-height: 592px;">
                 <div class="container">
                    <div class="row mb25 mt25">
                       <div class="col-md-2"><img src="../plugins/img/icons/ico-etapa-gestion.png" alt="" style="width: 140px; height: 154px;" data-themekey="#"></div>
                       <div class="col-md-6">
                          <h2 class="t1">Bievenido(a)</h2>
                          <span class="t2" id="NombreCompleto"></span><span class="t3">al aplicativo <b>Pago a proveedores</b></span>
                       </div>
                    </div>
                     <div class="row mt15">
                        <div class="col-md-8">
                           <h3 class="subTitle options">Administración</h3>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-8 bloque">
                           <div class="options"><a href="estec-PV-Bandeja.html"><span class="spanHome">Mi cuenta</span></a></div>
                           <div class="options"><a href="estec-PV-Registro.html"><span class="spanHome">Mis Usuarios</span></a></div>
                         </div>
                        
                     </div>
                    <div class="row mt15">
                       <div class="col-md-8">
                          <h3 class="subTitle options">Documentos Electrónicos</h3>
                       </div>
                       <div class="clearfix"></div>
                       <div class="col-md-8 bloque">
                        <div class="options"><a href="estec-DE-Bandeja.html"><span class="spanHome">Bandeja</span></a></div>
                        <div class="options"><a href="estec-DE-Registro.html"><span class="spanHome">Registro</span></a></div>
                     </div>
                    </div>

                    <div class="row mt15">
                        <div class="col-md-8">
                           <h3 class="subTitle options">Documentos Físicos</h3>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-8 bloque">
                        <div class="options"><a href="estec-DF-Bandeja.html"><span class="spanHome">Bandeja</span></a></div>
                        <div class="options"><a href="estec-DF-Registro.html"><span class="spanHome">Registro</span></a></div>
                     </div>
                     </div>
                    <div class="clearfix mb15 mt15"></div>
                 </div>
              </div>
           </div>
        </div>
        <div>
           <div>
              <div></div>
           </div>
        </div>
     </div>
  </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
export default {
  components: { Sidebar },
data(){
   return{

   }
}
}
</script>

<style>

@import '../plugins/css/bootstrap/bootstrap.css'; 
 @import '../plugins/css/bootstrap/bootstrap-select.min.css';
@import '../plugins/css/bootstrap/bootstrap-datetimepicker.min.css';
@import '../plugins/css/bootstrap/bootstrap-multiselect.css';
 @import '../plugins/css/style.css'; 
@import '../plugins/css/main.css';
@import '../plugins/css/font-awesome.css';
@import '../plugins/css/responsive.css';

.contenedor-opciones{
   position: absolute
}
.options{
   display: flex;
}
.navPrincipal{
background-color: #ffffff;
box-shadow: 5px 10px 8px #c7c7c7;
}
.buttonMenu{
   float: left;
   box-shadow: none;
}
</style>