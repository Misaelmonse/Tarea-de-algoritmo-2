//Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el
//segundo o menor que el segundo

// Solicitar al usuario que ingrese dos nombres
// Comparar los nombres
//Mostrar la respuesta

const read = require('prompt-sync')();
const write = console.log

function ejercicio17 (){

let nombre1 = read("Ingrese el primer nombre:");
let  nombre2 = read("Ingrese el segundo nombre:");

if (nombre1 === nombre2) {
    write("Los nombres ingresados son iguales.");
} else if (nombre1 > nombre2) {
    write("El primer nombre es mayor que el segundo.");
} else {
    write("El primer nombre es menor que el segundo.");
}

}
ejercicio17()