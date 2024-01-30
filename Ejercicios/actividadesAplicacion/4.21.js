/*Crea una funcion q devuelva como grados celsius la cantidad en grados Fahrenheit que recibe como parametro*/

let FarenCelsius = prompt("Escriba una temperatura en Fahrenheit....");

function cambioCelsius(FarenCelsius) {
  let CelsiusFaren = 0;
  CelsiusFaren = ((FarenCelsius - 32) / 9) * 5;

  return CelsiusFaren;
}

let CelsiusFaren = cambioCelsius(FarenCelsius);
document.write("Fahrenheit: " + FarenCelsius + " y Celsius: " + CelsiusFaren);
