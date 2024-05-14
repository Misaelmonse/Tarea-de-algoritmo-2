//Solicitar al usuario su edad y mostrar si es mayor o menor de edad. 

//Pedir al usuario su edad
//Comprobar su edad
//Mostrar al usuario si es mayor o menor de edad

const read = require('prompt-sync')();
const write = console.log

function ejercicio12 (){

let edad = read("Por favor, ingrese su edad:");
if (edad >= 18) {
    console.log("Usted es mayor de edad.");
} else {
    console.log("Usted es menor de edad.");
}
}
ejercicio12()