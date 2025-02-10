<template>
    <header>
      <div class="logotitulo">
        <a href="/">
          <img src="../../public/img/FitZoneLogoRecortado.png" alt="FitZone logo">
          <h1>FitZone</h1>
        </a>
      </div>
  
      <!-- Cambiamos el evento de la hamburguesa para llamar a la función toggleMenu -->
      <div class="hamburguesa" @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
      </div>
  
      <!-- Usamos la clase activa reactiva -->
      <nav :class="{ active: menuActive }">
        <ul>
          <li><router-link to="/" id="botonInicio">Inicio</router-link></li>
          <li><router-link to="/catalog">Productos</router-link></li>
          <li><router-link to="/about">Sobre nosotros</router-link></li>
          <li><router-link to="/contact">Contacto</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  // Aquí no necesitamos importar la función, ya que vamos a gestionar el estado de manera local en el componente
  export default {
    name: 'Header',
  
    data() {
      return {
        menuActive: false, // Estado para controlar si el menú está activo o no
      };
    },
  
    methods: {
      toggleMenu() {
        this.menuActive = !this.menuActive; // Cambiamos el estado de la variable
      },
    },
  };
  </script>
  
  <style scoped>
  @import '../assets/css/header.css';
  </style>
  