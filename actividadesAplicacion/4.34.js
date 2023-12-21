/*Escribe un programa que con la ayuda de una funcion 
recursiva muestre en la consola una variante de la
sucesión de Fibonacci en la que cada elemento sea
la suma de los tres anteriores
*/

function nuevoFibonacci(num) {


    if (num === 0) {
        return 0;
    } else if (num === 1 || num === 2) {
        return 1;
    } else {
        return nuevoFibonacci(num - 1) + nuevoFibonacci(num - 2) + nuevoFibonacci(num - 3);
    }
}

function generarSecuencia(n) {
    let secuancia = [];

    for (let i = 0; i < n; i++) {
        secuancia.push(nuevoFibonacci(i));
    }
    return secuancia;
}

let cantidadNumeros = 8;
let secuencia = generarSecuencia(cantidadNumeros);
console.log(secuencia);