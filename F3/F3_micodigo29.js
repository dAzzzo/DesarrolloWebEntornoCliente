/*6. Escriba una función de JavaScript para ocultar direcciones de correo
electrónico y protegerlas de usuarios no autorizados.
console.log (protege_email (" rob_hood@example.com "));
" rob ... @ example.com "
*/

function extraerCaracter() {

    let mail = prompt("Ingrese un correo electrónico: ");

let posicion = mail.split("@");
let nombre = posicion[0];
let dominio = posicion[1];

let resultado = nombre.substring(0,4) + "...";

//Pasamos por pantalla
document.write(resultado + "@" + dominio);
 
}

//LLamaos a la funcion para cuando recarges la pag se carge
extraerCaracter();