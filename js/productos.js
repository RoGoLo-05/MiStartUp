const productos = [
    { id: 1, nombre: "Mancuernas", precio: 30, imagen: "../img/mancuernas.jpg" },
    { id: 2, nombre: "Banda de resistencia", precio: 15, imagen: "../img/banda.jpg" },
    { id: 3, nombre: "Disco 10kg", precio: 40, imagen: "../img/disco.jpg" },
    { id: 4, nombre: "Esterilla", precio: 25, imagen: "../img/esterilla.jpg" },
    { id: 5, nombre: "Cuerda de saltar", precio: 10, imagen: "../img/cuerda.jpg" },
    { id: 6, nombre: "Guantes de entrenamiento", precio: 20, imagen: "../img/guantes.jpg" }
];

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();
});

function renderizarProductos() {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = "";

    productos.forEach(producto => {
        contenedor.innerHTML += `
            <div class="producto-card">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id})">Añadir al carrito</button>
            </div>
        `;
    });
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
    document.getElementById('carrito-cantidad').innerText = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById('carrito-items').innerHTML = carrito.map(item => `
        <p>${item.nombre} x${item.cantidad} - $${item.precio * item.cantidad}</p>
    `).join("");
    document.getElementById('total-precio').innerText = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
}

function toggleCarrito() {
    document.getElementById('carrito-modal').style.display = 'block';
}

function comprar() {
    alert('Compra realizada');
    carrito = [];
    actualizarCarrito();
}
