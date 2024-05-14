//Solicitar al usuario un número y mostrar si es positivo o negativo.

//Pedir al usuario un numero
//Comprobar si el numero es positivo o negativo
//Mostrar al usuario la respuesta

const read = require('prompt-sync')();
const write = console.log

function ejercicio14 (){

    let numero = read("Por favor, ingrese el numero :");
if (numero > 0) {
    write("El número ingresado es positivo.");
} else if (numero < 0) {
    write("El número ingresado es negativo.");
} else {
    write("El número ingresado es cero.");
}

}
ejercicio14()