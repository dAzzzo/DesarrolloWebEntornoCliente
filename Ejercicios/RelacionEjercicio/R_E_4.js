/*Quitar los elementos duplicados de un array con conjuntos
*/
function quitarElementos(id) {
    return [...new Set(id)];
}

//Creamos un array con algo repetido
let array = [1, 2, 2, 3, 4, 4, 5];
let arrayFinal = quitarElementos(array);

document.write("El resultado original es: " + array);
document.write("<br>El resultado final sera: " + arrayFinal); 
