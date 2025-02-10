<!-- src/components/Footer.vue -->
<template>
  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <h3>Enlaces Rápidos</h3>
        <ul>
          <li><router-link to="/" id="botonInicio">Inicio</router-link></li>
          <li><router-link to="/catalog">Productos</router-link></li>
          <li><router-link to="/about">Sobre nosotros</router-link></li>
          <li><router-link to="/contact">Contacto</router-link></li>
        </ul>
      </div>

      <div class="footer-social">
        <h3>Síguenos</h3>
        <div class="social-icons">
          <a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 FitZone. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
@import '../assets/css/footer.css';
</style>
