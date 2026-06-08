async function validarNombre() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const data = await response.json();

    if (data.name === "Axel") {
        console.log("Nombre correcto");
    } else {
        console.log("Nombre incorrecto");
    }
}

validarNombre();