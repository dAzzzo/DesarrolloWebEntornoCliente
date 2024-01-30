/*Quitar los elementos duplicados de un array sin usar conversiones a conjuntos.
*/

function quitarElementos(id) {

    //Objeto de busqueda
    let buscador = new Map();

    //usamos una clave, valor, en este caso es el num y el nombre
    for (let [num, nombre] of id) {
        // Comprobmos si la clave ya está en el Map 'buscador'
        if (!buscador.has(num)) {
            // Si la clave no existe en 'buscador', marcarla como vista
            buscador.set(num, nombre);
        }
    }
    return buscador;
}

//Creamos un array cualquiera
let id = new Map([
    [4523, " Pepe<br>"],
    [4526, " Manuel<br>"],
    [6582, " José<br>"],
    [4526, " Manuel<br>"],
    [5553, " Paco"],
]);

let buscador = quitarElementos(id);

// Convierte el Map a un array para mostrarlo
let ResultadoArray = Array.from(buscador);


document.write("<br>El mapa final sin repeticiones es: <br> " + ResultadoArray);