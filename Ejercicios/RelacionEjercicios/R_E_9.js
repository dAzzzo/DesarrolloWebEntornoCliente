/*Lanzar dados y mostrar la salida de cada tirada en 2 input. En los input mostrar el más alto y el más bajo.
*/

function lanzarDados(cantidad) {

    let min = 13;
    let max = 0;

    for (let i = 1; i <= cantidad; i++) {
        let tirada1 = Math.floor(Math.random() * 6) + 1;
        let tirada2 = Math.floor(Math.random() * 6) + 1;

        let suma = tirada1 + tirada2;

        document.write("Esta es la tirada ", i, ": ", suma, "<br>");

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

let cantidad = prompt("Introduce la cantidad de veces que quieres lanzar los dados");

lanzarDados(cantidad);