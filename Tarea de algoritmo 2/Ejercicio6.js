//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad
//del número 2; Y si el numero 3 es divisor del numero4.

//Pedir al usuario 4 numeros 
//leer los numeros 
//Comprobar si el número 1 es la mitad del número 2
//Comprobar si el número 3 es divisor del número 4
// Mostrar los resultados


const read = require('prompt-sync')();
const write = console.log

function ejercicio6 (){

    let numero1 = read("Ingrese el primer número:");
    let numero2 = read("Ingrese el segundo número:");
    let numero3 = read("Ingrese el tercer número:");
    let numero4 = read("Ingrese el cuarto número:");
    

    let esMitad = numero2 % numero1 === 0;
    
    let esDivisor = numero4 % numero3 === 0;
    
    if (esMitad) {
        write(numero1 + " es la mitad de " + numero2);
    } else {
        write(numero1 + " no es la mitad de " + numero2);
    }
    
    if (esDivisor) {
        write(numero3 + " es divisor de " + numero4);
    } else {
        write(numero3 + " no es divisor de " + numero4);
    }

}
ejercicio6()