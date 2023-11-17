//Ejercicio3


 // Solicitamos al usuario ingresar una lista separada por comas

 let valor1 = prompt("Ingrese 1 booleano:");
 let valor2 = prompt("Ingrese 1 booleano:");
 let valor3 = prompt("Ingrese 1 entero:");
 let valor4 = prompt("Ingrese 1 entero:");
 let valor5 = prompt("Ingrese 1 string:");
 let valor6 = prompt("Ingrese 1 string:");


//comprobamos cual de los dos es mayor
function mayorQue(valor5, valor6){

    //Lo usaremos para ver cual es más grande
    let comprobador;

   for(let i=0;i<valor5.length;i++){
        for(let j=0; j<valor6.length;j++){
            if(valor5<valor6){
                document.write("El valor primero es menor");
            }else{
                document.write("El segundo es mayor");
            }
        }
   }
   
}



 // Creamos la función para eliminar elementos no deseados del array

 function filtrarArray(array) {
     let resultado = [];
     for (let i = 0; i < array.length; i++) {
      let element = array[i];

         // Filtramos los elementos que no sean null, 0, una cadena vacía, false, undefined o NaN

         if (element !== null && element !== 0 && element !== "" && element !== false && element !== undefined && !Number.isNaN(element)) {
             resultado.push(element);
         }
     }
     return resultado;
 }

 // Convertimos la entrada del usuario en un array

 let entradaArray = entradaUsuario.split(",").map(function (item) {

     // Convertimos los valores en float

     return parseFloat(item);
 });

 // Filtramos el array utilizando la función filtrarArray

 let resultado = filtrarArray(entradaArray);

 // Mostramos el resultado en la página

 document.write("Array de entrada: [");
 for (let i = 0; i < entradaArray.length; i++) {
     document.write(entradaArray[i]);
     if (i < entradaArray.length - 1) {
         document.write(", ");
     }
 }
 document.write("]<br>");

 document.write("Resultado después de filtrar: [");
 for (let j = 0; j < resultado.length; j++) {
     document.write(resultado[j]);
     if (j < resultado.length - 1) {
         document.write(", ");
     }
 }
 document.write("]");
