// Crea una funcion que devuelva la letra del DNI que recibe como parametro

let dni = prompt("Escriba los números de su DNI (8 números): ");

function buscarLetra(dni) {
  //Array de las letras del dni
  let letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];

  if (dni > 0 && dni <= 99999999) {
    document.write("El número es valido :)<br>");
  } else {
    document.write("El número NO es valido :(<br>");
  }

  // Convierte la entrada a un número entero
  let numeroDNI = parseInt(dni, 10);

  // Calcula el índice en el array de letras
  let indiceLetra = numeroDNI % 23;

  //Obtener la letra
  let letraFinal = letras[indiceLetra];
  return letraFinal;
}

let letraFinal = buscarLetra(dni);
document.write("El número aleatorio del array letras es: " + letraFinal);

document.write("<br>El DNI creado es: " + dni + letraFinal);
