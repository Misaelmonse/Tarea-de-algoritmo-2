//Pedir al usuario un número y mostrar si es mayor 0 y menor o igual a 100. 

// Solicitar al usuario que ingrese un número
// Verificar si el número ingresado es mayor que 0 y menor o igual a 100

const read = require('prompt-sync')();
const write = console.log

function ejercicio20 (){

    let numero = read ("Ingresa un numero ");

if (numero > 0 && numero <= 100) {
    write("El número ingresado es mayor que 0 y menor o igual a 100.");
} else {
    write("El número ingresado no cumple con la condición especificada.");
}

}
ejercicio20()