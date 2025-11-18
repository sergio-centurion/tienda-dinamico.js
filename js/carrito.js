import { obteneCarrito, vaciarCarritoStorage } from "./storage.js";
import { actualizarContador } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obteneCarrito();
    actualizarContador(carrito);
    
    const contenedor = document.getElementById("contenedor-carrito");
    const resumen = document.getElementById("resumen-carrito");
    
    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío</p>";
        return;
    }
    
    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
        `;
        contenedor.appendChild(div);
    });
});