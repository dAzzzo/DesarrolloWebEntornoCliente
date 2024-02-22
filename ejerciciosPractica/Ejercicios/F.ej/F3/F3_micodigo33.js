/*29. Escriba una función de JavaScript para encontrar una palabra dentro de
una cadena.
console.log (palabra_búsqueda('El zorro marrón', 'zorro'));
console.log (palabra_búsqueda ('aa, bb, aa', 'aa'));
Resultado:
"'zorro' se encontró 1 veces".
"'aa' se encontró 2 veces."*/

function contarCadena(cadena, palabra) {

    //Creamos un contador
    let contador = 0;

   //Creamos bucle que lea y cuente la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Comparamos la subcadena con una porción de la cadena original de la misma longitud
        if (cadena.slice(i, i + palabra.length) === palabra) {
           //Si son iguales, repetimos
            contador++;
        }
    }
     // Devolvemos el contador que indica cuántas veces aparece la subcadena en la cadena original
    return contador;
}

// Pedimos los datos por pantalla
const cadenaOriginal = prompt("Ingrese una cadena de texto: ");
const palabraBuscar = prompt("Ingrese la palabra que desea contar: ");
const apariciones = contarCadena(cadenaOriginal, palabraBuscar);

document.write("La palabra '" + palabraBuscar + "' aparece " + apariciones + " veces en la cadena original.");
