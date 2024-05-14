//Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación.
//Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre
//el precio de venta. mostrar el precio final incluyendo el 15% del IVA.

// Solicitar al usuario que ingrese el precio de venta y el año de fabricación del vehículo
// Aplicar descuento si el año de fabricación está entre 2020 y 2023, Aplicar descuento del 5% 
// Calcular el precio final incluyendo el 15% de IVA
// Mostrar el precio final

const read = require('prompt-sync')();
const write = console.log

function ejercicio25 (){

    let precioVenta = read ("Ingresa el precio de venta ");
    let añoFabricacion = read ("Ingrese el año de fabricacion ")

if (añoFabricacion >= 2020 && añoFabricacion <= 2023) {
    precioVenta -= precioVenta * 0.05; 
}

let precioFinal = precioVenta * 1.15;

write("El precio final del vehículo, incluyendo el 15% de IVA, es: $" + precioFinal.toFixed(2));

}
ejercicio25()