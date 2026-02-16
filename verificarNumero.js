function verificarNumero() {
     let numero = prompt("ingrese un numero");

     if (numero > 0) {
        alert("el  numero es positivo");
     } else if (numero < 0) {
        alert("el numero es negativo");
     } else {
        alert("el numero es cero");
     }
}
verificarNumero();