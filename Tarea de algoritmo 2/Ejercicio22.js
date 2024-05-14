//Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular
//y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor
//al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%.

// Solicitar al usuario que ingrese el monto total de la factura y el año de la compra
// Definir la tasa de IVA dependiendo del año de la compra
// Calcular el monto total a pagar incluyendo el IVA
// Mostrar el monto total a pagar incluyendo el IVA

const read = require('prompt-sync')();
const write = console.log

function ejercicio22 (){

let montoTotal = read ("Ingresa el monto total ");
let añoCompra = read ("Ingresa el año de compra ");


let tasaIVA = (añoCompra < 2024) ? 0.12 : 0.15;

let montoConIVA = montoTotal * (1 + tasaIVA);

write("El monto total a pagar incluyendo el IVA es: $" + montoConIVA.toFixed(2));
}

ejercicio22()