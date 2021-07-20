
        
<template>
  <nav
    class="navbar navbar-expand-lg navbar-light navPrincipal"
    style="position: relative"
  >
    <section class="content-header">
      <div class="col-sm-12">
        <h4 class="title-top"><slot></slot></h4>
      </div>
    </section>
  </nav>
</template>
<style lang="scss" scoped>
h4.title-top {
  font-weight: 600;
  color: #0078cf;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 16px;
}
</style>
<script>
export default {
  name: "TituloHeader",
};
</script>