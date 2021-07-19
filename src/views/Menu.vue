<template>
  <div >

 <nav class="navbar navbar-expand-lg navbar-light navPrincipal " >      
   
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
 <Sidebar/>
   <!-- FIN: MENU PRINCIPAL -->
     <!-- INICIO: CUERPO CONTENIDO -->
  <div class="ball-scale-multiple top-bar-fixed left-sidebar-fixed page-footer boxed-layout">
     <div class="container container-full">
        <div v-if="comporenteMostrar">
             <MenuPrincipal />
             
         </div>
         <div v-else>
             <MiCuenta /> 
            <MisUsuarios /> 
         </div><br>
      
     </div>
  </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import MenuPrincipal from '../views/Opciones/menuPrincipal.vue'
import MiCuenta from '../views/Opciones/MiCuenta.vue'
import MisUsuarios from '../views/Opciones/MisUsuarios.vue' 
export default {
  components: { 
     Sidebar,
     MenuPrincipal,
     MiCuenta,
    MisUsuarios
     },
data(){
   return{
      comporenteMostrar: false,
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
box-shadow: 3px 2px 10px #c7c7c7;
}
.buttonMenu{
   float: left;
   box-shadow: none;
}
.positionRight{
  margin-right: 0px;
  display: flex;
}

</style>