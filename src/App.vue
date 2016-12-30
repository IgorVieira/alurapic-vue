<template>
  <div class="corpo">
    <transition name="pagina">
      <router-view></router-view>
    </transtion>
  </div>
</template>
<script>
</script>
<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .2s
  }
  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

</style>