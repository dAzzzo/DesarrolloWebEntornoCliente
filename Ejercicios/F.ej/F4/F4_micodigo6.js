/*
31. Escriba una función de JavaScript para obtener el número más alto de tres
números diferentes.
*/

//Creamos los números
let num1 = 3;
let num2 = 5;
let num3 = 2;

document.write(
  "Los números existentes son: " + num1 + ", " + num2 + ", " + num3
);

//Creamos la funcion
function producto() {

    let comparacion = 0;

  if (num1 > num2 && num1 > num3) {
    document.write("<br>El número " + num1 + " es el mayor");
  } else if (num2 > num1 && num2 > num3) {
    document.write("<br>El número " + num2 + " es el mayor");
  } else if (num3 > num1 && num3 > num2) {
    document.write("<br>El número " + num3 + " es el mayor");
  } else {
    document.write("ERROR 404");
  }

  return comparacion;
}

let comparacion = producto();


