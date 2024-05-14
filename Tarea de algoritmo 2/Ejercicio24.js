//. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado,
//considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a
//40 y menor a 60 se queda para recuperación caso contario pierde la materia.


// Solicitar al usuario que ingrese su nota en el examen
// Determinar si el usuario ha aprobado, está en recuperación o ha reprobado

const read = require('prompt-sync')();
const write = console.log

function ejercicio24 (){

let nota = read ("Ingresa tu nota de examen ");

if (nota >= 60) {
    write("¡Felicitaciones! Ha aprobado el examen.");
} else if (nota >= 40 && nota < 60) {
    write("Usted está en recuperación.");
} else {
    write("Lo sentimos, ha reprobado el examen.");
}
}
ejercicio24()