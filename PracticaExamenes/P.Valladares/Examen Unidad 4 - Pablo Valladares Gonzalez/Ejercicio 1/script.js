//Cambiar estilo de la pagina y el boton
function cambiar() {
    if (document.getElementById("cuerpo").classList.contains("blanco")) {
        document.getElementById("cuerpo").classList.remove("blanco");
        document.getElementById("cuerpo").classList.add("oscuro");
        document.getElementById("cambiarEstilo").classList.remove("btn-dark");
        document.getElementById("cambiarEstilo").classList.add("btn-light");
    } else {
        document.getElementById("cuerpo").classList.remove("oscuro");
        document.getElementById("cuerpo").classList.add("blanco");
        document.getElementById("cambiarEstilo").classList.remove("btn-light");
        document.getElementById("cambiarEstilo").classList.add("btn-dark");
    }
}

//Crea un programa que al menos contenga una funcion que reciba como parametro un array con al menos 8 palabras
//posibles de longitud variable (las cuales se les pedira al usuario por teclado para poder crearlo).
//Una vez creado el array debes regularizar el array comprobando que todas las palabras son validas
//(tienen una longitud de al menos 6 caracteres) y las pondras en mayusculas; si no es valido deberias
//volver a introducir las palabras. En cada ejecucion del programa se obtiene una palabra del array aleatoria,
//para que el usuario la intenta adiviniar introduciendo una. Por cada intento sucesivo, el programa debe ir
//mostrando como pista la palabra de forma parcial, empezando con la primera letra y agregando una letra  a la vez.
//El programa debe terminar cuando se adivina la palabra ganando o cuando se muestran todas las letras de la misma perdiendo

//Pedimos que cuantas mas ademas de 8 quiere introducir
let cantidad = prompt("Introduce cuantas palabras ademas de las 8, quieres introducir");

//Sumamos esa cantidad a 8
cantidad = parseInt(cantidad) + 8;

//Creamos la funcion para crear un array con las palabras que nos pide
function añadirPalabras(cantidad) {
    //Creamos el array de palabras
    let palabras = [];
    //Hacemos un bucle para rellenar el array
    for (let i = 0; i < cantidad; i++) {
        palabras[i] = prompt("Introduce la palabra numero " + (i + 1) + " de mas de 6 caracteres");
    }

    //Devolvemos el array
    return palabras;
}

//Creamos la funcion para validar las palabras
function validarPalabras(array) {
    //Hacemos un bucle de la longitud del array para validar
    for (let i = 0; i < array.length; i++) {
        //Si es mas corto de 6 devolvemos false
        if (array[i].length < 5) {
            return false;
        } else {
            //Si no es mas corto de 6 lo convertimos en mayusculas
            array[i].toUpperCase;
        }
    }

    //Devolvemos el array
    return array;
}

//Usamos la funcion
palabras = añadirPalabras(cantidad);

//Hacemos el bucle de comprobacion
do {
    //Si no es valido hacemos que repita el introducir palabras
    if (validarPalabras(palabras) == false) {
        palabras = añadirPalabras(cantidad);
    }
} while (validarPalabras(palabras) == false);

//Funcion principal
function ahorcado(palabras) {
    //Creamos las variables que usaremos para escoger la palabra
    let decidirPalabra = Math.floor(Math.random() * palabras.length);
    let palabraAdivinar = palabras[decidirPalabra];
    //Creamos las variables que usaremos para jugar
    let contador = 0;
    let adivinar = "";
    let pista = "";

    //Bucle principal
    console.log("Adivina la palabra o mueres!! jajaja :)");
    do {
        //Pedimos una palabra
        adivinar = prompt("Que palabra crees que es?");

        //Si no es la misma palabra mostramos la pista y sumamos el contador
        if (adivinar != palabraAdivinar) {
            //Añadimos a pista el caracter que corresponde al contador
            pista += palabraAdivinar.charAt(contador);
            //Mostrmoas la pista
            console.log(pista);
            //Sumamos el contador
            contador++;
        }
    } while (contador < palabraAdivinar.length && adivinar != palabraAdivinar);
    //En caso de que el contador llegue al maximo perdemos
    if (contador == palabraAdivinar.length) {
        console.log("Has perdido");
        //En caso de que lo hayamos adivinado ganamos
    } else {
        console.log("Has ganado!!");
    }
}

ahorcado(palabras);
