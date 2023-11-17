/*16. Escriba un programa JavaScript para calcular la suma de los dos números
enteros dados. Si los dos valores son iguales, devuelve el triple de su suma.
*/

let numero1 = "Ingrese un número: ";
let num1 = parseInt(prompt(numero1));

let numero2 = "Ingrese otro número: ";
let num2 = parseInt(prompt(numero2));

//Variable de suma
let suma = num1 + num2;

if (num1 == num2){
    document.write("El reusltado de la suma mmultiplicado x3 sería: " + (3*(suma)));
}else {
    document.write("El resultado será: " + suma);
}
