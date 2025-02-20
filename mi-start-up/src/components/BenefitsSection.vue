<template>
    <div class="beneficios">
        <h2>¿Por qué elegir FitZone?</h2>
        <div class="beneficios-container">
            <div class="beneficio">
                <font-awesome-icon :icon="icons.envio" class="icono" />
                <p><strong>Envío rápido</strong><br> a todo el país.</p>
            </div>
            <div class="beneficio">
                <font-awesome-icon :icon="icons.calidad" class="icono" />
                <p><strong>Calidad garantizada</strong><br> en cada producto.</p>
            </div>
            <div class="beneficio">
                <font-awesome-icon :icon="icons.soporte" class="icono" />
                <p><strong>Soporte 24/7</strong><br> para tus dudas.</p>
            </div>
        </div>
    </div>
</template>

<script>
import { faShippingFast, faCheckCircle, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    components: {
        FontAwesomeIcon
    },
    data() {
        return {
            icons: {
                envio: faShippingFast,
                calidad: faCheckCircle,
                soporte: faHeadset
            }
        };
    }
}
</script>

<style scoped>
@import '../assets/css/benefits.css';
</style>