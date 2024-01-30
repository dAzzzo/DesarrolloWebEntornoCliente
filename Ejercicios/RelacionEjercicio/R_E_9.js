/*Lanzar dados y mostrar la salida de cada tirada en 2 input. En los input mostrar el más alto y el más bajo.
*/

function dadoAleatorio(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

//Creamos los dados aleatorios
let dado1 = dadoAleatorio(1, 7);
let dado2 = dadoAleatorio(1, 7);

//Comparamos resultados
let masAlto = Math.max(dado1, dado2);
let masBajo = Math.min(dado1, dado2);

document.write("Dado 1: " + dado1 + "<br>");
document.write("Dado 2: " + dado2 + "<br>");
document.write("El dado más bajo es: " + masBajo + "<br>");
document.write("El dado más alto es: " + masAlto + "<br>");