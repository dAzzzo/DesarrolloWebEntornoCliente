let min_letras_palabra = 6;
let min_palabras = 8;

// Función que verifica si una palabra introducida cumple la condición del ejercicio
function es_valida(palabra){
    return (palabra.length >= min_letras_palabra);
}

// Función que inicializa el array de palabras que se usará en el juego
function init_array_palabras(num_palabras){
    let arr_palabras = [];

    for(let i=0; i<num_palabras;i++){
        let palabra = prompt("Introduzca la palabra nº " + (i+1));

        while(!es_valida(palabra)){
            palabra = prompt("NO es valida");
        }
        console.log("Palabra nº " + (i+1));
        arr_palabras.push(palabra);
    }
    return arr_palabras;
}

// Función para comenzar el juego. Las alertas explican bien el procedimiento que se sigue...
function adivina_adivinador(){
    alert("Bienvenido al juego de adivina adivinador!\nEl juego consiste en introducir una serie de palabras, y luego adivinar cuál de ellas te presentamos.");
    alert("Por cierto... Abrir la consola es hacer trampa!!! >:C");

    let num_palabras = prompt("Primero, debes introducir cuántas palabras quieres introducir. Ten en cuenta que deben ser al menos " + min_palabras + "!");
    while(num_palabras < min_palabras){
        num_palabras = prompt("Ups! El número introducido no es mayor que " + min_palabras + "! Inténtalo de nuevo.");
    }
    console.log("Número de palabras a introducir: " + num_palabras + ".");

    alert("Ahora deberás introducir las palabras. Ten en cuenta que cada palabra deberá tener al menos " + min_letras_palabra + " letras!");
    let arr_palabras = init_array_palabras(num_palabras);

    alert("Muy bien... Todo listo! Ahora eligiremos una palabra al azar, y deberás adivinar cuál es de todas las que has introducido!\nNo te preocupes, si vemos que se te dificulta, te daremos pistas...");
    let palabra_elegida = arr_palabras[Math.floor(Math.random() * num_palabras)];
    console.log("Palabra elegida: " + palabra_elegida);
    let pistas = palabra_elegida.charAt(0);

    alert("Que comience el juego!!");
    let victoria = false;
    let i = 0;

    while(i < palabra_elegida.length - 1 && !victoria){
        let intento = prompt("La pista actual es..!\n" + pistas + "\nCuál crees que sea..?");
        console.log("Intento nº " + (i+1) + ": " + intento);

        if(intento == palabra_elegida) victoria = true;
        i++;
        pistas += palabra_elegida.charAt(i);
    }
    if(victoria)  alert("Felicidades, has ganado!");
    else alert("Ups... Se han acabado tus intentos...\nLa palabra correcta era: " + palabra_elegida + ".\nMejor suerte para la próxima..!");
}
// Ejecución de las funciones
adivina_adivinador();