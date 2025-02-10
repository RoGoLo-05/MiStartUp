import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Aquí importas el archivo router/index.js

const app = createApp(App)

app.use(router) // Aquí usas el enrutador

app.mount('#app') // Montas la app en el DOM
