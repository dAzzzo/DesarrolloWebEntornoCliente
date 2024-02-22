/*El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los 
factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) 
es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120. Utilizando la estructura for, crear un script que calcule 
el factorial de un número entero.
*/

function factorialNum(num) {

    if (num === 0) {
        //El factorial de 0 es 1 por convencion
        //el factorial de 0 se define como 1 para simplificar cálculos y expresiones matemáticas. 
        return 1;
    } else {
        let resultado = 1;
        for (let i = 1; i <= num; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

let num = 5;
let resultado = factorialNum(num);
document.write("El factorial de 5 es: " + resultado);