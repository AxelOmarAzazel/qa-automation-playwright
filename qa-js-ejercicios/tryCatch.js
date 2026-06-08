try {
    console.log("Inicio");

    throw new Error("Algo salió mal");

    console.log("Fin");
} catch (error) {
    console.log("Error capturado");
}