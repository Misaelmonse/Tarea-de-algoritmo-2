//Pedir al usuario un número y mostrar si es múltiplo de 3 y par

// Solicitar al usuario que ingrese un número
// Verificar si el número ingresado es múltiplo de 3 y par
//Mostrar la respuesta

const read = require('prompt-sync')();
const write = console.log

function ejercicio18 (){

    let numero = read ("Ingresa un numero ");

    if (numero % 3 === 0 && numero % 2 === 0) {
        write("El número ingresado es múltiplo de 3 y par.");
    } else {
        write("El número ingresado no es múltiplo de 3 y par.");
    }

}
ejercicio18()