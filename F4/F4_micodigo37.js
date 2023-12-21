/*6. Escriba una función de JavaScript para encontrar el valor más alto en una matriz.
funcion[11,3,16,90] Devuelve 90
*/

function numMayor(matriz){

let masGrande = matriz[0];

for (let i=0;i < matriz.length;i++){
    if (matriz[i] > masGrande);{
        //Vamos a encontrar un elemento más grande
        masGrande = matriz[i];
    }
}
return masGrande;

}
//Creamos el array
let matriz = [11,3,16,90];

let resultado = numMayor(matriz);
document.write("El elemento más grande de la matriz es: " + resultado);