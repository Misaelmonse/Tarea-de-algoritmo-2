//Pedir al usuario un número y mostrar si es par o impar.

//Pedir al usuario que ingrese un numero
//Comprobar si el numero es par y decirle que el numero es par
//sino mostrarle que el numero es impar

const read = require('prompt-sync')();
const write = console.log

function ejercicio13 (){

    let numero = read("Por favor, ingrese el numero :");

    if (numero % 2 === 0) {
        write("El número ingresado es par.");
    } else {
        write("El número ingresado es impar.");
    }
}
ejercicio13()
