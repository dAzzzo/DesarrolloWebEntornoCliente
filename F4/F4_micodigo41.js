/*5. Escriba un programa JavaScript simple para unir todos los elementos de una
matriz en una cadena
*/

//Creamos dos matrices diferentes
let matriz1 = ["a", 6, 5, 60, "Pochita"];
let matriz2 = ["Hola", 8, 70];

function unirMatriz(matriz1, matriz2) {

    //Unimos las dos matrices
    let extendido = matriz1.concat(matriz2);

    return extendido;
}

let extendido = unirMatriz(matriz1, matriz2);

document.write("La matriz 1 es: " + matriz1 + "<br>");
document.write("La matriz 2 es: " + matriz2 + "<br>");
document.write("La matriz final es: " + extendido);