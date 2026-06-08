const usuario = "axel";
const password = "1234";
const usuarioBloqueado = false;

if (usuarioBloqueado){
    console.log("Usuario Bloqueado");
}else{
    if (usuario ===  "axel" && password === "1234"){
    console.log("login exitoso");
    }else{ 
    console.log("Credenciales invalidas");
}
}