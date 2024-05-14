//2 *(4 – 10 + 8)/2* 36 *(1/2)

//Primero, se evalúa la expresión dentro de los paréntesis más internos (4 - 10 + 8):
//Luego, se multiplica el resultado anterior por 2:
//Se multiplica el resultado por 36:
//Después, se evalúa la expresión (1/2):
//Por último, se multiplica el resultado anterior por 144
//De ahi se presenta el resultado

const read = require('prompt-sync')();
const write = console.log

function ejercicio3(){
    let resultado = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2);
    write ("El resultado es ",resultado);

}
ejercicio3();