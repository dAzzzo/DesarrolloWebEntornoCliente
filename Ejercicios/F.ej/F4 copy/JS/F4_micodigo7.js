/* 
  Programa JavaScript para encontrar el elemento más frecuente de una matriz.
*/

// Creamos la matriz con elementos repetidos
let matriz = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

function encontrarMayor(elementos){

  let elementoMasRepetido;
  let maxRepeticiones = 0;

  let frecuencias =  {};

  for(let i=0;i<elementos.length;i++){
    let elemento = elementos[i];

    if(frecuencias[elemento]){
      frecuencias[elemento]++;
    }else{
      frecuencias[elemento] = 1;
    }

    if(frecuencias[elemento]){
      maxRepeticiones = frecuencias[elemento];
      elementoMasRepetido = elemento;
    }
  }
  return elementoMasRepetido;
}

let resultado = encontrarMayor(matriz);
document.write("El elemento que más se repite es: " + elementoRepetido);
