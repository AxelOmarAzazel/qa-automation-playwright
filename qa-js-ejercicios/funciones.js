function validarEdad(edad) {
    if (edad >= 18){
        return true;
    }else {
        return false;
    }
}

console.log(validarEdad(18));
console.log(validarEdad(15));