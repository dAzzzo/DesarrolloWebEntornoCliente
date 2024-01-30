/*Crea una app q almacene en un array 10 elementos. Rellenalo con true o false.
Muestra por pantalla solo los true. No se  puede usar el bucle for
*/

let elementos = [true, false, true, false, true, false, true, false, true, false];

let resultado = elementos.indexOf(true);

while (resultado !== -1) {
    document.write("El número de elementos True será: " + (resultado + 1) + "<br>");
    resultado = elementos.indexOf(true, resultado + 1);
}


