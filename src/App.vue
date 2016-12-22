<template>
  <div class="corpo">
    
    <h1>Alurapic</h1>

    <my-painel :titulo="foto.titulo" v-for="foto in fotos">
      <my-foto :url="foto.url" :titulo="foto.titulo"/>
    </my-painel>

  </div>
</template>

<script>
import Foto from './foto/Foto.vue'
import Painel from './painel/Painel.vue'

export default {

  components: {
    'my-foto': Foto,
    'my-painel': Painel
  },

  data () {
    return {

      fotos: [
        { 
          url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
          titulo: 'cachorro'
        },
        { 
          url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwV4kVzT5McBdGSgqlVeRzubrNH_mOrrkKseDOGFURq20HmsrelEfMU7It',
          titulo: 'cachorro2'
        }
      ]

    }
  },
  created() {
    
    this.$http
      .get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => {
        this.fotos = fotos;
      }, err => console.log(err));
  }
}
</script>
<style>
  * {
    box-sizing: border-box;
  }
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
  h1 {
    text-align: center;
  }
</style>
