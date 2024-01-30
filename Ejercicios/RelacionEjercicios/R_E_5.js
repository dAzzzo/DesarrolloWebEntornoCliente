/*Quitar los elementos no duplicados de un array con conjuntos.
 */


function eliminarNoDuplicados(array){
  let arrayFinal = [];

  for(let i=0;i<array.length; i++){
    if(array.indexOf(array[i]) !== array.lastIndexOf(array[i])){
      arrayFinal.push(array[i-1]);
    }
  }
  return arrayFinal;
}

let array = [26, 26, 26, 26, 28, 28, 29, 29, 30];
let arrayDuplicados = eliminarNoDuplicados(array);

document.write("Array original: " + array);
document.write("<br>Array con duplicados: " + arrayDuplicados);

//Creamos un array cualquiera
/*let id = [26, 26, 26, 26, 28, 28, 29, 29, 30];

function quitarElementosDuplicados(id) {
  let elementoRepetido = new Set();

  for (let elemento of id) {
    if (elementoUnico.has(elemento)) {
      elementoRepetido.add(elemento);
    }
  }
  document.write("Elementos repetidos:" + Array.from(elementoRepetido));
}

function seleccionaElementosUnicos(id) {
    let elementoUnico = new Set();
  
    for (let elemento of id) {
      if (!elementoUnico.has(elemento)) {
       elementoUnico.add(elemento);
      }
    }
    document.write("Elementos repetidos:" + Array.from(elementoUnico));
  }

let edadesUnicas = quitarElementos(id);
let duplicados = Array.from(edadesUnicas);

document.write("El resultado original es: " + id);
document.write("<br>El resultado final sera: " + duplicados);
*/


//Quitar los elementos no duplicados de un array sin conjuntos
/*
let ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]

let temp = {};
for (let age of ages) {
  temp[age] = true;
}

let uniqueAges = [];
for (let age in temp) {
  uniqueAges.push(age);
}

document.write(uniqueAges);
*/
