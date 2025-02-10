<template>
  <div id="app">
    <!-- Header común en todas las páginas -->
    <Header />

    <!-- Contenido de la página, se renderiza según la ruta -->
    <router-view/>

    <!-- Footer común en todas las páginas -->
    <Footer />
  </div>
</template>

<script>
// Importamos los componentes Header y Footer
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import 'assets/css/styleGlobal.css';
</style>
