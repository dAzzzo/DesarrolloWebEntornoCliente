/*Escribe un programa javascript que pida un número impar por teclado y pinte en la pagína web el patrón de la X
de ese longitud por ejemplo: Si por teclado le metemos 5 deberá pintar
 */

let longitud = prompt("Introduce un número impar:");

longitud = parseInt(longitud);

// Verificamos que la longitud sea un número impar

if (longitud % 2 === 0) {

    document.write("El número ingresado no es impar.");
    
} else {
    for (let i = 1; i <= longitud; i++) {
        for (let j = 1; j <= longitud; j++) {
            if (i === j || i + j === longitud + 1) {
                document.write("x");
            } else {
                document.write("&nbsp;&nbsp;");
            }
        }
        document.write("</br>");
    }
}