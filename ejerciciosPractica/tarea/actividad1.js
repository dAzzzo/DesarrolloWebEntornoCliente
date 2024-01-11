// Crear un programa que permita ingresar el nombre de dos jugadoras y 
// dos listas con los puntajes de cada ronda de un juego separados por 
// espacio.Primero debe preguntarse el nombre de la jugadora 1, luego 
// sus puntajes, luego el nombre de la jugadora 2, luego sus puntajes.
// El programa debe comparar los valores de las listas uno a uno
// (el primero con el primero, el segundo con el segundo) sumando un 
// punto a la jugadora que tenga mayor puntaje en la ronda.Al finalizar, 
// mostrar quién gano y los puntajes finales.

// Ingrese nombre jugadora 1: Ada
// Ingrese puntajes de Ada: 5 6 3 1 8

// Ingrese nombre jugadora 2: Grace
// Ingrese puntajes de Grace: 8 2 4 2 3

// Resultado: 2 (Ada) vs 3 (Grace)
// Ganadora: Grace

// function es_int(puntaje) {
//     let arr_int = [];

//     for (let i = 0; i < puntaje; i++) {
//         let puntos = prompt("Introducimos la puntuación del jugador " + (i + 1) + ", la forma de expresarlo es la siguiente: [5 6 3 1 8]");

//         while (isNaN(puntos)) {
//             puntos = prompt("Ups, esto de aquí no es un número...");
//         }
//         console.log("Puntuacion del jugador " + (i + 1) + ": " + puntos);
//         // Convertimos la cadena de puntos separados por espacios en un array de números
//         let puntosArray = puntos.split(" ").map(Number);
//         arr_int.push(puntosArray);
//     }
//     return arr_int;
// }

// function es_int(puntaje2) {
//     let arr_int2 = [];

//     for (let i = 0; i < puntaje2; i++) {
//         let puntos2 = prompt("Introducimos la puntuación del jugador " + (i + 1) + ", la forma de expresarlo es la siguiente: [5 6 3 1 8]");

//         while (isNaN(puntos2)) {
//             puntos2 = prompt("Ups, esto de aquí no es un número...");
//         }
//         console.log("Puntuacion del jugador " + (i + 1) + ": " + puntos2);
//         // Convertimos la cadena de puntos separados por espacios en un array de números
//         let puntosArray2 = puntos2.split(" ").map(Number);
//         arr_int2.push(puntosArray2);
//     }
//     return arr_int2;
// }

// function compararArrays(puntaje, puntaje2) {
//     let ganadores1 = 0;
//     let ganadores2 = 0;

//     for (let i = 0; i < puntaje.length; i++) {
//         if (puntaje[i] > puntaje2[i]) {
//             ganadores1++;
//         } else if (puntaje2[i] > puntaje[i]) {
//             ganadores2++;
//         }
//     }
//     console.log("Resultado:" + ganadores1 + " (" + nombre + ") vs " + ganadores2 + " (" + nombre + ")");
// }

// alert("Bienvenido, Introduzca a dos participantes y su puntuación.\nPorfavor, no introduzca más de 5 números.");

// let nombre = prompt("Introduzca el nombre del primero jugador:");
// console.log("Jugador 1: " + nombre);

// let puntaje = prompt("Introduzca la puntuación del primero jugador:");
// while (puntaje.length > 5) {
//     puntaje = prompt("Ups, solo se permiten 5 números");
// }
// console.log("Puntuación del J1: " + puntaje + "\n\n");


// nombre = prompt("Introduzca el nombre del segundo jugador:");
// console.log("Jugador 2: " + nombre);

// let puntaje2 = prompt("Introduzca la puntuación del segundo jugador:");
// while (puntaje2.length > 5) {
//     puntaje2 = prompt("Ups, solo se permiten 5 números");
// }
// console.log("Puntuación del J2: " + puntaje2 + "\n\n");

// console.log("Ahora veremos quién es el ganador:");
// if(puntaje[0] > puntaje2[0]){
//     nombre++;
// }else{
    
// }

function obtenerPuntajes(nombre) {
    let puntajes = prompt(`Introduce los puntajes de ${nombre}, separados por espacios:`);
    let puntajesArray = puntajes.split(" ").map(Number);
    
    while (puntajesArray.length !== 5 || puntajesArray.some(isNaN)) {
        puntajes = prompt(`Error en los puntajes de ${nombre}. Introduce 5 números separados por espacios:`);
        puntajesArray = puntajes.split(" ").map(Number);
    }
    
    return puntajesArray;
}

let nombreJugadora1 = prompt("Ingrese el nombre de la jugadora 1:");
let puntajesJugadora1 = obtenerPuntajes(nombreJugadora1);

let nombreJugadora2 = prompt("Ingrese el nombre de la jugadora 2:");
let puntajesJugadora2 = obtenerPuntajes(nombreJugadora2);

let ganadora1 = 0;
let ganadora2 = 0;

for (let i = 0; i < puntajesJugadora1.length; i++) {
    if (puntajesJugadora1[i] > puntajesJugadora2[i]) {
        ganadora1++;
    } else if (puntajesJugadora2[i] > puntajesJugadora1[i]) {
        ganadora2++;
    }
}

console.log(`Resultado: ${ganadora1} (${nombreJugadora1}) vs ${ganadora2} (${nombreJugadora2})`);
if (ganadora1 > ganadora2) {
    console.log(`Ganadora: ${nombreJugadora1}`);
} else if (ganadora2 > ganadora1) {
    console.log(`Ganadora: ${nombreJugadora2}`);
} else {
    console.log("¡Empate!");
}
