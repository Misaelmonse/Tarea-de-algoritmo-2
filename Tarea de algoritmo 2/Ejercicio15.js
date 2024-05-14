//Pedir al usuario dos números y mostrar si son iguales o diferentes.

//Pedir al usuario que ingrese 2 numeros
//comprobar si los dos numeros son iguales
//Mostrar el mensaje con la respuesta

const read = require('prompt-sync')();
const write = console.log

function ejercicio15 (){

    let numero1 = read("Ingrese el primer número:");
    let numero2 = read("Ingrese el segundo número:");
    
    if (numero1 === numero2) {
        write("Los números ingresados son iguales.");
    } else {
        write("Los números ingresados son diferentes.");
    }
}
ejercicio15()
