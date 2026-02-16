function calculaPromedio(){
    let nota1= prompt("ingrese la primera nota");
    let nota2= prompt("ingrese la segunda nota");
    let nota3= prompt("ingrese la tercera nota");

    nota1 = parseInt(nota1);
    nota2 = parent(nota2);
    nota3 = parseInt(nota3);

    let promedio = (nota1 + nota2 + nota3) /3;

    alert("El promedio es" + promedio);
}
calculaPromedio();