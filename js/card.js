// Redirigir al hacer clic
const link = document.querySelector(".link1"); // Asegúrate de que la clase sea correcta
link.addEventListener("click", () => {
    window.location.href = "productos.html"; // Cambia a la URL deseada
});

const link2 = document.querySelector(".link2");
link2.addEventListener("click", () => {
    window.location.href = "usuarios.html";
});

const link3 = document.querySelector(".link3");
link3.addEventListener("click", () => {
    window.location.href = "productos.html";
});

// ...existing code...

const flechaAbajo = document.querySelector('.abajo-banner');
const flechaArriba = document.querySelector('.arriba-banner');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        flechaArriba.classList.add('visible');
        flechaAbajo.classList.remove('visible');
    } else {
        flechaArriba.classList.remove('visible');
        flechaAbajo.classList.add('visible');
    }
});

// ...existing code...