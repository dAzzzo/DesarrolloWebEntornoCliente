/*
11. Escriba un programa JavaScript para convertir temperaturas desde y hacia
Celsius, Fahrenheit.
[Fórmula: c / 5 = (f-32) / 9 [donde c = temperatura en Celsius y f = temperatura en
Fahrenheit]
Salida esperada :
60 ° C es 140 ° F
45 ° F es 7.222222222222222 ° C
*/

let CelsiusFaren = "Convertidor de Celsius a Fahrenheit: ";
let num1 = prompt(CelsiusFaren);

let FarenCelsius = "Convertidor de Fahrenheit a Celsius";
let num2 = prompt(FarenCelsius);

document.write(num1 + " ° C es " + ((9/5)*num1+32) + " ° F <br>");
document.write(num2 + " ° F es " + (((num2-32)/9)*5) + " ° C");
