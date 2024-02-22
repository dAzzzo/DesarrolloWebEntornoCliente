/*Realiza un script que determine si la cadena de texto que se le pide al usuario es un 
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
*/



//Creamos la funcion
function buscarPalin(palindromo) {

    // Quitamos espacios en blanco y convertimos todo a minúsculas
    /*se utiliza en la función replace para buscar y reemplazar todos 
    los espacios en blanco en la cadena original por una cadena vacía ('')*/
    palindromo = palindromo.toLowerCase().replace(/ /g, '');

    //Comprobamos el palindromo original
    return palindromo === palindromo.split('').reverse().join('');

}

//Creamos el palindromo
let texto = "La ruta nos aporto otro paso natural";

let resultado = buscarPalin(texto);


if (resultado) {
    document.write("La frase '" + texto + "' es un palíndromo.");
} else {
    document.write("La frase '" + texto + "' no es un palíndromo.");
}