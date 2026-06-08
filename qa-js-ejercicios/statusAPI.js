async function validarStatus() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    if (response.status === 200) {
        console.log("Status correcto");
    } else {
        console.log("Status incorrecto");
}
}

validarStatus();