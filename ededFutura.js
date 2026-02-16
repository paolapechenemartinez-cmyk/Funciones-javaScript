function edadFutura(){
    let suma = edad + 10;
    alert("en diez años tendras" + suma + "años");
}

let edad = prompt("ingrese su edad");
edad = parseInt(edad);

edadFutura(edad);