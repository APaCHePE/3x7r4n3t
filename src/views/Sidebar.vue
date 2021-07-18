<template>
  <b-sidebar id="sidebar-1"  shadow>
      <div class="left-sidebar-wrapper">
        <div >
            <div class="scroll-area">
                <ul class="sidebar-nav" data-open-speed="250" data-close-speed="200" data-easing="linear">
                   
                    <li ><a href="estec-Inicio.html" title="Inicio"><img src="../plugins/img/icons/ico-menu-inicio.png"><span
                                class="nav-item-text">Inicio</span></a> 
                    </li>

                    <li><a href="#" title="Administracion"><img src="../plugins/img/icons/ico-menu-administracion-sistema.png"><span
                                class="nav-item-text">Administración</span></a>
						
                         <ul role="menu">
							<li><a href="#">Mi Cuenta</a></li>
                            <li><a href="#">Mis Usuarios</a></li>
                            
                        </ul> 


                    </li>
                    <li ><a href="#" title="Documentos Electrónicos"><img src="../plugins/img/icons/ico-menu-inbox.png"><span
                                class="nav-item-text">Documentos Electrónicos</span></a>
                       
                       
                       <ul role="menu">
                            <li><a src="#">Bandeja</a></li>
							<li><a href="#">Registro</a></li>
                        </ul> 


                    </li>
                    <li ><a href="#" title="Documentos Físicos"><img src="../plugins/img/icons/ico-menu-inbox.png"><span
                                class="nav-item-text">Documentos Físicos</span></a>
                        
                        
                       <ul role="menu">
                            <li ><a href="#">Bandeja</a></li>
                            <li ><a href="#">Registro</a></li>
                        </ul> 

                    </li>
                </ul>
            </div>
        </div>
    </div>
    </b-sidebar>
</template>

<script>
export default {
    name: 'sidebar',

}
</script>

<style>

</style>