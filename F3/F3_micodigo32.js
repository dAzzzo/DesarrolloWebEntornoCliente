/*18. Escriba una función de JavaScript para contar la aparición de una
subcadena en una cadena.
*/
function contarCadena(cadena, subcadena) {

    //Creamos un contador
    let contador = 0;

   //Creamos bucle que lea y cuente la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Comparamos la subcadena con una porción de la cadena original de la misma longitud
        if (cadena.slice(i, i + subcadena.length) === subcadena) {
           //Si son iguales, repetimos
            contador++;
        }
    }
     // Devolvemos el contador que indica cuántas veces aparece la subcadena en la cadena original
    return contador;
}

// Pedimos por pantalla los datos
const cadenaOriginal = prompt("Ingrese una cadena de texto: ");
const subcadenaABuscar = prompt("Ingrese la subcadena que desea contar: ");
const apariciones = contarCadena(cadenaOriginal, subcadenaABuscar);

document.write("La subcadena '" + subcadenaABuscar + "' aparece " + apariciones + " veces en la cadena original.");
