//(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3

//Primero, se evalúa la expresión dentro de los paréntesis izquierdos (5 + 3 * 2)
//Luego, se suma 9 al resultado anterior
//Despues se evalúa la otra expresión (3 * 5 * 14 % 3)
//Primero, se multiplica 3 * 5 * 14
//Luego, se calcula el % de 210 dividido por 3
//Finalmente, se compara si 20 es mayor que 0. La comparación es verdadera, ya que 20 > 0.

const read = require('prompt-sync')();
const write = console.log

function ejercicio2(){
    let resultado = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3;
    write ("El resultado es ",resultado)

}
ejercicio2();