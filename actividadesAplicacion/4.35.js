/*Escribe una función que lance dos dados tantas veces 
como indique un parametro y devuelva el lanzamiento que ha 
obtenido la puntuacion ganadora
*/


function funcionTirada(numTirada) {

    let resultado = [];

    for (let i = 0; i < numTirada; i++) {
        let dado1 = Math.floor(Math.random() * 6) + 1;
        let dado2 = Math.floor(Math.random() * 6) + 1;


        if (dado1 === dado2) {
           document.write("Empate<br>");
           document.write("Resultado de los dados: Dado1 --> " + dado1 + " , Dado2 --> " + dado2 + "<br>");
        }else if ( dado1 < dado2){
            document.write("Dado 2 ES EL GANADOR!<br>");
            document.write("Resultado de los dados: Dado1 --> " + dado1 + " , Dado2 --> " + dado2 + "<br>");
        }else {
            document.write("Dado 1 ES EL GANADOR!<br>");
            document.write("Resultado de los dados: Dado1 --> " + dado1 + " , Dado2 --> " + dado2 + "<br>");
        }
    }
    return resultado;

}

let numTirada = parseInt(prompt("¿Cuántas veces deseas tirar los dados?: "));
let resultado = funcionTirada(numTirada);

