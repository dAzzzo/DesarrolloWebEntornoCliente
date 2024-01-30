/*17. Escriba un programa JavaScript para calcular la diferencia absoluta entre un
número especificado y 19. Devuelve el triple de su diferencia absoluta si el número
especificado es mayor que 19.
*/

let numero1 = "Ingrese un número: ";
let num1 = parseInt(prompt(numero1));

const numero = 19;

//Diferenica en abs
let diferencia = Math.abs(numero - num1);

if (diferencia > 19) {
    document.write("La diferencia entre ambos números es: " + (3 * diferencia));
} else {
    document.write("La diferencia entre ambos números es: " + diferencia);
}


