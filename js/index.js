import { producto } from "./productos.js";
import { agregarCarrito } from "./funcionesCarrito.js";
import { obteneCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ JavaScript está cargado");
    
    const contenedor = document.getElementById("contenedor-tarjetas");
    
    if (!contenedor) {
        console.error("❌ No se encontró el contenedor-tarjetas");
        return;
    }
    
    const carrito = obteneCarrito();
    actualizarContador(carrito);
    
    console.log("📦 Productos a cargar:", producto);
    
    producto.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card");

        const img = document.createElement("img");
        img.src = "img/" + producto.img;
        img.alt = producto.nombre;

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;
        
        const descripcion = document.createElement("p");
        descripcion.textContent = producto.descripcion;
        
        const precio = document.createElement("p");
        precio.textContent = '$' + producto.precio;
        precio.style.fontWeight = "bold";
        precio.style.color = "#182848";
        precio.style.fontSize = "1.2rem";

        const boton = document.createElement("button");
        boton.textContent = "Agregar al carrito";

        boton.addEventListener("click", () => {
            agregarCarrito(producto);
        });

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    });
    
    console.log("🎉 Productos cargados correctamente");
});