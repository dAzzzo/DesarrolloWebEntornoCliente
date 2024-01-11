// Crear un programa que dado un array 2d 
// de números, indique cuál es la suma de 
// una de sus columnas. El programa debe dar 
// la posibilidad de ingresar qué columna se 
// desea elegir. El array debe estar 
// guardado en una variable (no hace falta ingresarlo)
function sumaArray() {
    let arr = [
        [2, 7, 12, 1],
        [8, 23, 9],
        [9, 45, 7, 3],
        [22, 3, 24, 4]
    ];

    console.log(arr);
    let columna = prompt("Introduce el número de columna que deseas sumar:"); 
    let suma = 0;

    // Verificar que la columna ingresada sea válida
    if (columna <= arr[0].length) {
        for (let i = 0; i < arr.length; i++) {
            suma += arr[i][columna - 1];
        }
        console.log("La suma de la columna " + columna + " es: " + suma);
    } else {
        console.log("Columna inválida");
    }
    return suma;
}

let resultado = sumaArray();
console.log(resultado);
