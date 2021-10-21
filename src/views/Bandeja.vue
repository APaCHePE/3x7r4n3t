<template>
  <div class="ball-scale-multiple top-bar-fixed left-sidebar-fixed page-footer boxed-layout">
    <!-- INICIO: CABECERA -->
    <header class="top-bar">
        <div class="container container-full">
            <nav class="navbar navbar-default">
                <ul class="nav navbar-nav navbar-left">
                    <li class="sidebar-toggle"><a id="left-sidebar-toggle" href="#"> <img src="img/icons/ico-navbar.png">
                        </a> </li>
                    <li class="sidebar-hide"><a id="left-sidebar-hide" href="#"> <img src="img/icons/ico-navbar.png">
                        </a> </li>
                    <li class="sidebar-toggle separador-vertical-ico-menu"></li>
                    <li class="page-title ml20 mr20">
                        <h2><img class="" src="./img/logo.png" width="75" height="15px"></h2>
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
                    <li class="waves-effect"><a href="estec-Inicio.html" title="Inicio"><img src="img/icons/ico-menu-inicio.png"><span
                        class="nav-item-text">Inicio</span></a> </li>
                    <li class="waves-effect"><a href="#" title="Documentos Electrónicos"><img src="img/icons/ico-menu-inbox.png"><span
                                class="nav-item-text">Documentos Electrónicos</span></a>
                        <ul class="sub-nav" role="menu">
                            <li class="waves-effect"><a href="estec-DE-Bandeja.html">Bandeja</a></li>
							<li class="waves-effect"><a href="estec-DE-Registro.html">Registro</a></li>
                        </ul>
                    </li>
                    <li class="waves-effect"><a href="#" title="Documentos Físicos"><img src="img/icons/ico-menu-inbox.png"><span
                                class="nav-item-text">Documentos Físicos</span></a>
                        <ul class="sub-nav" role="menu">
                            <li class="waves-effect"><a href="estec-DF-Bandeja.html">Bandeja</a></li>
                            <li class="waves-effect"><a href="estec-DF-Registro.html">Registro</a></li>
                        </ul>
                    </li>
                     <li class="waves-effect"><a href="#" title="Seguridad"><img src="img/icons/ico-menu-seguridad.png"><span
                                class="nav-item-text">Seguridad</span></a>
								<ul class="sub-nav" role="menu">
                            <li class="waves-effect"><a href="estec-Perfil.html">Perfil</a></li>
                            
                        </ul>
                    </li>
                    <li class="waves-effect"><a href="#" title="Administracion"><img src="img/icons/ico-menu-administracion-sistema.png"><span
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
                <div class="content contentTG left-sidebar-toggle">
                    <div class="container container-full">
                        <div class="header-content mb20">
                            <h2 class="alinea-titulo">Documentos Electrónicos<span class="migaja">/ Bandeja</span></h2>
                            <div class="alinea-botones">
                                <button type="button" class="btn btn-default btn80 rippledefault ml5 mb5 mt5 btn-w110">Exportar</button>
                            </div>
                            <div class="nbsp"> </div>
                        </div>
                        <div class="clearfix mb20"></div>

                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-xs-12">
                                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                    <div class="panel panel-default mb20">
                                        <div class="panel-heading color30" role="tab" id="headingOne">
                                            <h4 class="panel-title"> <a role="button" data-toggle="collapse" href="#collapseOne"
                                                    aria-expanded="true" aria-controls="collapseOne"> Búsqueda</a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse mb10" role="tabpanel"
                                            aria-labelledby="headingOne" aria-expanded="false">
                                            <div class="panel-body">
                                                <div class="well-lg">
                                                    <div class="row">
                                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label class="text-label">Código: </label>
                                                                <input type="text" class="form-control" placeholder=""
                                                                    id="">
                                                            </div>
                                                        </div>
                                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label class="text-label">Descripción:</label>
                                                                <input type="text" class="form-control" placeholder=""
                                                                    id="">
                                                            </div>
                                                        </div>

                                                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                                            <div class="form-group">
                                                                <label class="text-label">Estado:</label>
                                                                <select id="cmbprueba1" class="form-control">
                                                                    <option>Seleccione</option>
                                                                    <option>Seleccione</option>
                                                                    <option>Seleccione</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                       
                                                        <div class="nbsp"></div>
                                                        <div class="alinea-botones-panel">
                                                            <button type="button" class="btn btn-default  ml5 mb5 mt5 btn-w110 rippledefault">Limpiar</button>
                                                            <button type="button" class="btn btn-primary  ml5 mb5 mt5 btn-w110 ripple">Buscar</button>
                                                            <div class="espacio"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!---->

                     

                        <!---->
                        <div class="row" onclick="window.open('estec-Detalle-Solicitud.html','mywindow');" style="cursor: pointer;">
                            <div class="col-lg-12 col-md-12">
                                <div class="panel panel-opciones mb20 mt0">
                                    <!--HEADING -->
                                    <div class="panel-heading panel-heading-icons p0pendiente">
                                        <div class="panel-title text-title-bandeja">
                                        </div>
                                    </div>
                                    <!--BODY -->
                                    <div class="panel-body panel-body-bandeja-tg">

                                        <div class="col-md-1 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Código:</dd>
                                                <dt class="redcode">
                                                    INC.0045</dt>
                                            </dl>
                                        </div>
										
										   <div class="col-md-2 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">OC:</dd>
                                                <dt class="text-desc-pendiente">
                                                    OC.0001
                                                </dt>
                                            </dl>
                                        </div>
										
                                        <div class="col-md-2 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Fecha Registro:</dd>
                                                <dt class="text-desc-pendiente">
                                                    14/04/2021</dt>
                                            </dl>
                                        </div>

                                        <div class="col-md-1 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Estado:</dd>
                                                <dt class="text-desc-pendiente">
                                                    Estado 1
                                                </dt>
                                            </dl>
                                        </div>
                                     
                                        <div class="col-md-3 col-sm-12 col-xs-12">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Descripción:</dd>
                                                <dt class="text-desc-pendiente">
                                                    No se ha cumplido con la estandarización de planes para</dt>
                                            </dl>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>

                        <!---->
                        <div class="row" onclick="window.open('estec-Detalle-Solicitud.html','mywindow');" style="cursor: pointer;">
                            <div class="col-lg-12 col-md-12">
                                <div class="panel panel-opciones mb20 mt0">
                                    <!--HEADING -->
                                    <div class="panel-heading panel-heading-icons p0pendiente">
                                        <div class="panel-title text-title-bandeja">
                                        </div>
                                    </div>
                                    <!--BODY -->
                                    <div class="panel-body panel-body-bandeja-tg">

                                        <div class="col-md-1 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Código:</dd>
                                                <dt class="redcode">
                                                    INC.0045</dt>
                                            </dl>
                                        </div>
										  <div class="col-md-2 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">OC:</dd>
                                                <dt class="text-desc-pendiente">
                                                    OC.0001
                                                </dt>
                                            </dl>
                                        </div>
                                      <div class="col-md-2 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Fecha Registro:</dd>
                                                <dt class="text-desc-pendiente">
                                                    14/04/2021</dt>
                                            </dl>
                                        </div>

                                        <div class="col-md-1 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Estado:</dd>
                                                <dt class="text-desc-pendiente">
                                                    Estado 1
                                                </dt>
                                            </dl>
                                        </div>
                                        <div class="col-md-3 col-sm-12 col-xs-12">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Descripción:</dd>
                                                <dt class="text-desc-pendiente">
                                                    No se ha cumplido con la estandarización de planes para</dt>
                                            </dl>
                                        </div>

                                        


                                    </div>
                                </div>
                            </div>
                        </div>
                        <!---->
                        <div class="row" onclick="window.open('estec-Detalle-Solicitud.html','mywindow');" style="cursor: pointer;">
                            <div class="col-lg-12 col-md-12">
                                <div class="panel panel-opciones mb20 mt0">
                                    <!--HEADING -->
                                    <div class="panel-heading panel-heading-icons p0pendiente">
                                        <div class="panel-title text-title-bandeja">
                                        </div>
                                    </div>
                                    <!--BODY -->
                                    <div class="panel-body panel-body-bandeja-tg">

                                        <div class="col-md-1 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Código:</dd>
                                                <dt class="redcode">
                                                    INC.0045</dt>
                                            </dl>
                                        </div>
										  <div class="col-md-2 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">OC:</dd>
                                                <dt class="text-desc-pendiente">
                                                    OC.0001
                                                </dt>
                                            </dl>
                                        </div>
                                       <div class="col-md-2 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Fecha Registro:</dd>
                                                <dt class="text-desc-pendiente">
                                                    14/04/2021</dt>
                                            </dl>
                                        </div>

                                       <div class="col-md-1 col-sm-3 col-xs-6">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Estado:</dd>
                                                <dt class="text-desc-pendiente">
                                                    Estado 1
                                                </dt>
                                            </dl>
                                        </div>
                                        <div class="col-md-3 col-sm-12 col-xs-12">
                                            <dl class="data-marg-bandeja">
                                                <dd class="text-label-pendiente">Descripción:</dd>
                                                <dt class="text-desc-pendiente">
                                                    No se ha cumplido con la estandarización de planes para</dt>
                                            </dl>
                                        </div>

                                        


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <button type="button" class="btn btn-default ml5 mb5 mt5 btn-w110 w100 rippledefault">Ver
                                    más</button>
                            </div>
                        </div>


</div>
</template>

<script>
export default {

}
</script>

<style>
</style>
