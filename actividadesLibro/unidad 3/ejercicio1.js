let precio = prompt("Introduce un precio :");
precio = parseInt(precio);

let descuento = prompt("Introduce un descuento :");
descuento = parseInt(descuento);

function parametro(precio, descuento) {
  let resultado = (precio * descuento) / 100;

  return resultado;
}

let resultado = parametro(precio, descuento);
document.write("Lo que se descuenta es: " + resultado);
document.write("<br>El precio nuevo es: " + (precio - resultado));
