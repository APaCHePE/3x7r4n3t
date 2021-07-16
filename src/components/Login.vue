<template>

  <div class="vertical-layout vertical-menu-modern blank-page navbar-floating footer-static ">
      <div class="app-content content ">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <div class="auth-wrapper auth-v2">
                    <div class="auth-inner row m-0">
                        <!-- Brand logo-->
                        <a class="brand-logo" href="javascript:void(0);">
                            <h2 class="brand-text text-primary ml-1">ESTEC</h2>
                        </a>
                        <!-- /Brand logo-->
                        <!-- Left Text-->
                        <div class="d-none d-lg-flex col-lg-8 align-items-center p-5">
                            <div class="w-100 d-lg-flex align-items-center justify-content-center px-5"><img class="img-fluid" :src="logo_v2" alt="Login V2" /></div>
                        </div>
                        <!-- /Left Text-->
                        <!-- Login-->
                        <div class="d-flex col-lg-4 align-items-center auth-bg px-2 p-lg-5">
                            <div class="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                                <h2 class="card-title font-weight-bold mb-1">ESTEC</h2>
                                <p class="card-text mb-2 ">Portal pago a provedores</p>
                                <form class="auth-login-form mt-2" action="maqueta/estec-DE-Bandeja.html" method="">
                                    <div class="form-group">
                                        <label class="form-label position-left size-text-login" for="login-email">Usuario</label>
                                        <input class="form-control" id="login-email" type="text" name="login-email2" placeholder="" aria-describedby="login-email" autofocus="" tabindex="1" />
                                    </div>
                                    <div class="form-group">
                                        <div class="d-flex justify-content-between">
                                            <label class="size-text-login" for="login-password">Contrase&ntilde;a</label><a href="RecuperarLogin.html"><small>Olvidaste tu contrase&ntilde;a?</small></a>
                                        </div>
                                        <div class="input-group input-group-merge form-password-toggle">
                                            <input class="form-control form-control-merge" id="login-password" type="password" name="login-password" placeholder="" aria-describedby="login-password" tabindex="2" />
                                            <!-- <div class="input-group-append"><span class="input-group-text cursor-pointer"><i data-feather="eye"></i></span></div> -->
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="custom-control custom-checkbox">
                                            <input class="custom-control-input" id="remember-me" type="checkbox" tabindex="3" />
                                            <label class="custom-control-label position-left size-text-login" for="remember-me"> Recordar Usuario</label>
                                        </div>
                                    </div>
                                    <router-link to="/login/0"><button class="btn btn-primary btn-block" tabindex="4">Ingresar</button></router-link>
                                </form>
								<p class="text-center mt-2"><a href="SolicitarCuenta.html"><span>&nbsp;Solicitar Cuenta</span></a></p>
                               
                            </div>
                        </div>
                        <!-- /Login-->
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  
</template>

 <script src="app-assets/js/scripts/pages/page-auth-login.js"></script>
<script>
import image from '@/assets/images/pages/login-v2.svg'

export default {
     name: "Login",
  data() {
    return {
        logo_v2: image
    };
  },
  created() {
     $(window).on('load', function() {
            if (feather) {
                feather.replace({
                    width: 14,
                    height: 14
                });
            }
        })
  },
  methods: {
   
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600');
@import '../assets/css/colors.css';
@import '../assets/css/bootstrap.css';
@import '../assets/css/bootstrap-extended.css';
@import '../assets/css/components.css';
@import '../assets/css/themes/dark-layout.css';
@import '../assets/css/themes/bordered-layout.css';
@import '../assets/css/themes/semi-dark-layout.css';
@import '../assets/css/core/menu/menu-types/vertical-menu.css';
@import '../assets/css/plugins/forms/form-validation.css';
@import '../assets/css/pages/page-auth.css'; 
@import '../assets/style.css'; 
.position-left{
    float: left;
}
.size-text-login{
    font-size: 13px;
}
</style>
