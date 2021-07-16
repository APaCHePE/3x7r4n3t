<template>
  <div class="ball-scale-multiple top-bar-fixed left-sidebar-fixed page-footer boxed-layout">
    <!-- INICIO: CABECERA -->
    <header class="top-bar">
        <div class="container container-full">
            <nav class="navbar navbar-default">
                <ul class="nav navbar-nav navbar-left">
                    <li class="sidebar-toggle"><a id="left-sidebar-toggle" href="#"> <img src="../plugins/img/icons/ico-navbar.png">
                        </a> </li>
                    <li class="sidebar-hide"><a id="left-sidebar-hide" href="#"> <img src="../plugins/img/icons/ico-navbar.png">
                        </a> </li>
                    <li class="sidebar-toggle separador-vertical-ico-menu"></li>
                    <li class="page-title ml20 mr20">
                        <h2><img class="" src="../plugins/img/logo.png" width="75" height="15px"></h2>
                    </li>
                    <li class="separador-vertical-ico-menu "></li>
                    <li class="page-sistema ml20">
                        <h2>Pago a proveedores</h2>
                    </li>
                </ul>
           
            </nav>
        </div>
    </header>
    <!-- FIN: CABECERA -->
  <!-- INICIO: MENU PRINCIPAL -->
    <div class="left-sidebar-wrapper">
        <div class="left-sidebar left-sidebar-toggle">
            <div class="scroll-area">
                <ul class="sidebar-nav" data-open-speed="250" data-close-speed="200" data-easing="linear">
                    <li class="waves-effect"><a href="estec-Inicio.html" title="Inicio"><img src="../plugins/img/icons/ico-menu-inicio.png"><span
                                class="nav-item-text">Inicio</span></a> </li>
                    <li class="waves-effect"><a href="#" title="Documentos Electrónicos"><img src="../plugins/img/icons/ico-menu-inbox.png"><span
                                class="nav-item-text">Documentos Electrónicos</span></a>
                        <ul class="sub-nav" role="menu">
                            <li class="waves-effect"><a href="estec-DE-Bandeja.html">Bandeja</a></li>
							<li class="waves-effect"><a href="estec-DE-Registro.html">Registro</a></li>
                        </ul>
                    </li>
                    <li class="waves-effect"><a href="#" title="Documentos Físicos"><img src="../plugins/img/icons/ico-menu-inbox.png"><span
                                class="nav-item-text">Documentos Físicos</span></a>
                        <ul class="sub-nav" role="menu">
                            <li class="waves-effect"><a href="estec-DF-Bandeja.html">Bandeja</a></li>
                            <li class="waves-effect"><a href="estec-DF-Registro.html">Registro</a></li>
                        </ul>
                    </li>
                     <!-- <li class="waves-effect"><a href="#" title="Seguridad"><img src="../plugins/img/icons/ico-menu-seguridad.png"><span
                                class="nav-item-text">Seguridad</span></a>
								<ul class="sub-nav" role="menu">
                            <li class="waves-effect"><a href="estec-Perfil.html">Perfil</a></li>
                            
                        </ul>
                    </li> -->
                    <li class="waves-effect"><a href="#" title="Administracion"><img src="../plugins/img/icons/ico-menu-administracion-sistema.png"><span
                                class="nav-item-text">Administración</span></a>
								<ul class="sub-nav" role="menu">
							<li class="waves-effect"><a href="estec-PV-Bandeja.html">Bandeja</a></li>
                            <li class="waves-effect"><a href="estec-PV-Registro.html">Nuevo Usuario</a></li>
                            
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- FIN: MENU PRINCIPAL -->
     <!-- INICIO: CUERPO CONTENIDO -->
     <div class="container container-full">
        <div class="page-container">
           <div class="main-content body-full">
              <div class="content contentTG left-sidebar-toggle" style="min-height: 592px;">
                 <div class="container">
                    <div class="row mb25 mt25">
                       <div class="col-md-2"><img src="../plugins/img/icons/ico-etapa-gestion.png" alt="" style="width: 140px; height: 154px;" data-themekey="#"></div>
                       <div class="col-md-6">
                          <h2 class="t1">Bievenido(a)</h2>
                          <span class="t2" id="NombreCompleto"></span><span class="t3">al aplicativo <b>Pago a proveedores</b></span>
                       </div>
                       <div class="col-md-4"><span class="pregunta">¿Que deseas hacer hoy?</span><img src="../plugins/img/icons/bg-blue.png" alt="" data-themekey="#"></div>
                    </div>
                    <div class="row mt15">
                       <div class="col-md-12">
                          <h3 class="subTitle">Documentos Electrónicos</h3>
                       </div>
                       <div class="clearfix"></div>
                       <div class="col-md-3 bloque">
                          <div class="cajaUnica"><a href="estec-DE-Bandeja.html"><img src="../plugins/img/icons/ico-menu-inbox.png" alt="" style="width: 60px; height: 60px;" data-themekey="#"><span class="spanHome">  Bandeja</span></a></div>
                       </div>
                       <div class="col-md-3 bloque">
                        <div class="cajaUnica"><a href="estec-DE-Registro.html"><img src="../plugins/img/icons/ico-etapa-bitacora.png" alt="" style="width: 60px; height: 60px;" data-themekey="#"><span class="spanHome">  Registro</span></a></div>
                     </div>
                    </div>

                    <div class="row mt15">
                        <div class="col-md-12">
                           <h3 class="subTitle">Documentos Físicos</h3>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-3 bloque">
                           <div class="cajaUnica"><a href="estec-DF-Bandeja.html"><img src="../plugins/img/icons/ico-menu-inbox.png" alt="" style="width: 60px; height: 60px;" data-themekey="#"><span class="spanHome">  Bandeja</span></a></div>
                        </div>
                        <div class="col-md-3 bloque">
                         <div class="cajaUnica"><a href="estec-DF-Registro.html"><img src="../plugins/img/icons/ico-etapa-bitacora.png" alt="" style="width: 60px; height: 60px;" data-themekey="#"><span class="spanHome">  Registro</span></a></div>
                      </div>
                     </div>

                     <!-- <div class="row mt15">
                        <div class="col-md-12">
                           <h3 class="subTitle">Seguridad</h3>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-3 bloque">
                           <div class="cajaUnica"><a href="estec-Perfil.html"><img src="../plugins/img/icons/ico-manual.png" alt="" style="width: 60px; height: 60px;" data-themekey="#"><span class="spanHome">  Perfil</span></a></div>
                        </div>
                        
                     </div> -->

                     <div class="row mt15">
                        <div class="col-md-12">
                           <h3 class="subTitle">Administración</h3>
                        </div>
                        <div class="clearfix"></div>
                        <div class="col-md-3 bloque">
                           <div class="cajaUnica"><a href="estec-PV-Bandeja.html"><img src="../plugins/img/icons/ico-group.png" alt="" style="width: 60px; height: 60px;" data-themekey="#"><span class="spanHome">  Bandeja</span></a></div>
                        </div>

                        <div class="col-md-3 bloque">
                            <div class="cajaUnica"><a href="estec-PV-Registro.html"><img src="../plugins/img/icons/ico-etapa-bitacora.png" alt="" style="width: 60px; height: 60px;" data-themekey="#"><span class="spanHome">  Registro</span></a></div>
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
</template>

<script>
export default {

}
</script>

<style>

@import '../plugins/css/bootstrap/bootstrap.css'; 
 @import '../plugins/css/bootstrap/bootstrap-select.min.css';
@import '../plugins/css/bootstrap/bootstrap-datetimepicker.min.css';
@import '../plugins/css/bootstrap/bootstrap-multiselect.css';
 @import '../plugins/css/style.css'; 
/*@import '../plugins/css/main.css';
@import '../plugins/css/font-awesome.css';*/ 
/* @import '../plugins/css/responsive.css'; */
 @import url('https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js') 

</style>