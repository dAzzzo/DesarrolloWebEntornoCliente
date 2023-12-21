/*Crea una funcion que recia un array de 10 elementos, los rellene
con números aleatorios entre 1 y 100 y los ordene, de manera que 
aparezcan primero aquellos que terminan en 0
*/


function arrAleatorio() {

    let arr = new Array(10);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 100) + 1;;
    }


    // Separar números que terminan en 0 y los que no
    let terminanEnCero = arr.filter(num => num % 10 === 0);
    let noTerminanEnCero = arr.filter(num => num % 10 !== 0);

    // Concatenar los dos grupos, colocando primero los que terminan en 0
    let arrayOrdenado = terminanEnCero.concat(noTerminanEnCero);

    return arrayOrdenado;
}


let arrOrdenado = arrAleatorio();
document.write(arrOrdenado);