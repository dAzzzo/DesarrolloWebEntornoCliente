/* 
  Programa JavaScript para encontrar el elemento más frecuente de una matriz.
*/

// Creamos la matriz con elementos repetidos
let matriz = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

// Iniciamos la función
function encontrarMayor(elementos) {
  // Creamamos las variables
  let elementoMasRepetido;
  let maxRepeticiones = 0;

  // Creamos un objeto para realizar un seguimiento de las frecuencias
  let frecuencias = {};

  // Creamos un bucle que cuente los elementos
  for (let i = 0; i < elementos.length; i++) {
    let elemento = elementos[i];

    // Si el elemento ya existe en el objeto de frecuencias, aumentamos la frecuencia
    if (frecuencias[elemento]) {
      frecuencias[elemento]++;
    } else {
      // Si el elemento no existe en el objeto de frecuencias, inicializamos en 1
      frecuencias[elemento] = 1;
    }

    // Comprobamos cual es la mayor
    if (frecuencias[elemento] > maxRepeticiones) {
      maxRepeticiones = frecuencias[elemento];
      elementoMasRepetido = elemento;
    }
  }

  return elementoMasRepetido;
}

let elementoRepetido = encontrarMayor(matriz);
document.write("El elemento que más se repite es: " + elementoRepetido);
