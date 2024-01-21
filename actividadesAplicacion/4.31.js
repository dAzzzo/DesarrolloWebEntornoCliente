/*Crea una funcion  que reciba un numero variable de parametros numericos ( al menos cuatro)
y devuelva su suma, su media aritmetica, la multiplicion del primero con el ultimo, 
y la division del segundo con el penultimo
*/

function func(...params) {
  if (params.length >= 4) {
    document.write("El parámetro es mayor que 4...<br>");
    return;
  }

  //Suma
  let suma = 0;
  params.map((elemento) => {
    suma += elemento;
  });

  //media aritmetica
  let media = suma / params.length;

  //multiplicacion del primero con el ultimo
  let multiplicacion = params[0] * params[params.length - 1];

  //division del segundo con el penultimo
  //let division = params[1] / params[params.length - 2];

  //almacenando los resultados en un objeto
  let resultados = {
    suma: suma,
    media: media,
    multiplicacion: multiplicacion,
  };

  return resultados;
}

let resultados = func(2, 8, 3, 2, 5);
document.write(resultados);
