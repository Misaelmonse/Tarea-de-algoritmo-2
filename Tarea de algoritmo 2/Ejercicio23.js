//Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//precio sea mayor $100.

// Solicitar al usuario que ingrese el precio del producto y el porcentaje de descuento
// Verificar si el precio del producto es mayor que $100
// Calcular el precio final con descuento
// Mostrar el precio final con descuento
// Mostrar un mensaje indicando que el descuento no se aplica

const read = require('prompt-sync')();
const write = console.log

function ejercicio23 (){

    let precio = read ("Ingresa el precio del producto ");
    let descuento = read ("Ingrese el porcentaje de descuento aplicado (%):")

if (precio > 100) {
    var precioFinal = precio - (precio * (descuento / 100));

    write("El precio final del producto luego de aplicar un descuento del " + descuento + "% es: $" + precioFinal.toFixed(2));
} else {
    write("El descuento no se aplica, ya que el precio del producto es igual o menor que $100.");
}

}
ejercicio23()