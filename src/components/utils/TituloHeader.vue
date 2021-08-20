<template>
  <div class="contenedor-titulo">
    <nav
      class="navbar navbar-expand-lg navbar-light tamañoNav"
      style="position: relative"
    >
      <section class="content-header">
        <h1 class="title-top"><slot></slot></h1>
        <!-- </div> -->
      </section>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.contenedor-titulo {
  
  .tamañoNav {
    background-color: #ffffff;
    box-shadow: 3px 2px 10px #c7c7c7;
    width: 95%;
    margin: auto;
    .content-header {
      text-align: left;
      width: 100%;
      h1.title-top {
        font-weight: 600;
        color: #0078cf;
        padding-bottom: 10px;
        padding-top: 10px;
        font-size: 25px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "TituloHeader",
};
</script>