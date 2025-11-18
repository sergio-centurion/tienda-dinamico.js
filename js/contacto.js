import { obteneCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener('DOMContentLoaded', () => {
    const carrito = obteneCarrito();
    actualizarContador(carrito);
});