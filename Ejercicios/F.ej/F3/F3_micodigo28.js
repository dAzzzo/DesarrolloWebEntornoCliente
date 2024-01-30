/*4. Escriba una función de JavaScript para extraer un número específico de
caracteres de una cadena.
*/
function extraerCaracter() {

    //Pedimos los datos por pantalla
let frase = prompt("Ingrese una frase: ");
let num1 = parseInt(prompt("Ingrese desde donde quiere empezar a extraer..."));
let num2 = parseInt(prompt("Ingrese desde donde quiere acabar a extraer..."));

document.write("La frase original es: " + frase + "<br>");

let resultado = frase;

//Enseñamos por pantalla el resultado
document.write("La frase final sera: " + resultado.substring(num1, num2));


}

//LLamaos a la funcion para cuando recarges la pag se carge
extraerCaracter();