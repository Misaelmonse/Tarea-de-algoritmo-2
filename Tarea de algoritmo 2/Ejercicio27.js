//Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado

// Solicitar al usuario que ingrese su sueldo actual y el porcentaje de incremento salarial anual
// Verificar si el sueldo actual es menor que 500 y aplicar el incremento correspondiente
// Mostrar el sueldo esperado con el incremento aplicado

const read = require('prompt-sync')();
const write = console.log

function ejercicio27 (){

    let sueldoActual = read ("Ingresa el sueldo actual ");
    let incremento = read ("Ingrese el porcentaje de incremento salarial anual (%):")

if (sueldoActual < 500) {
    sueldoActual *= (1 + incremento / 100);
}

write("El sueldo esperado con el incremento aplicado es: $" + sueldoActual.toFixed(2));

}
ejercicio27()