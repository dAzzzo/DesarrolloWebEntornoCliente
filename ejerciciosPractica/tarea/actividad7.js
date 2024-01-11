// Crear un programa que dado un array 
// 2d de números, indique cuál es el 
// mayor de ellos. El array debe estar 
// guardado en una variable (no hace falta ingresarlo)

function cualMayor() {
    let arr = [
        [2, 7, 12, 1],
        [8, 23],
        [9, 45, 7],
        [22, 3, 24, 4]
    ];

    let mayor = arr[0][0]; // Comenzar con el primer elemento como mayor

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > mayor) {
                mayor = arr[i][j];
            }
        }
    }

    return mayor;
}

let resultado = cualMayor();
console.log(resultado);
