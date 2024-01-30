/*4a. Escriba un programa JavaScript para calcular la suma de una matriz de números
enteros.
Ejemplo: var array = [1, 2, 3, 4, 5, 6] Resultado esperado: 21
*/


function sumaMatriz(matriz) {


    let suma = 0;


    //Leemos el array
    for (let i = 0; i < matriz.length; i++) {
       suma += matriz[i];
    }
    return suma;
}
//Creamos el array
let matriz = [1, 2, 3, 4, 5, 6];


let resultado = sumaMatriz(matriz);
document.write("La suma de los elementos de la matriz es: " + resultado);
