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
