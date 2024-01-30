/*Escribe una funcion que devuelva true si dos palabras que recibe como parametro
contienen las mismas letras, aunque se encuentren en posiciones distintas
*/

let palabra1 = prompt("Escriba una palabra: ");
let palabra2 = prompt("Escriba una palabra: ");

function esIgual(palabra1, palabra2) {
  let palabra1Formateada = palabra1.toLowerCase().split("").sort().join("");
  let palabra2Formateada = palabra2.toLowerCase().split("").sort().join("");

  if (palabra1Formateada.length === palabra2Formateada.length) {
    return true;
  }
}
