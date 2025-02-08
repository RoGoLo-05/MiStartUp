const productos = [
    { id: 1, nombre: "Barra", precio: 30, imagen: "../img/barra.jpg" },
    { id: 2, nombre: "Discos", precio: 15, imagen: "../img/discos.jpg" },
    { id: 3, nombre: "Mancuernas", precio: 40, imagen: "../img/mancuernas.jpg" },
    { id: 4, nombre: "Barras", precio: 25, imagen: "../img/barras.jpg" },
    { id: 5, nombre: "Set discos", precio: 10, imagen: "../img/setdiscos.jpg" },
    { id: 6, nombre: "Set de mancuernas", precio: 20, imagen: "../img/setmancuernas.jpg" },
    { id: 7, nombre: "Agarre 1", precio: 20, imagen: "../img/agarre1.jpg" },
    { id: 8, nombre: "Agarre 2", precio: 20, imagen: "../img/agarre2.jpg" },
    { id: 9, nombre: "Agarre 3", precio: 20, imagen: "../img/agarre3.jpg" },
    { id: 10, nombre: "Agarre 4", precio: 20, imagen: "../img/agarre4.jpg" },
    { id: 11, nombre: "Agarre 5", precio: 20, imagen: "../img/agarre5.jpg" },
    { id: 12, nombre: "Agarre 6", precio: 20, imagen: "../img/agarre6.jpg" },
    { id: 13, nombre: "Agarre 7", precio: 20, imagen: "../img/agarre7.jpg" },
    { id: 14, nombre: "Agarre 8", precio: 20, imagen: "../img/agarre8.jpg" },
    { id: 15, nombre: "Agarre 9", precio: 20, imagen: "../img/agarre9.jpg" },
    { id: 16, nombre: "Agarre 10", precio: 20, imagen: "../img/agarre10.jpg" },
    { id: 17, nombre: "Agarre 11", precio: 20, imagen: "../img/agarre11.jpg" },
    { id: 18, nombre: "Agarre 12", precio: 20, imagen: "../img/agarre12.jpg" },
    { id: 19, nombre: "Polea simple", precio: 20, imagen: "../img/poleasimple.jpg" },
    { id: 20, nombre: "Polea brazo", precio: 20, imagen: "../img/poleabrazo.jpg" },
    { id: 21, nombre: "Polea espalda", precio: 20, imagen: "../img/poleaespalda.jpg" },
    { id: 22, nombre: "Polea doble", precio: 20, imagen: "../img/poleadoble.jpg" },
    { id: 23, nombre: "Polea doble larga", precio: 20, imagen: "../img/poleadoblelarga.jpg" },
    { id: 24, nombre: "Banco fijo", precio: 20, imagen: "../img/bancofijo.jpg" },
    { id: 25, nombre: "Banco regulable", precio: 20, imagen: "../img/bancoregulable.jpg" },
    { id: 26, nombre: "Multipower", precio: 20, imagen: "../img/multipower.jpg" },
    { id: 27, nombre: "Multipower + Banco", precio: 20, imagen: "../img/multipowerbanco.png" },
];

let carrito = [];
let paginaActual = 1;
const productosPorPagina = 12;

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
    document.getElementById("btn-next").addEventListener("click", siguientePagina);
    document.getElementById("btn-prev").addEventListener("click", paginaAnterior);
});

function renderizarProductos() {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = "";

    const inicio = (paginaActual - 1) * productosPorPagina;
    const productosPagina = productos.slice(inicio, inicio + productosPorPagina);

    productosPagina.forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>$${producto.precio}</p>
                    <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
                </div>
            </div>
        `;
    });

    actualizarBotones();

    // Actualizar el número de la página
    document.getElementById('numero-pagina').innerText = paginaActual;
}



function actualizarBotones() {
    document.getElementById("btn-prev").disabled = paginaActual === 1;
    document.getElementById("btn-next").disabled = paginaActual * productosPorPagina >= productos.length;
}

function siguientePagina() {
    if (paginaActual * productosPorPagina < productos.length) {
        paginaActual++;
        renderizarProductos();
    }
}

function paginaAnterior() {
    if (paginaActual > 1) {
        paginaActual--;
        renderizarProductos();
    }
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const totalPrecio = document.getElementById('total-precio');
    const carritoCantidad = document.getElementById('carrito-cantidad'); // Obtienes el elemento que muestra la cantidad

    // Renderiza los productos del carrito
    carritoItems.innerHTML = carrito.map(item => `
        <div class="carrito-item">
            <span class="carrito-nombre">${item.nombre}</span>
            <span class="carrito-cantidad">x${item.cantidad}</span>
            <span class="carrito-precio">$${item.precio * item.cantidad}</span>
        </div>
    `).join("");

    // Calcula el precio total
    totalPrecio.innerText = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

    // Actualiza la cantidad de productos en el carrito
    carritoCantidad.innerText = carrito.reduce((acc, item) => acc + item.cantidad, 0); // Esto cuenta la cantidad total de productos en el carrito
}



function toggleCarrito() {
    const modal = document.getElementById("carrito-modal");

    if (modal.classList.contains("show")) {
        modal.style.top = "-100%"; // Lo sube antes de quitar la clase
        setTimeout(() => modal.classList.remove("show"), 500); // Espera la animación antes de ocultarlo
    } else {
        modal.classList.add("show");
        setTimeout(() => modal.style.top = "20%", 10); // Baja después de agregar la clase
    }
}




function vaciarCarrito() {
    carrito = []; // Vacía el carrito
    actualizarCarrito();
}

function comprarCarrito() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    alert("¡Compra realizada con éxito!");
    carrito = []; // Vaciar el carrito
    actualizarCarrito(); // Refrescar el carrito para que se vea vacío
    toggleCarrito(); // Cierra el carrito automáticamente
}

