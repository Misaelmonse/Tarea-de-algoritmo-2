//El banco POO ha decidido aumentar el límite de crédito de las tarjetas de crédito de
//sus clientes, para esto considera que:
//Si su cliente tiene tarjeta tipo 1, el aumento será del $100 .
//Si tiene tipo 2 el aumento será del $200
//Si tiene tipo 3, el aumento será del $300
//Para cualquier otro tipo será del 500
//Se pide realizar un algoritmo que ayude al banco a determinar el nuevo límite de
//crédito que tendrá una persona en su tarjeta considerando que después del aumento
//se tendrá que subir 10% adicionales a todas las tarjetas

//Definir una función que tome como entrada el tipo de tarjeta del cliente.
//Basado en el tipo de tarjeta, calcular el aumento correspondiente según las reglas dadas.
//Aplicar un aumento adicional del 10% a todos los aumentos calculados.
//Sumar el aumento adicional al límite de crédito actual del cliente para obtener el nuevo límite de crédito.

const read = require('prompt-sync')();
const write = console.log

function ejercicio10 (){


    let aumentoBase;

    if (tipoTarjeta === 1) {
        aumentoBase = 100;
    } else if (tipoTarjeta === 2) {
        aumentoBase = 200;
    } else if (tipoTarjeta === 3) {
        aumentoBase = 300;
    } else {
        aumentoBase = 500;
    }

    // Calcular el aumento adicional del 10%
    let aumentoAdicional = aumentoBase * 0.1;

    // Calcular el nuevo límite de crédito
    let nuevoLimite = limiteActual + aumentoBase + aumentoAdicional;

    return nuevoLimite;
}

ejercicio10()

/* Para poder ejecutarlo podemos poner un ejemplo:

function ejecutarEjemplo() {
    let tipoTarjetaCliente = 2; // Tipo de tarjeta del cliente
    let limiteActualCliente = 2000; // Límite de crédito actual del cliente
    let nuevoLimiteCliente = calcularNuevoLimite(tipoTarjetaCliente, limiteActualCliente);

    console.log("El nuevo límite de crédito del cliente será: $" + nuevoLimiteCliente.toFixed(2));
}

ejecutarEjemplo(); */