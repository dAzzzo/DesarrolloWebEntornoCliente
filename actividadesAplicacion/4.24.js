// Crea una funcion que muestre la tabla multiplicar del número que reciba como parametro

let num = parseInt(prompt("Introduzca el número  que quiere multiplicar: "));

function multiplicar(num) {
  document.write("Tabla de multiplicar del " + num + "<br>");

  for (let i = 0; i < 11; i++) {
    document.write(num + "x" + i + "= " + num * i + "<br>");
  }
}
multiplicar(num);