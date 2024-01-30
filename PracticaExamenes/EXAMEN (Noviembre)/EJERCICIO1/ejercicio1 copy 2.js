/* Se pide un programa que pida un número n por teclado y devuelva en la página HTML un patrón de
asteriscos de manera que con n=5:
*****
 ****
  ***
   **
    *
*/

let n = prompt("Introduzca el número n deseado.");

for(let i = 0;  i<n;i++){
    document.write("<p>");
    for(let espacios = 0; espacios <i; espacios++)
        document.write('\n$nbsp\n');
    for(let j = 0; j < n - i; j++)
    document.write("*");
document.write("</p>");    
}