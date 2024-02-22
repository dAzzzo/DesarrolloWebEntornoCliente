function lanzarDados(cantidad) {
  let numBase = 5;
  let min = 13;
  let max = 0;

  for (let i = 1; i <= cantidad; i++) {
    let tirada1 = Math.floor(Math.random() * 6) + 1;
    let tirada2 = Math.floor(Math.random() * 6) + 1;

    let suma = tirada1 + tirada2;

    document.write("Tirada dado  ", i, ": ", suma, "<br>");

    if (suma > max) {
      max = suma;
    }

    if (suma < min) {
      min = suma;
    }
  }
  document.write("El valor más alto es: " + max + "<br>");
  document.write("El valor más bajo es: " + min + "<br>");
}

let cantidad = parseInt(prompt("Introduce la cantidad de veces que quieres lanzar los dados"));

lanzarDados(cantidad);
