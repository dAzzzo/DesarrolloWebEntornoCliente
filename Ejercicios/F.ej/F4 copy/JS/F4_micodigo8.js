/*31. Escriba una función de JavaScript para eliminar un elemento específico de una
matriz.
Remueve ([2,4,5,9],5) Devuelve [2,4,9]
*/

function eliminarValor(matriz) {

    // Elimina el elemento en el índice 1 (valor 2) del array
    let matrizFinal = matriz.splice(1, 1);

    return matrizFinal;
}

let matriz = [1, 2, 3, 4, 5];

let matrizFinal = eliminarValor(matriz);
document.write("La matriz original es: [1,2,3,4,5]<br>");
document.write("La matriz cambiada es: " + matriz + "<br>");
document.write("El elemeto eliminado es: " + matrizFinal);