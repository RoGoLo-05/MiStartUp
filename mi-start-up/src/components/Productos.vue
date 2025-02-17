<template>
    <div class="tienda">
      <!-- Notificación de agregado al carrito -->
      <div v-if="notificacionVisible" class="notificacion">
        {{ mensajeNotificacion }}
      </div>

      
      <!-- Icono del carrito -->
      <div class="carrito-contenedor">
        <div class="carrito-icono" @click="toggleCarrito">
          <i class="fas fa-shopping-cart"></i>
          <span id="carrito-cantidad">{{ carritoCantidad }}</span>
        </div>
      </div>
  
      <!-- Productos -->
      <section class="productos-container">
        <div class="producto-card" v-for="producto in productosPaginados" :key="producto.id">
          <img :src="producto.imagen" :alt="producto.nombre" />
          <div class="producto-info">
            <h3>{{ producto.nombre }}</h3>
            <p>${{ producto.precio }}</p>
            <button class="btn-agregar" @click="agregarAlCarrito(producto)">
              Añadir al carrito
            </button>
          </div>
        </div>
      </section>
  
      <!-- Paginación -->
      <div class="paginacion">
        <button :disabled="paginaActual === 1" @click="paginaAnterior">Anterior</button>
        <span class="pagina-actual">{{ paginaActual }}</span>
        <button :disabled="paginaActual * productosPorPagina >= productos.length" @click="siguientePagina">Siguiente</button>
      </div>
  
      <!-- Modal del carrito -->
      <div v-if="carritoModalVisible" class="modal-overlay" @click.self="toggleCarrito">
        <div class="modal">
          <span class="close" @click="toggleCarrito">&times;</span>
          <h2>Carrito</h2>
          <div id="carrito-items">
            <div class="carrito-item" v-for="item in carrito" :key="item.id">
              <span class="carrito-nombre">{{ item.nombre }}</span>
              <span class="carrito-cantidad">x{{ item.cantidad }}</span>
              <span class="carrito-precio">${{ item.precio * item.cantidad }}</span>
            </div>
          </div>
          <h3>Total: ${{ totalPrecio }}</h3>
  
          <div class="carrito-botones">
            <button class="btn-comprar" @click="comprarCarrito">Comprar</button>
            <button class="btn-vaciar" @click="vaciarCarrito">Vaciar Carrito</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { productos } from '../assets/js/productos.js';
  
  export default {
    data() {
      return {
        productos: productos,
        carrito: [],
        paginaActual: 1,
        productosPorPagina: 12,
        carritoModalVisible: false,
        notificacionVisible: false, // Estado de la notificación
        mensajeNotificacion: "", // Mensaje de la notificación
      };
    },
    computed: {
      productosPaginados() {
        const inicio = (this.paginaActual - 1) * this.productosPorPagina;
        return this.productos.slice(inicio, inicio + this.productosPorPagina);
      },
      totalPrecio() {
        return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
      },
      carritoCantidad() {
        return this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
      }
    },
    methods: {
      agregarAlCarrito(producto) {
        const itemEnCarrito = this.carrito.find(item => item.id === producto.id);
        if (itemEnCarrito) {
          itemEnCarrito.cantidad++;
        } else {
          this.carrito.push({ ...producto, cantidad: 1 });
        }

        // Mostrar la notificación
        this.mostrarNotificacion(`Añadido: ${producto.nombre}`);
      },

      mostrarNotificacion(mensaje) {
        this.mensajeNotificacion = mensaje;
        this.notificacionVisible = true;

        setTimeout(() => {
          this.notificacionVisible = false;
        }, 2000); // Ocultar después de 2 segundos
      },

      toggleCarrito() {
        this.carritoModalVisible = !this.carritoModalVisible;
        this.$nextTick(() => {
          const modal = document.querySelector(".modal");
          if (this.carritoModalVisible) {
            modal.classList.add("show");
          } else {
            modal.classList.remove("show");
          }
        });
      },

      vaciarCarrito() {
        this.carrito = [];
      },
      comprarCarrito() {
        if (this.carrito.length === 0) {
          alert("Tu carrito está vacío.");
          return;
        }
        alert("¡Compra realizada con éxito!");
        this.carrito = [];
        this.toggleCarrito();
      },
      siguientePagina() {
        if (this.paginaActual * this.productosPorPagina < this.productos.length) {
          this.paginaActual++;
        }
      },
      paginaAnterior() {
        if (this.paginaActual > 1) {
          this.paginaActual--;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import '../assets/css/productos.css';
  </style>
  