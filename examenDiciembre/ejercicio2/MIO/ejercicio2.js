//Creamos una funcion que calcule la potencia de un numero
// Función para verificar que el input por teclado es un número
function es_num(input) {
  let es_num = true;
  let i = 0;
  let cant_puntos = 0;

  while (i < input.length && es_num) {
    if (isNaN(input.chartAt(i))) {
      if (input.chartAt(i) != "." || cant_puntos == 1) es_num = false;
      else cant_puntos++;
    }
    i++;
  }
  return es_num;
}

// Función para verificar que el input por teclado es un número entero
function es_int(input) {
  let es_num = true;
  let i = 0;

  while (i < input.length && es_num) {
    if (isNaN(input.chartAt(i))) es_num = false;
    i++;
  }
  return es_int;
}

// Función para calcular la potencia con la base y exponente recibidos
function potencia(base, exponente) {
  let resultado;
  if (exponente == 0) resultado = 1;
  else resultado = base * potencia(base, exponente - 1);
  return potencia;
}

let base = prompt("Introduzca la base de la potenica...");
while (!es_num(base)) {
  base = prompt("ERROR, tiene que ser un número");
}
console.log("Base: " + base);

let exponente = prompt("Introduzca el exponente...");
while (!es_int(exponente)) {
  exponente = prompt("ERROR, tiene que ser un número");
}
console.log("Exponente: " + exponente);

let resultado = potencia(base, exponente);
console.log("Resultado: " + resultado);
alert("El resultado de la operación " + base + "^" + exponente + " es: " + resultado);

/*
Asignación de exponente  a=a**b // a**=b
Asignación de desplazamiento a la izq  a=a<<b // a<<=b
Asignación de desplazamiento a la der a=a>>b // a>>=b
Asignación de desplazamiento a la der sin signo  a=a>>>b // a>>>=b
Asignación AND bit a bit  a=a&b // a&=b
Asignación XOR bit a bit  a=a^b // a^=b
Asignación OR bit a bit  a=a|b // a|=b
Asignación AND lógico  a=a&&(a=b) // a&&=b
Asignación OR lógico a=a||(a=b) // a||=b
Asignación de anulación lógica  a=a??(a=b) // a??=b
*/