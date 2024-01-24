/*9. Escriba una función de JavaScript para poner en mayúscula la primera letra
de cada palabra en una cadena
*/

function extraerCaracter() {
    // Solicitamos al usuario que ingrese una frase
    let frase = prompt("Ingrese una frase: ");

    // Dividimos la cadena de palabras con split
    let palabras = frase.split(" ");

    // Recorremos cada palabra de la frase y ponemos mayúsculas en la primera letra usando charAt y toUpperCase
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }

    // Unimos de nuevo usando join
    let mayusculasFinales = palabras.join(" ");

    // Mostramos la cadena original y la cadena final
    document.write("Cadena inicial: " + frase + "<br>");
    document.write("Cadena final: " + mayusculasFinales);
}

// Llamamos a la función para que se ejecute cuando recargues la página
extraerCaracter();
