const texto = '{"nombre":"Axel","edad":18}';

const usuario = JSON.parse(texto);

console.log(usuario);
console.log(usuario.nombre);