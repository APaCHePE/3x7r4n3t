<template>
  <div class="main-content body-full positionRight" >
  <div class="content contentTG left-sidebar-toggle contenedor-opciones" style="min-height: 592px;">
  <div class="container" >
      <div id="misUsuarios">
          <h2 class="titulo">Mis Usuarios</h2>
          <div id="cuentasBAncarias" class="textoCuenta2">
           <div class="row">
                <!-- <div class="col-md-2">Cargo</div> -->
                <div class="col-md-3">Nombres</div>
                <div class="col-md-3">Correo</div>
                
                <div class="col-md-3">Clave</div>
            </div>
            <div class="row" v-for="(item, index) in Usuarios" :key="index">
                <!-- <div class="col-md-3"><input class="form-control form-control-merge" v-model="item.cargo"></div> -->
                <div class="col-md-3"><input class="form-control form-control-merge" v-model="item.nombres"></div>
                <div class="col-md-3"><input class="form-control form-control-merge" v-model="item.correo"></div>
                <div class="col-md-3" @click="cambiarContraseña()" ><input type="password" class="form-control form-control-merge" v-model="item.clave" disabled></div>
            <br><br> 
            </div>
            <div class="añadir" >
                <u @click="añadirCuenta()" style="text-decoration: none;">
            + añadir usuario</u>
                </div>
        </div>
      </div>
</div></div></div> 
</template>

<script>
export default {
    data(){
        return{
            Usuarios:[
                {
                idUsuario:1,
                cargo:'Director',
                nombres:'jose pablo',
                correo:'jose@pablo',
                clave:'qwqwq'
            },
             {
                idUsuario:1,
                cargo:'Director',
                nombres:'jose pablo',
                correo:'jose@pablo',
                clave:'qwqwq'
            },
             {
                idUsuario:1,
                cargo:'Director',
                nombres:'jose pablo',
                correo:'jose@pablo',
                clave:'qwqwq'
            },
             {
                idUsuario:1,
                cargo:'Director',
                nombres:'jose pablo',
                correo:'jose@pablo',
                clave:'qwqwq'
            }
            ]
            

        }
    },
    methods:{
        añadirCuenta(){
        
        this.$swal({
                  title: "Nuevo Usuario",
  text: "Espacio para anadir un nuevo usuario",
  type: "input",
  showCancelButton: true,
  closeOnConfirm: false,
  inputPlaceholder: "Write something"
});
    },

    cambiarContraseña(){
        this.$swal({
                  title: "Cambiar Contraseña",
                text: "Espacio para editar contraseña",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                inputPlaceholder: "Write something"
});
    }

}}
</script>

<style>
.textoCuenta2{
    text-align: left;
    margin-left: 65px;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
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
.form-control form-control-merge{
border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-color: #b1b1b78c;
}
.titulo2{
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 29px;
line-height: 47px;

color: #727272;

width: 350px;
height: 70px;
}
.añadir{
    color: #51c1ff;
    text-align: right;
    margin-right: 370px;
}
</style>