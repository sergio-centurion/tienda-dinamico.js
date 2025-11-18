import { guardaCarrito, obteneCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarCarrito = (producto) => {
    const carrito = obteneCarrito();
    carrito.push(producto);
    guardaCarrito(carrito);
    actualizarContador(carrito);
    mostrarMensaje("Producto agregado al carrito");
};