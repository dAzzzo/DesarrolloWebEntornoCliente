// Crear un programa que pida ingresar números 
// separados por espacios y devuelva un mensaje 
// con el menor número ingresado.

// Ingrese números: 5 7 99 34 54 2 12
// El menor número es: 2

function numMenor(){
    let numero = prompt("Introduce una pila de números con espacio entre cada uno");
    let numArray = numero.split(" ").map(Number);
    console.log(numero);

    while(numArray.some(isNaN)){
        numero = prompt("Error, no me has proporcionado un número");
        numArray = numero.split(" ").map(Number);
    }
    let numMenorFinal = Math.min(...numArray);
    return numMenorFinal;
}

let numeroElegido = numMenor();
console.log(numeroElegido)