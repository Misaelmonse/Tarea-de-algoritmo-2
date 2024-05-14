//Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//muestra el monto final con el descuento aplicado más el IVA del 15%.


// Solicitar al usuario que ingrese el total de la cuenta y el porcentaje de descuento
// Verificar si el total de la cuenta supera los $70 y aplicar el descuento correspondiente
// Calcular el monto de descuento
// Calcular el monto final con el descuento y el IVA
// Mostrar el monto final con el descuento aplicado más el IVA

const read = require('prompt-sync')();
const write = console.log

function ejercicio30 (){

    let totalCuenta = read ("Ingresa el total de la cuenta ");
    let descuento = read ("Ingrese el porcentaje de descuento como cliente frecuente (%):")

let montoDescuento = 0;
if (totalCuenta > 70) {
    montoDescuento = totalCuenta * (descuento / 100); 
}

let montoFinal = totalCuenta - montoDescuento; 
montoFinal *= 1.15;

write("El monto final con el descuento aplicado más el IVA es: $" + montoFinal.toFixed(2));


}
ejercicio30()