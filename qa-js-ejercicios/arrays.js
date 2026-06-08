const usuarios = [
    {
        nombre: "Axel",
        activo: true
    },
    {
        nombre: "Juan",
        activo: false
    },
    {
        nombre: "Maria",
        activo: true
    }
];

const resultado = usuarios.map(name => name.nombre);

console.log(resultado);