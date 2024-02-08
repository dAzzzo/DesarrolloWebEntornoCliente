/*
Escribe en JS un programa modularizado co funciones que pida por teclado un numero (debes comprobar
    que ese numero es un entero positivo mayor que 2, y seguir pidiendo dicho que sea valido
    o hasta que el usuario inserte 0 con lo  que el programa finalizara). Segun el n que se 
    el usuario ha insertado por teclado, crearas una matriz de tamaño nxn; la cual iras rellenando
    con algun num en  dos de sus celdas libres (este num no se puede repetir en más de  dos celdas, indica la forma
        en la que lo evitarias). Comprueba que tienes toda la matriz completa. En caso
        de estarlo, pide al usuario que introduzca diferentes posiciones de la matriz para que encuentre una pareja, si la encuentra
        (en un maximo de 5 intentos) muestra un mensaje de que 'lo ha logrado' y si no lo
        consigue un mensaje de 'otra vez sera' pintado en el html completa para que el usuario
        comprueba donde estaban las diferentes cajas. 
        Haz una copia del programa js anterior  (copia), haz una adaptacion en la que usando el tipo map puedas jugar a encontrar las parejass de las palabras.
*/

// Función para validar que el número es un entero positivo mayor que 2
function validarNumero() {
  let numero;
  do {
    numero = prompt("Introduce un número (mayor que 2, o 0 para salir):");
    numero = parseInt(numero);
  } while (isNaN(numero) || numero < 0 || (numero !== 0 && numero <= 2));

  return numero;
}

// Función para crear y rellenar la matriz
function crearMatriz(n) {
  let matriz = [];
  let numerosUsados = [];

  for (let i = 0; i < n; i++) {
    let fila = [];
    for (let j = 0; j < n; j++) {
      let num;
      do {
        num = Math.floor(Math.random() * ((n * n) / 2)) + 1;
      } while (numerosUsados[num] && numerosUsados[num].length >= 2);

      fila.push(num);
      if (!numerosUsados[num]) {
        numerosUsados[num] = [];
      }
      numerosUsados[num].push({ fila: i, columna: j });
    }
    matriz.push(fila);
  }

  return matriz;
}

// Función para imprimir la matriz en HTML
function imprimirMatriz(matriz) {
  let table = document.createElement("table");
  for (let i = 0; i < matriz.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz[i][j];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}

// Función para jugar y encontrar la pareja
function encontrarPareja(matriz) {
  for (let intentos = 1; intentos <= 5; intentos++) {
    let fila1 = prompt("Introduce la fila de la primera caja:");
    let columna1 = prompt("Introduce la columna de la primera caja:");
    let fila2 = prompt("Introduce la fila de la segunda caja:");
    let columna2 = prompt("Introduce la columna de la segunda caja:");

    if (matriz[fila1][columna1] === matriz[fila2][columna2]) {
      alert("¡Lo has logrado!");
      return;
    } else {
      alert("Otra vez será.");
    }
  }

  alert("Se acabaron los intentos. La pareja no se encontró.");
}

// Programa principal
let n = validarNumero();

if (n === 0) {
  alert("Adiós!");
} else {
  let matriz = crearMatriz(n);
  imprimirMatriz(matriz);
  encontrarPareja(matriz);
}
