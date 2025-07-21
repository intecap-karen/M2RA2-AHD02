const URL = "https://fakestoreapi.com/products";

async function consumirDatosTarjetas() {
    try {
        const respuesta = await fetch(URL);
        const convertir = await respuesta.json();
        const ubicacion = document.getElementById("tarjetas");

        convertir.forEach(producto => {
            const card = document.createElement("div");
            card.className = "card";
            card.style.backgroundImage = "linear-gradient(-45deg, #d5a9d6ff 0%, #afd3d3ff)"; // Cambia el color de fondo de la tarjeta
            card.style.color = "#040110ff"; // Cambia el color del texto de la tarjeta
            const descripcionCompleta = producto.description;
            let descripcionVisible = descripcionCompleta.substring(0, 100);

            const parrafo = document.createElement("p");
            parrafo.innerHTML = `Descripción: <span class="descripcion-texto">${descripcionVisible}...</span> `;

            const boton = document.createElement("button");
            boton.textContent = "Ver más";
            boton.style.border = "none";
            boton.style.background = "transparent";
            boton.style.color = " #090225ff";
            boton.style.cursor = "pointer";

            let expandido = false;

            boton.addEventListener("click", () => {
                const texto = parrafo.querySelector(".descripcion-texto");
                if (!expandido) {
                    texto.textContent = descripcionCompleta;
                    boton.textContent = "Ver menos";
                } else {
                    texto.textContent = descripcionCompleta.substring(0, 100) + "...";
                    boton.textContent = "Ver más";
                }
                expandido = !expandido;
            });

            card.innerHTML = `
            <img src="${producto.image}" alt="${producto.title}">
            <h2>${producto.title}</h2>
            <p>Precio: $${producto.price}</p>
            <p>Categoría: ${producto.category}</p>
            <p>Calificación: ${producto.rating.rate} (${producto.rating.count} reseñas)</p>
            `;
            ubicacion.appendChild(card);
            card.appendChild(parrafo);
            card.appendChild(boton);
        });


    } catch (error) {
        console.error("Error en datos:", error);
    }
}
// Llamar a la función para consumir los datos
consumirDatosTarjetas();

//<h2>${producto.title}</h2>  