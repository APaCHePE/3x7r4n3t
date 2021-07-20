<template>
  <nav
    class="navbar navbar-expand-lg navbar-light navPrincipal"
    style="position: relative"
  >
    <section class="content-header">
      <div class="col-sm-12">
        <h1 class="title-top"><slot></slot></h1>
      </div>
    </section>
  </nav>
</template>
<style lang="scss" scoped>
h1.title-top {
  font-weight: 600;
  color: #0078cf;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 25px;
}
</style>
<script>
export default {
  name: "TituloHeader",
};
</script>