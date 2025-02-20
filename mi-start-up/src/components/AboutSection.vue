<!-- src/components/Carrusel.vue -->
<template>
  <div class="todo-nosotros">
    <section class="sobre-nosotros">
        <h2>Quiénes Somos</h2>
        <p>Somos FitZone, una marca dedicada a proporcionar productos de alta calidad para el mundo del fitness. Nuestro objetivo es ayudar a las personas a alcanzar su máximo rendimiento con los mejores suplementos y equipos deportivos.</p>
    
        <h2>Nuestra Misión</h2>
        <p>Nos esforzamos por ofrecer productos innovadores y de calidad que potencien la vida activa de nuestros clientes. Creemos en el poder de un estilo de vida saludable y estamos aquí para ayudarte a lograrlo.</p>
    
        <h2>Nuestro Equipo</h2>
        <p>Contamos con un equipo de expertos en nutrición, entrenadores y amantes del fitness que trabajan cada día para brindarte lo mejor en suplementación y equipamiento deportivo.</p>
    
        <h2>Nuestros Valores</h2>
        <ul class="valores">
            <li>🏆 **Excelencia** - Productos de alta calidad garantizados.</li>
            <li>💪 **Compromiso** - Te ayudamos a alcanzar tus metas.</li>
            <li>🌱 **Bienestar** - Promovemos un estilo de vida saludable.</li>
            <li>🌍 **Sostenibilidad** - Nos preocupamos por el medioambiente.</li>
        </ul>

        <h2 class="donde">Dónde Estamos</h2>
        <p>Nos encontramos en Sevilla, Andalucía. ¡Visítanos para asesoramiento personalizado!</p>

        <!-- Mapa de Google Maps -->
        <div class="mapa">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9589331427634!2d-5.995340124504672!3d37.389092372090334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126d4fa83b36b3%3A0x7f8d9c233b7d93c4!2sCalle%20Fitness%2C%2069%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1707573749187!5m2!1ses!2ses" 
            width="100%" 
            height="400" 
            style="border:0;" 
            :allowfullscreen="true"
            loading="lazy"
            title="Localización de FitZone"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

        <h2>Reseñas de Nuestros Clientes</h2>
          <div class="reseñas">
            <div class="reseña">
              <p>⭐⭐⭐⭐⭐</p>
              <p><strong>María López:</strong> "FitZone ha cambiado mi forma de entrenar. Los productos son de excelente calidad y el servicio es inmejorable."</p>
            </div>
            <div class="reseña">
              <p>⭐⭐⭐⭐⭐</p>
              <p><strong>Carlos Mendoza:</strong> "Increíble atención al cliente y productos que realmente cumplen con lo prometido. ¡Muy recomendado!"</p>
            </div>
            <div class="reseña">
              <p>⭐⭐⭐⭐</p>
              <p><strong>Elena Ramírez:</strong> "Me encantó la gran variedad de equipos de entrenamiento de los que disponen."</p>
            </div>
          </div>

    </section>
  </div>
    
</template>
  
  
<style scoped>
  @import '../assets/css/aboutus.css';
</style>
  