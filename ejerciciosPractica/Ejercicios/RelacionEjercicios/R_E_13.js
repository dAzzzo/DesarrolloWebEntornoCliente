/*Crea un mapa que recoja los códigos postales y la localidad 
que corresponda. Rellena con al menos 5 entradas el mapa. Crea 
un menú que si el usuario teclea la opción 1 se realice la 
consulta si está un determinado código postal que el usuario 
inserta. Si selecciona la opción 2 que borre la entrada del 
código que el usuario requiera. Si marca 3 que liste todas las 
entradas. Si marca 4  que modifique el valor del código que el 
usuario pida. Y si marca 5 que salga del programa, en caso 
contrario pedirá nuevamente las opciones.
*/

 // Mapa de códigos postales y localidades

 let codigoPostalMapa = new Map();

 // Rellenamos el mapa con 5 entradas

 codigoPostalMapa.set("28001", "Madrid");
 codigoPostalMapa.set("08001", "Barcelona");
 codigoPostalMapa.set("41001", "Sevilla");
 codigoPostalMapa.set("46001", "Valencia");
 codigoPostalMapa.set("29001", "Málaga");
 codigoPostalMapa.set("11500", "El Puerto de Santa María");

 // Creamos el bucle principal que muestra el menú de opciones al usuario

 while (true) {

     let opcion = prompt("Elija una opción:\n1. Consultar un código postal\n2. Borrar un código postal\n3. Listar todos los códigos postales\n4. Modificar un código postal\n5. Salir");

     // Comprobamos si el usuario ha cancelado o seleccionado la opción "Salir"

     if (opcion === null || opcion === "5") {
         break;
     }

     // Procesamos la opción seleccionada por el usuario

     switch (opcion) {

         case "1":

             // Opción 1: Consultamos un código postal

             let codigoConsultar = prompt("Ingrese el código postal a consultar:");

             if (codigoPostalMapa.has(codigoConsultar)) {

                 document.write("Localidad para el código postal " + codigoConsultar + ": " + codigoPostalMapa.get(codigoConsultar) + "</br>");

             } else {

                 document.write("Código postal no encontrado.</br>");

             }

             break;

         case "2":

             // Opción 2: Borramos un código postal

             let codigoBorrar = prompt("Ingrese el código postal a borrar:");

             if (codigoPostalMapa.has(codigoBorrar)) {

                 codigoPostalMapa.delete(codigoBorrar);

                 document.write("Código postal " + codigoBorrar + " borrado.</br>");

             } else {

                 document.write("Código postal no encontrado, no se pudo borrar.</br>");

             }

             break;

         case "3":

             // Opción 3: Listamos todos los códigos postales

             document.write("Listado de códigos postales y localidades:</br>");

             for (let [codigo, localidad] of codigoPostalMapa) {

                 document.write("Código postal: " + codigo + ", Localidad: " + localidad + "</br>");

             }

             break;

         case "4":

             // Opción 4: Modificamos un código postal

             let codigoModificar = prompt("Ingrese el código postal a modificar:");

             if (codigoPostalMapa.has(codigoModificar)) {

                 let nuevaLocalidad = prompt("Ingrese la nueva localidad:");
                 codigoPostalMapa.set(codigoModificar, nuevaLocalidad);

                 document.write("Código postal " + codigoModificar + " modificado.</br>");

             } else {

                 document.write("Código postal no encontrado, no se pudo modificar.</br>");

             }
             break;

         case "5":

             // Opción 5: Salimos del programa

             document.write("Saliendo del programa.");

             break;

         default:

             // Opción no válida

             document.write("Opción no válida. Intente de nuevo.</br>");

             break;
     }
 }