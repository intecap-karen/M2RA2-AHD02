const URL = "https://fakestoreapi.com/users";

async function consumirDatosUsuarios() {
    try {
        const respuesta = await fetch(URL);
        const convertir = await respuesta.json();
        const ubicacion = document.getElementById("tabla");

        convertir.forEach(producto => {
            const tabla = document.createElement("tr");
            tabla.className = "tabla";
            tabla.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.username}</td>
                    <td>${producto.name.firstname}</td>
                    <td>${producto.name.lastname}</td>
                    <td>${producto.password}</td>
                    <td>${producto.email}</td>
                    <td>${producto.phone}</td>
                    <td>${producto.address.street}, ${producto.address.city}</td>
            `;
            ubicacion.appendChild(tabla);
        });
    } catch (error) {
        console.error("Error en datos:", error);
    }
}
// Llamar a la función para consumir los datos
consumirDatosUsuarios();
