// Se requiere implementar un juego para adivinar un número secreto. Sigue las instrucciones a continuación:

// El juego comienza con un saludo de bienvenida.
// Se pide al jugador introducir el rango máximo para el número secreto.
// Se genera un número aleatorio entre 1 y el número ingresado como rango máximo.
// El juego le pide al jugador adivinar el número.
// El juego proporciona pistas sobre si el número ingresado por el jugador es mayor o menor que el número secreto.
// El jugador tiene un número limitado de intentos para adivinar el número secreto.
// Al finalizar el juego, se muestra si el jugador adivinó correctamente o no, junto con el número secreto.

alert("Bienvenido, en este juego vas a probar tu suerte para intentar adivinar un número. Buena suerte");
alert("No vale mirar en la consola, eso sería hacer trampa :(");

let rangoMaximo = prompt("Introduce el rango máximo para el número secreto: ");

let numeroAleatorio = Math.floor(Math.random() * rangoMaximo) + 1;
console.log("El número secreto es: " + numeroAleatorio);

alert("Ahora por favor, intenta adivinar el número secreto: ");
let intentos = 5;
let pista = "¡Adivina el número! (Tienes " + intentos + " intentos)";

while (intentos > 0) {
    let intentos = prompt(pista);
    let intentosAleatorios = parseInt(intentos);

    if (intentosAleatorios === numeroAleatorio) {
        alert("¡Felicidades! Has adivinado el número secreto: " + numeroAleatorio);
        break;
    } else if (intentosAleatorios < numeroAleatorio) {
        mensajePista = "El número secreto es mayor. Intenta de nuevo. (Te quedan " + (intentos - 1) + " intentos)";
    } else {
        mensajePista = "El número secreto es menor. Intenta de nuevo. (Te quedan " + (intentos - 1) + " intentos)";
    }
    intentos--;
}
if (intentos === 0) {
    alert("¡Se acabaron tus intentos! El número secreto era: " + numeroSecreto);
}