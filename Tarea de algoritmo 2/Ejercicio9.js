//Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el
//porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del
//aumento.

//Solicita al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá.
//Calcula el nuevo salario multiplicando el salario actual por 1 más el porcentaje de aumento 
//(convertido a decimal).
//Muestra el nuevo salario al usuario.

const read = require('prompt-sync')();
const write = console.log

function ejercicio9 (){

let salarioActual = read("Ingrese su salario actual:");
let porcentajeAumento = read("Ingrese el porcentaje de aumento:");

let nuevoSalario = salarioActual * (1 + porcentajeAumento / 100);

write("¡Felicidades! Su nuevo salario después del aumento es: " + nuevoSalario.toFixed(2));
//toFixed(2) se utiliza para redondear el nuevo salario a dos decimales antes de mostrarlo en el mensaje.

}
ejercicio9()