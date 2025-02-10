<template>
    <div>
      <Carrusel /> <!-- Este es el componente Carrusel -->
      <ProductosDestacados /> <!-- Aquí usamos el componente ProductosDestacados -->
      <Parallax />
    </div>
</template>
  
<script>
import Carrusel from '../components/Carrusel.vue'
import ProductosDestacados from '../components/ProductosDestacados.vue'
import Parallax from '../components/Parallax.vue';
  
export default {
    name: 'Home', // Nombre del componente
  
    components: {
      Carrusel,
      ProductosDestacados,
      Parallax,
    },
  }
</script>
  
<style scoped>

</style>
  