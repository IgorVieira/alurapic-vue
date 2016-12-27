<template>
  <div>
    <img :src="url" :alt="titulo">
  </div>
</template>

<script>
export default {
    // assim valida, com array não
    props: {
        url: {
            type: String, 
            required: true
        },
        titulo: String
    }
}
</script>
<style scoped>
    img {
        width: 100%;
    }
</style>
