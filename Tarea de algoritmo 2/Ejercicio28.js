//Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//monto final con el descuento con el IVA del 15%

// Solicitar al usuario que ingrese el precio total de la compra y el porcentaje de descuento
// Verificar si el precio total de la compra supera los $10 y aplicar el descuento correspondiente
// Mostrar el monto final con el descuento y el IVA
// Si el precio total de la compra es igual o menor que $10, no se aplica descuento
//mostrar el precio

const read = require('prompt-sync')();
const write = console.log

function ejercicio28 (){

    let precioTotal = read ("Ingresa el precio total ");
    let descuento = read ("Ingrese el porcentaje de descuento a aplicar (%):")

if (precioTotal > 10) {
    let montoDescuento = precioTotal * (descuento / 100); 
    let precioConDescuento = precioTotal - montoDescuento; 
    let precioConIVA = precioConDescuento * 1.15; 
    
    write("El monto final con el descuento y el IVA es: $" + precioConIVA.toFixed(2));
} else {
    write("No se aplica descuento. El monto final es: $" + precioTotal);
}
}
ejercicio28()