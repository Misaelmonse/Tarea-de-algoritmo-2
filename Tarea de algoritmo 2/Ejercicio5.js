// ((8 > 2) | | (932 < 23) ) && 4 == 2

//Definir la expresion
//Mostrar el resultado si es verdadero o falso

const read = require('prompt-sync')();
const write = console.log

function ejercicio5 (){
    let resultado = ((8 > 2) || (932 < 23)) && (4 == 2)
    write ("El resultado es: ", resultado);


}
ejercicio5()