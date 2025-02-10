import { createRouter, createWebHistory } from 'vue-router'

// Importa tus vistas
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  // Gestiona el historial de navegación
  routes: [
    {
      path: '/',  // Ruta principal
      name: 'Home',  // Nombre de la ruta
      component: Home,  // Vista que se muestra para esta ruta
    },
    {
      path: '/catalog',  // Ruta para el catálogo
      name: 'Catalog',  // Nombre de la ruta
      component: Catalog,  // Vista para el catálogo
    },
    {
      path: '/about',  // Ruta para la sección "Sobre nosotros"
      name: 'About',  // Nombre de la ruta
      component: About,  // Vista para "Sobre nosotros"
    },
    {
      path: '/contact',  // Ruta para la sección de contacto
      name: 'Contact',  // Nombre de la ruta
      component: Contact,  // Vista para contacto
    },
  ],
})

export default router;
