//Para a=8 y b=5, encuentra el valor de v = 2 * b + a div 2 + 4 * b mod a.

//Definir los valores A y B
//Calcular V segun la formula dada
//Presentar el valor de V

const read = require('prompt-sync')();
const write = console.log

function ejercicio1(){
    let a = 8;
    let b = 5;
    let v = 2 * b + Math.floor(a / 2) + 4 * (b % a);
    write ("El valor de v es:", v);

}
ejercicio1();