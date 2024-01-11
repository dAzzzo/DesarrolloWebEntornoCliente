// Crear un programa que pida ingresar números 
// separados por espacios y devuelva un mensaje 
// con la suma de todos los números.

// Ingrese números: 5 7 10 12 24

// La suma de todos los números es: 58

function sumaNum() {
    let numero = prompt("Introduce una pila de números con espacio entre cada uno");
    let numArray = numero.split(" ").map(Number);
    console.log(numero);

    while (numArray.some(isNaN)) {
        numero = prompt("Error, no me has proporcionado un número");
        numArray = numero.split(" ").map(Number);
    }

    let resultado = 0;
    for (let i = 0; i < numArray.length; i++) {
        numeroSuma = numArray[i];
        resultado += numeroSuma;
    }
    return resultado;
}
let verSuma = sumaNum();
console.log("La suma de todos los números es: " + verSuma);