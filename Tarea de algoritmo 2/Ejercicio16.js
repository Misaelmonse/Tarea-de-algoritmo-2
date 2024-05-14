// Solicitar al usuario un carácter y mostrar si es una vocal o consonante

//Pedirle al usuario un caracter
//verificar si el caracter es vocal o consonante
//mostrar al usuario si es vocal o consonante


const read = require('prompt-sync')();
const write = console.log

function ejercicio16 (){

    let caracter = read ("Ingrese un carácter: ");
    if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u")
    {
        write("El carácter ingresado es una vocal.")
    }
    else if(caracter >= "a" && caracter <="z"){
        write("El carácter ingresado es una consonante.")
    }
    else{
        write("El carácter ingresado no es una letra.")
    }
}


ejercicio16()