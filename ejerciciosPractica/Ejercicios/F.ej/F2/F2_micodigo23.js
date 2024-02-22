/*15. Escriba un programa JavaScript para obtener la diferencia entre un número dado
y 13, si el número es mayor que 13 devuelva el doble de la diferencia absoluta.
*/

let numero = "Ingrese un número: ";
let num1 = prompt(numero);

const num2 = 13;

//Creamos el abs
let diferencia = Math.abs(num2 - num1);

if (diferencia > 13) {
    document.write("La diferencia entre ambos números es: " +  (2 * diferencia));
} else {
    document.write("La diferencia entre ambos números es: " + diferencia);
}
