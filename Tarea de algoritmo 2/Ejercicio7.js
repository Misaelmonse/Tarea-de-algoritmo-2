//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor
//del numero3 Y si el numero 2 es el doble del numero4.

//Pedir al usuario 4 numeros 
//leer los numeros 
//Comprobar si el número 1 es divisor del número 3
//Comprobar si el número 2 es el doble del número 4
// Mostrar los resultados


const read = require('prompt-sync')();
const write = console.log

function ejercicio7 (){

    let numero1 = read("Ingrese el primer número:");
    let numero2 = read("Ingrese el segundo número:");
    let numero3 = read("Ingrese el tercer número:");
    let numero4 = read("Ingrese el cuarto número:");
    

    let esDivisor = numero1 % numero3 === 0;
    
    let esDoble = numero4 % numero2 === 0;
    
    if (esDivisor) {
        write(numero1 + " es divisor de " + numero3);
    } else {
        write(numero1 + " no es divisor de " + numero3);
    }
    
    if (esDoble) {
        write(numero2 + " es doble de " + numero4);
    } else {
        write(numero2 + " no es doble de " + numero4);
    }

}
ejercicio7()
