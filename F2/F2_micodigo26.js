/*18. Escriba un programa JavaScript para verificar dos números dados y devolver
verdadero si uno de los números es 50 o si su suma es 50
*/

let numero1 = "Ingrese un número: ";
let num1 = parseInt(prompt(numero1));

let numero2 = "Ingrese otro número: ";
let num2 = parseInt(prompt(numero2));

let suma = num1 + num2;

if (num1 == 50 || num2 == 50 || suma == 50) {
    document.write("Verdadero");
} else {
    document.write("Falso");
}