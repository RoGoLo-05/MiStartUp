<template>
  <div class="todo-contacto">
    <section class="contacto">
      <h2>Contáctanos</h2>
      <p class="parrafoContactar">
        Si tienes alguna pregunta, sugerencia o quieres más información sobre
        nuestros productos, no dudes en escribirnos.
      </p>
  
      <form @submit.prevent="submitForm">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="form.nombre" required />
  
        <label for="email">Correo Electrónico</label>
        <input type="email" id="email" v-model="form.email" placeholder="ejemplo@gmail.com" required />
  
        <label for="mensaje">Mensaje</label>
        <textarea id="mensaje" v-model="form.mensaje" rows="5" required></textarea>
  
        <button type="submit">Enviar</button>
      </form>
  
      <h3>También puedes encontrarnos en:</h3>
      <p>Email: contacto@fitzone.com</p>
      <p>Teléfono: +34 645 378 218</p>
      <p>Dirección: Calle Fitness, 69, Sevilla, Andalucía</p>
    </section>
  </div>
    
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: '',
        email: '',
        mensaje: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Muestra un mensaje de confirmación
      alert('Formulario enviado');
      
      // Reinicia todos los campos del formulario
      Object.keys(this.form).forEach(key => {
        this.form[key] = '';
      });
    }
  }
};
</script>



<style scoped>
@import '../assets/css/contact.css';
</style>