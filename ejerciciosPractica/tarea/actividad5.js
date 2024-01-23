// Crear un programa que pida ingresar 
// números separados por espacios y devuelva 
// un mensaje con el array inverso.

// Ingrese números: 5 7 99 34 54 2 12

// El array invertido es: [12, 2, 54, 34, 99, 7, 5]

function inversionNum(){
    let numero = prompt("Introduce una pila de números con espacio entre cada uno");
    let numArray = numero.split(" ").map(Number);
    console.log(numero);

    while(numArray.some(isNaN)){
        numero = prompt("Error, no me has proporcionado un número");
        numArray = numero.split(" ").map(Number);
    }
    let arrayInvertido = numArray.reverse();
    return arrayInvertido;
}
let resultado = inversionNum();
console.log(resultado);