/*14. Escriba una función de JavaScript para insertar una cadena dentro de una
cadena en una posición particular (el valor predeterminado es 1).
Ejemplo
(insert ('Estamos haciendo ejercicios.'));
(insert ('Estamos haciendo ejercicios.', 'JavaScript'));
(insert ('Estamos haciendo algunos ejercicios.', 'JavaScript', 18));
"Estamos haciendo ejercicios".
"JavaScript Estamos haciendo ejercicios".
"Estamos haciendo algunos ejercicios de JavaScript".
*/

function insert(cadena, cadena2, posicion = 1) {

    if (posicion < 1) {
        posicion = 1;
    } else if (posicion > cadena.length) {
        posicion = cadena.length;
    }

    //Separamos y buscamos la posicion
    const primeraCadena = cadena.slice(0, posicion);
    const segundaCadena = cadena2.slice(posicion);

    return primeraCadena + cadena2 + segundaCadena;
}

// pedimos por pantalla los datos con un prompt
const cadenaOriginal = prompt("Ingrese una cadena de texto: ");
const cadenaSegunda = prompt("Ingrese la cadena que desea añadir: ");
const posicion = parseInt(prompt("Ingrese la posición: "));
const resultado = insert(cadenaOriginal, cadenaSegunda, posicion);

document.write("La primera cadena es: " + cadenaOriginal + "<br>");
document.write("La segunda cadena es: " + cadenaSegunda + "<br>");
document.write("La frase final será: " + resultado);
