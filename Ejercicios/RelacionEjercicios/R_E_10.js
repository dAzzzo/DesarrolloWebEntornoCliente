/*Escribe un programa JS para eliminar los elementos: 'null', '0', '""', 'false', 'undefined' and 'NaN' de un array.

Ejemplo entrada array: [NaN, 0, 15, false, -22, '',undefined, 47, null]

Resultado esperado: [15, -22, 47]
*/


   // Solicitamos al usuario ingresar una lista separada por comas

   let entradaUsuario = prompt("Ingrese una lista con los elementos separados por comas:");

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