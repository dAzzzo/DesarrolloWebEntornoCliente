/*Escribre una fincion que devuelva true si dos palabras que recibe como 
parametros contienen las mismas letras, aunque se encuentren en posicinones
distintas*/

let palabra1 = prompt("Escriba una palabra: ");
let palabra2 = prompt("Escriba una palabra y veamos si tienen las mismas letras que la anterior palabra elegida: ");

function comprobarPalabra(palabra1, palabra2) {

let resultado = true;

    let nuevaP1 = palabra1.toLowerCase().split('').sort().join('');
    let nuevaP2 = palabra2.toLowerCase().split('').sort().join('');

    if(nuevaP1 != nuevaP2){
        resultado = false;
    }

    return resultado;
}

let resultado = comprobarPalabra(palabra1, palabra2);
document.write(resultado);