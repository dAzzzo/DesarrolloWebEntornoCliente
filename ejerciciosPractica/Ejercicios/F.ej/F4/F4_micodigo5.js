/*18. Escriba una función de JavaScript para calcular el producto de valores en una
matriz.
*/

//Creamos un array
let array = [10, 2, 5, 12];

//Creamos la funcion de la matriz
function producto(matriz) {
  let acumulador = array[0];

  for(let i=1; i<array.length; i++){
    acumulador *= array[i];
  }

  return acumulador;
}

let resultado = producto(array);
document.write("EL producto de la matriz e: " + resultado);
