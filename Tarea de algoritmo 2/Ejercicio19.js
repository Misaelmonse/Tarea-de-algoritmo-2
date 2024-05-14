// Solicitar al usuario un número y mostrar si es divisible por 2 o impar.

// Solicitar al usuario que ingrese un número
// Verificar si el número ingresado es divisible por 2 o impar
//Mostar el resultado

const read = require('prompt-sync')();
const write = console.log

function ejercicio19 (){

    let numero = read ("Ingresa un numero ");

if (numero % 2 === 0) {
    write("El número ingresado es divisible por 2.");
} else {
    write("El número ingresado es impar.");
}

} ejercicio19()