async function obtenerNombre() {
    return "Axel";
}

async function main() {
    const nombre = await obtenerNombre();

    console.log(nombre);
}

main();