// Programa una funcion que reciba como parametros dos arrays de 4x4 y devuelva
// un tercer array relleno de ceros excepto en aquellas posiciones en las que los 
// dos priemeros arrays tienen valores iguales

let arr1 = [
    ["a", "a", "b", "b"],
    ["c", "b", "c", "a"],
    ["b", "a", "c", "b"],
    ["a", "c", "a", "c"]
];

let arr2 = [
    ["b", "a", "a", "c"],
    ["b", "b", "c", "a"],
    ["a", "b", "a", "a"],
    ["a", "c", "a", "b"]
];

function cambioArray(arr1, arr2) {
    //Inicializamos el array
    let arr3 = [];

    //Recorremmos cada fila del array
    for (let i = 0; i < arr1.length; i++) {
        //.push([]) se usa para agregar un array vacio dentro del arr3
        arr3.push([]);

        //recorremos los elemetos de la fila actual
        for (let j = 0; j < arr1[i].length; j++) {
            //comparamos posiciones
            if (arr1[i][j] === arr2[i][j]) {
                //si los elementos son iguales, añadimos ese elemento a la misma posición en arr3
                arr3[i][j] = arr1[i][j];
            } else {
                arr3[i][j] = 0;
            }
        }
    }
    return arr3;

}


function separar(separacion) {
    for (let i = 0; i < arr3.length; i++) {
        for (let j = 0; j < arr3[i].length; j++) {
            document.write(separacion[i][j] + " ");
        }
        document.write("<br>");
    }
}


let arr3 = cambioArray(arr1, arr2);
separar(arr3)