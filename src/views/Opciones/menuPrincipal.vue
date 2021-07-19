<template>
    <div class="page-container positionRight" >
           
           <div class="main-content body-full positionRight" >
              <div class="content contentTG left-sidebar-toggle contenedor-opciones" style="min-height: 592px;">
                 <div class="container" >
                    <div class="row mb25 mt25">
                       <div class="col-md-2">
                           <img src="../../plugins/img/icons/ico-etapa-gestion.png" alt="" style="width: 140px; height: 154px;" data-themekey="#"> 
                       </div>
                       <div class="col-md-6">
                          <h2 class="t1">Bievenido(a)</h2>
                          <span class="t2" id="NombreCompleto"></span><span class="t3">al aplicativo <b>Pago a proveedores</b></span>
                       </div>
                    </div>
                  <div class="row" style="display: center">

                    <div class="card col-sm-2 offset-md-1" >
                        <div class="card-header" style="color:#51c1ff2">
                           Administración
                        </div>
                        <div class="card-body">
                           
                           <div class="options"><a href="estec-PV-Bandeja.html"><span style="color:#000000">Mi cuenta</span></a></div>
                           <div class="options"><a href="estec-PV-Registro.html"><span style="color:#000000">Mis Usuarios</span></a></div>                           
                           
                        </div>
                        </div>
                     

                     <div class="card col-sm-2 offset-md-1" >
                        <div class="card-header" style="color:#51c1ff2" > 
                           Documentos Físicos
                        </div>
                        <div class="card-body">
                         
                           <div class="options"><a href="estec-DE-Bandeja.html"><span style="color:#000000">Bandeja</span></a></div>
                           <div class="options"><a href="estec-DE-Registro.html"><span style="color:#000000">Registro</span></a></div>
                         
                        </div>
                        </div>


                     <div class="card col-sm-2 offset-md-1">
                        <div class="card-header" style="color:#51c1ff2" >
                           Documentos Electrónicos
                        </div>
                        <div class="card-body">
                         
                        <div class="options"><a href="estec-DF-Bandeja.html"><span style="color:#000000">Bandeja</span></a></div>
                        <div class="options"><a href="estec-DF-Registro.html"><span style="color:#000000">Registro</span></a></div>
                       
                        </div>
                        </div><p style="color: #ffffff"><br>salto<br></p>



                    <div class="card col-sm-2 offset-md-1" >
                        <div class="card-header" style="color:#51c1ff2">
                           Administración
                        </div>
                        <div class="card-body">
                           
                           <div class="options"><a href="estec-PV-Bandeja.html"><span style="color:#000000">Mi cuenta</span></a></div>
                           <div class="options"><a href="estec-PV-Registro.html"><span style="color:#000000">Mis Usuarios</span></a></div>                           
                           
                        </div>
                        </div>
                     

                     <div class="card col-sm-2 offset-md-1" >
                        <div class="card-header" style="color:#51c1ff2" > 
                           Documentos Físicos
                        </div>
                        <div class="card-body">
                         
                           <div class="options"><a href="estec-DE-Bandeja.html"><span style="color:#000000">Bandeja</span></a></div>
                           <div class="options"><a href="estec-DE-Registro.html"><span style="color:#000000">Registro</span></a></div>
                         
                        </div>
                        </div>


                     <div class="card col-sm-2 offset-md-1">
                        <div class="card-header" style="color:#51c1ff2" >
                           Documentos Electrónicos
                        </div>
                        <div class="card-body">
                         
                        <div class="options"><a href="estec-DF-Bandeja.html"><span style="color:#000000">Bandeja</span></a></div>
                        <div class="options"><a href="estec-DF-Registro.html"><span style="color:#000000">Registro</span></a></div>
                       
                        </div>
                        </div>

                        
                  </div> 
                    
                 </div>
              </div>
           </div>
        </div>
</template>

<script>
export default {
name: 'menuPrincipal',
}
</script>

<style>
@import '../../plugins/css/bootstrap/bootstrap.css'; 
@import '../../plugins/css/bootstrap/bootstrap-select.min.css';
@import '../../plugins/css/bootstrap/bootstrap-datetimepicker.min.css';
@import '../../plugins/css/bootstrap/bootstrap-multiselect.css';
@import '../../plugins/css/style.css'; 
@import '../../plugins/css/main.css';
@import '../../plugins/css/font-awesome.css';
@import '../../plugins/css/responsive.css'; 

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
.positionRight{
  margin-right: 0px;
  display: flex;
}
</style>