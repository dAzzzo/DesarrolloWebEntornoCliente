//Escribe una funcion que diga si un numero que recibe como parametro es primo o no

let num = parseInt(prompt("Escriba un número y diremos si es primo o no: "));

function numPrimo(num) {
  let esPrimo = true;

  if (num <= 1) {
    esPrimo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        esPrimo = false;
        break;
      }
    }
  }

  return esPrimo;
}

let esPrimo = numPrimo(num);
if (esPrimo) {
  document.write(num + " es primo");
} else {
  document.write(num + " no es primo");
}
