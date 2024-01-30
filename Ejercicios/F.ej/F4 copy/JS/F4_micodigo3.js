/*6. Escriba una función de JavaScript para encontrar el valor más alto en una matriz.
funcion[11,3,16,90] Devuelve 90
*/


function numMayor(matriz){
    let masGrande = 0;

    for(let i=0; i<matriz.length;i++){
        if(matriz[i] > masGrande){
            masGrande = matriz[i];
        }
    }
    return masGrande;
}

let matriz = [11, 3, 16, 90];

let resultado = numMayor(matriz);
document.write(resultado);