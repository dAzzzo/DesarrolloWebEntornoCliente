//Creamos el array  escribiendo por pantalla
let palabra1 = prompt("Escriba una palabra:");
let palabra2 = prompt("Escriba una palabra:");
let palabra3 = prompt("Escriba una palabra:");
let palabra4 = prompt("Escriba una palabra:");
let palabra5 = prompt("Escriba una palabra:");
let palabra6 = prompt("Escriba una palabra:");
let palabra7 = prompt("Escriba una palabra:");
let palabra8 = prompt("Escriba una palabra:");

//lo guardamos
let array = [palabra1, palabra2, palabra3, palabra4, palabra5, palabra6, palabra7, palabra8];
console.log(array);

//especificamos que sea mayuscula y mayor que 6
function intento(array) {
  if (array[1].toUpperCase().length > 6) {
    return false;
  } else if (array[2].toUpperCase().length > 6) {
    return false;
  } else if (array[3].toUpperCase().length > 6) {
    return false;
  } else if (array[4].toUpperCase().length > 6) {
    return false;
  } else if (array[5].toUpperCase().length > 6) {
    return false;
  } else if (array[6].toUpperCase().length > 6) {
    return false;
  } else if (array[7].toUpperCase().length > 6) {
    return false;
  } else if (array[8].toUpperCase().length > 6) {
    return false;
  }
}
