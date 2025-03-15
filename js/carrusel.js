document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.getElementById("carrusel");
    const imagenes = document.querySelector(".imagenes");
    const imgElements = document.querySelectorAll(".imagenes img");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const closeBtn = document.getElementById("close");

    let index = 0;
    const totalImagenes = imgElements.length;

    // Evento para activar el modo carrusel al hacer clic en cualquier imagen
    imgElements.forEach((img, i) => {
        img.addEventListener("click", function () {
            carrusel.classList.add("activo"); // Activa el modo carrusel
            index = i; // Guarda la imagen seleccionada
            actualizarCarrusel();
        });
    });

    // Función para actualizar el carrusel según el índice actual
    function actualizarCarrusel() {
        const desplazamiento = -index * 100;
        imagenes.style.transform = `translateX(${desplazamiento}%)`;
    }

    // Función para moverse a la izquierda
    function prevImage() {
        index = (index - 1 + totalImagenes) % totalImagenes;
        actualizarCarrusel();
    }

    // Función para moverse a la derecha
    function nextImage() {
        index = (index + 1) % totalImagenes;
        actualizarCarrusel();
    }

    // Función para cerrar el carrusel y volver a la vista inicial
    function closeCarrusel() {
        carrusel.classList.remove("activo");
        imagenes.style.transform = "translateX(0)"; // Resetear posición
    }

    // Eventos de los botones
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);
    closeBtn.addEventListener("click", closeCarrusel);
});
