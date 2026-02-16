function verificarEdad(){
    let edad =prompt("ingrese su edad");
    edad = parseInt(edad);

    if (edad >= 18) {
        alert("eres mayor de edad");
    } else {
        alert("eres menor de edad");
    }
}
verificarEdad();