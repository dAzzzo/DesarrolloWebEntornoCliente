/*8. Escriba un programa JavaScript en el que el programa tome un número entero
aleatorio entre 1 y 10, luego se le pedirá al usuario que ingrese un número
aproximado. Si la entrada del usuario coincide con el número de conjetura, el
programa mostrará un mensaje "Buen trabajo"; de lo contrario, mostrará un mensaje
"No coincide".
*/


let numRnd = parseInt((Math.random()*10+1));
console.log(numRnd);

let clave1 = "Ingresa un número aproximado: ";
let num = prompt(clave1);

if (numRnd == num){
    document.write("Buen Trabajo");
}else {
    document.write("No coincide");
}