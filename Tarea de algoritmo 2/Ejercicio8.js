//. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si
//es positivo par o impar múltiplo de 7.

//Primero, solicitamos al usuario que ingrese un número.
//Luego, verificamos si el número es menor que -20 y negativo. Si es así, mostramos un mensaje indicando que el número es negativo y menor que -20.
//Si el número no es negativo y menor que -20, verificamos si es positivo, par o impar y múltiplo de 7.
//Si el número es positivo, comprobamos si es par o impar.
//Si es positivo y par, mostramos un mensaje indicando que es positivo y par.
//Si es positivo e impar, verificamos si es múltiplo de 7. 
//Si lo es, mostramos un mensaje indicando que es positivo, impar y múltiplo de 7. 
//Si no lo es, mostramos un mensaje indicando que es positivo e impar pero no es múltiplo de 7.

const read = require('prompt-sync')();
const write = console.log

function ejercicio8 (){

    let numero = read("Por favor, ingrese un número:");

    if (numero < -20) {
        write ("El número ingresado es negativo y menor que -20.");
    } else {
        if (numero > 0) {
            if (numero % 2 === 0) {
                write ("El número ingresado es positivo y par.");
            } else {
                if (numero % 7 === 0) {
                    write("El número ingresado es positivo, impar y múltiplo de 7.");
                } else {
                    write("El número ingresado es positivo e impar, pero no es múltiplo de 7.");
                }
            }
        } else {
            write("El número ingresado es cero o negativo pero mayor o igual a -20.");
        }
    }

}
ejercicio8()