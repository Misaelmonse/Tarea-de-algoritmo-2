//Solicitar al usuario un número y mostrar si es un número de un solo dígito. 


// Solicitar al usuario que ingrese un número
// Verificar si el número ingresado es de un solo dígito

const read = require('prompt-sync')();
const write = console.log

function ejercicio21 (){

    let numero = read ("Ingresa un numero ");

if (numero >= 0 && numero <= 9) {
    write("El número ingresado es de un solo dígito.");
} else {
    write("El número ingresado no es de un solo dígito.");
}
}
ejercicio21()