<template>
  <div>
    <form class="auth-login-form mt-2" action="index.html" method="POST">
      <div class="form-group">
        <label
          class="form-label position-left size-text-login"
          for="login-email"
          >Nombre Empresa</label
        >
        <input
          class="form-control"
          id="login-email"
          type="text"
          name="login-email"
          placeholder=""
          aria-describedby="login-email"
          autofocus=""
          tabindex="1"
        />
      </div>
      <div class="form-group">
        <label
          class="form-label position-left size-text-login"
          for="login-email"
          >RUC</label
        >
        <input
          class="form-control"
          id="login-email"
          type="text"
          name="login-email"
          placeholder=""
          aria-describedby="login-email"
          autofocus=""
          tabindex="1"
        />
      </div>
      <div class="form-group">
        <label
          class="form-label position-left size-text-login"
          for="login-email"
          >Correo de administrador</label
        >
        <input
          class="form-control"
          id="login-email"
          type="text"
          name="login-email"
          placeholder=""
          aria-describedby="login-email"
          autofocus=""
          tabindex="1"
        />
      </div>
      <div class="form-group">
        <label
          class="form-label position-left size-text-login"
          for="login-email"
          >Teléfono / Celular</label
        >
        <input
          class="form-control"
          id="login-email"
          type="text"
          name="login-email"
          placeholder=""
          aria-describedby="login-email"
          autofocus=""
          tabindex="1"
        />
      </div>

      <button class="btn btn-primary btn-block" tabindex="4">Solicitar</button>
    </form>
  </div>
</template>

<script>
import image from "@/assets/images/pages/login-v2.svg";
export default {
  data() {
    return {
      logo_v2: image,
    };
  },
};
</script>

