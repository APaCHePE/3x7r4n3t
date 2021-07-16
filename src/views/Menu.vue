<template>
  <div class="ball-scale-multiple top-bar-fixed left-sidebar-fixed page-footer boxed-layout">
    <!-- INICIO: CABECERA -->
    <!-- <div class="top-bar">
        <div class="container container-full contenedor-opciones">
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
    </div> -->
    <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
    <!-- FIN: CABECERA -->
  <!-- INICIO: MENU PRINCIPAL -->
    <div class="left-sidebar-wrapper">
        <div class="left-sidebar left-sidebar-toggle">
            <div class="scroll-area">
                <ul class="sidebar-nav" data-open-speed="250" data-close-speed="200" data-easing="linear">
                    <li class="waves-effect"><a href="estec-Inicio.html" title="Inicio"><img src="../plugins/img/icons/ico-menu-inicio.png"><span
                                class="nav-item-text">Inicio</span></a> </li>
                      <li class="waves-effect"><a href="#" title="Administracion"><img src="../plugins/img/icons/ico-menu-administracion-sistema.png"><span
                                class="nav-item-text">Administración</span></a>
								<ul class="sub-nav" role="menu">
							<li class="waves-effect"><a href="estec-PV-Bandeja.html">Mi Cuenta</a></li>
                            <li class="waves-effect"><a href="estec-PV-Registro.html">Mis Usuarios</a></li>
                            
                        </ul>
                    </li>
                    <li class="waves-effect"><a href="#" title="Documentos Electrónicos"><img src="../plugins/img/icons/ico-menu-inbox.png"><span
                                class="nav-item-text">Documentos Electrónicos</span></a>
                        <ul class="sub-nav" role="menu">
                            <li class="waves-effect"><a src="/Bandeja.vue">Bandeja</a></li>
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
                    
                </ul>
            </div>
        </div>
    </div>
    <!-- FIN: MENU PRINCIPAL -->
     <!-- INICIO: CUERPO CONTENIDO -->
     <div class="container container-full">
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
                       <!-- <div class="col-md-4"><span class="pregunta">¿Que deseas hacer hoy?</span><img src="../plugins/img/icons/bg-blue.png" alt="" data-themekey="#"></div> -->
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
@import '../plugins/css/main.css';
@import '../plugins/css/font-awesome.css';
@import '../plugins/css/responsive.css';

.contenedor-opciones{
   position: absolute
}
.options{
   display: flex;
}
</style>