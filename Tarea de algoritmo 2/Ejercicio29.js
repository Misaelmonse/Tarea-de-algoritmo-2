//Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad.

// Solicitar al usuario que ingrese su salario actual y la cantidad de años de antigüedad
// Verificar si la antigüedad es mayor que 3 años y calcular el bono correspondiente
// Calcular el bono de antigüedad
// Mostrar el salario y el bono de antigüedad

const read = require('prompt-sync')();
const write = console.log

function ejercicio29 (){

    let salarioActual = read ("Ingresa el salario actual ");
   let antiguedad = read ("Ingrese la cantidad de años de antigüedad:")

let bonoAntiguedad = 0;
if (antiguedad > 3) {
    bonoAntiguedad = salarioActual * 0.03 * antiguedad;
}

write("Salario actual: $" + salarioActual.toFixed(2));
write("Bono de antigüedad: $" + bonoAntiguedad.toFixed(2));

}
ejercicio29()