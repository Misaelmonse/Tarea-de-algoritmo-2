//Pedir al usuario un número y mostrar si es mayor o menor que 10.

//Pedir al usuario un numero
//ver si el numero es mayor o menor que 10
//Mostrar mensaje con el resultado


const read = require('prompt-sync')();
const write = console.log

function ejercicio11 (){

    let numero = read("Por favor, ingrese un número:");

    if (numero > 10) {
        write("El número ingresado " ,numero ," es mayor que 10.");
    } else if (numero < 10) {
        write("El número ingresado " ,numero , " es menor que 10.");
    } else {
        write("El número ingresado es igual a 10.");
    }

}
ejercicio11()