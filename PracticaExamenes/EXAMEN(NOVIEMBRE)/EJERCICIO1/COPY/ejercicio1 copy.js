/* Se pide un programa que pida un número n por teclado y devuelva en la página HTML un patrón de
asteriscos de manera que con n=5:
*****
 ****
  ***
   **
    *
*/

//Creamos el prompt
let n = prompt("Introuzca el número n deseado:");

//Creamos la funcion
function figura(n) {
  let j = 0;
  // Bucle para la escritura de cada línea del patrón
  // Donde i corresponde al número de línea
  for (let i = 0; i < n; i++) {
    document.write("<p>");
    for (let espacios = 0; espacios < i; espacios++)
      // Los espacios que se deben escribir corresponden al número de línea, empezando por la línea 0
      document.write("\n&nbsp\n");
    for (let j = 0; j < n - i; j++)
      // Los asteriscos que se deben escribir corresponden al número n menos el número de línea
      document.write("*");
    document.write("</p>");
  }
  return j;
}

let j = figura(n);
document.write(j);
