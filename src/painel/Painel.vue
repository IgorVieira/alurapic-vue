<template>
  <div class="painel">
      <h2>{{titulo}}</h2>
      <slot class="conteudo"></slot>
  </div>
</template>

<script>

import Foto from '../foto/Foto.vue'
export default {
    props: ['titulo']
}
</script>
<style scoped>
    .painel {
        padding: 0 auto;
        border: solid 2px grey;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px 10px grey;
        width: 200px;
        height: 100%;
        vertical-align: top;
        text-align: center;
    }

    h2 {
        text-align: center;
        border: solid 2px;
        background: lightblue;
        margin: 0 0 15px 0;
        padding: 10px;
        text-transform: uppercase;
    }

</style>
