<!-- src/components/Carrusel.vue -->
<template>
  <section class="carrusel">
    <div class="carrusel-imagenes">
      <div class="carrusel-slide active" id="imagenCarrusel1"></div>
      <div class="carrusel-slide" id="imagenCarrusel2"></div>
      <div class="carrusel-slide" id="imagenCarrusel3"></div>
    </div>
    <div class="carrusel-texto">
      <h1>FITZONE</h1>
      <p>Alcanza tu mejor versión con nosotros.</p>
      <div class="carrusel-botones">
        <router-link to="/contact" class="btn contacto">Contactar</router-link>
        <router-link to="/catalog" class="btn comprar">Comprar</router-link>
      </div>
    </div>
  </section>
</template>

<script>
// Importar el archivo JS del carrusel
import '../assets/js/carrusel.js';

export default {
  name: 'Carrusel',
  mounted() {
    // Puedes también ejecutar la lógica aquí, por si necesitas hacer algo más
  }
};
</script>

<style scoped>
@import '../assets/css/carrusel.css';
</style>
