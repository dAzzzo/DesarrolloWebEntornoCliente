/*28. Escriba un programa JavaScript para verificar si dos valores enteros dados están
en el rango 50..99 (inclusive). Devuelve verdadero si alguno de ellos está en dicho
rango
*/

let numero1 = "Ingrese un número: ";
let num1 = parseInt(prompt(numero1));

let numero2 = "Ingrese otro número: ";
let num2 = parseInt(prompt(numero2));

let verificar = (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);

if (verificar) {
    document.write("Verdadero");
} else {
    document.write("Falso");
}