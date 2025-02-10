<template>
    <div>
      <Carrusel /> <!-- Este es el componente Carrusel -->
      <ProductosDestacados /> <!-- Aquí usamos el componente ProductosDestacados -->
    </div>
</template>
  
<script>
import Carrusel from '../components/Carrusel.vue'
import ProductosDestacados from '../components/ProductosDestacados.vue'
  
export default {
    name: 'Home', // Nombre del componente
  
    components: {
      Carrusel,
      ProductosDestacados,
    },
  }
</script>
  
<style scoped>

</style>
  