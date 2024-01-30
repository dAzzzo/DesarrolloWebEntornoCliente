/*Definir una función que muestre información sobre una cadena 
de texto que se le pasa como argumento. A partir de la cadena 
que se le pasa, la función determina si esa cadena está formada 
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

// Pedimos al usuario que ingrese una cadena de texto

let texto = prompt("Ingrese una cadena de texto:");

// Creamos la función verificarCadena que toma una cadena como argumento

function verificarCadena(cadena) {

    // Comprobamos si la cadena es igual a sí misma en mayúsculas, lo que significa que solo contiene mayúsculas

    if (cadena === cadena.toUpperCase()) {
        document.write("La cadena está formada solo por mayúsculas.");
    }

    // Comprobamos si la cadena es igual a sí misma en minúsculas, lo que significa que solo contiene minúsculas

    else if (cadena === cadena.toLowerCase()) {
        document.write("La cadena está formada solo por minúsculas.");
    }

    // Si no es igual ni a mayúsculas ni a minúsculas, entonces es una mezcla de mayúsculas y minúsculas

    else {
        document.write("La cadena es una mezcla de mayúsculas y minúsculas.");
    }
}

// Llamamos a la función verificarCadena con la cadena ingresada por el usuario como argumento

verificarCadena(texto);