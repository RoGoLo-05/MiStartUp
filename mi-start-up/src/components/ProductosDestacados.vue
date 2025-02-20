<!-- src/components/ProductosDestacados.vue -->
<template>
  <section class="productos-destacados">
    <h2>Productos Destacados</h2>
    <div class="productos-container">
        <router-link to="/catalog" class="producto-card">
            <img src="../../public/img/barras.jpg" alt="Producto 1">
            <h3>Barras</h3>
        </router-link>
        <router-link to="/catalog" class="producto-card">
            <img src="../../public/img/poleadoblelarga.jpg" alt="Producto 2">
            <h3>Poleas</h3>
        </router-link>
        <router-link to="/catalog" class="producto-card">
            <img src="../../public/img/discos.jpg" alt="Producto 3">
            <h3>Discos</h3>
        </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProductosDestacados'
};
</script>

<style scoped>
@import '../assets/css/productosDestacados.css';
</style>
