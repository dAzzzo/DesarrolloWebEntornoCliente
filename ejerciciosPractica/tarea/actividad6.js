// Crear un programa que permita 
// ingresar dos listas de valores 
// separados por espacio y muestre 
// en un mensaje si las listas son 
// iguales o no (mismos valores en mismo orden)

// Ingrese valores de lista 1: 10 25 6 33 48 105
// Ingrese valores de lista 2: 10 24 6 33 48 105

// Las listas no son iguales


// JSON.stringify() para comparar los arrays como cadenas de texto y así evaluar si tienen los mismos valores en el mismo orden.

function listasIguales(){
    lista1 = prompt("Introduzca la primera lista de números separados por espacios:");
    let listaArr1 = lista1.split(" ").map(Number);
    console.log(lista1);
    while(listaArr1.some(isNaN)){
        lista1 = prompt("Error, no me has proporcionado un número");
        listaArr1 = lista1.split(" ").map(Number);
    }

    lista2 = prompt("Introduzca la segunda lista de números separadas por espacios:");
    let listaArr2 = lista2.split(" ").map(Number);
    console.log(lista2);
    while(listaArr2.some(isNaN)){
        lista2 = prompt("Error, no me has proporcionado un número");
        listaArr2 = lista2.split(" ").map(Number);
    }

    if(JSON.stringify(listaArr1) === JSON.stringify(listaArr2)){
        console.log("Las listas son iguales");
    }else{
        console.log("Las listas no son iguales");
    }
}
let resultado = listasIguales();
console.log(resultado);