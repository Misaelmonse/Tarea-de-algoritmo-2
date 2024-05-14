//Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado
//en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas,
//de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de
//aplicar el impuesto.

// Solicitar al usuario que ingrese el precio del artículo y el porcentaje de impuesto de ventas
// Verificar si el precio del artículo supera los $200 y aplicar el impuesto de ventas


const read = require('prompt-sync')();
const write = console.log

function ejercicio26 (){

    let precio = read ("Ingresa el precio del articulo ");
    let  impuesto = read ("Ingrese el porcentaje de impuesto ")
if (precio > 200) {
    let precioConImpuesto = precio + (precio * (impuesto / 100));
    write("El precio final del artículo, incluyendo el impuesto de ventas, es: $" + precioConImpuesto );
} else {
    write("El precio final del artículo es: $" + precio);
}
}
ejercicio26()