/*18. Escriba una función de JavaScript para calcular el producto de valores en una
matriz.
*/

function producto(matriz){
  let acumulador = array[0];

  for(let i=0;i<array.length;i++){
    acumulador *= array[i];
  }
  return acumulador;
}

let array = [2, 12, 4, 5];

let resultado = producto(array);
document.write(resultado);