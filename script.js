// ============================================================
// EcoMarket - JavaScript básico del lado del cliente
// ============================================================

// 1. Saludo dinámico en consola
console.log("EcoMarket cargado correctamente.");

// 2. Manejo del botón "Añadir al carrito"
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn-secondary");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const nombreProducto = boton.getAttribute("data-producto") || "producto";
      alert("Añadido al carrito: " + nombreProducto);
    });
  });
});

// 3. Scroll suave a las secciones
document.querySelectorAll(".main-nav a").forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    const destino = enlace.getAttribute("href");
    if (destino && destino.startsWith("#")) {
      const seccion = document.querySelector(destino);
      if (seccion) {
        e.preventDefault();
        seccion.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});