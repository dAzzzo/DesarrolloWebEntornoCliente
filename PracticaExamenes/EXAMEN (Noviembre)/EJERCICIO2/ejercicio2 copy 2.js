/* Se pide utilizar la estructura map para almacenar la información sobre módulos impartidos en
segundo de modulo_buscado en el IES Mar de Cádiz (como mínimo debes incluir 4 módulos).  No están permitdas las
conversiones de tipos de mapas a otras estructuras.
Por ejemplo: ("DWEC", "Desarrollo Web en Entorno Cliente").
Añade la información con posterioridad a la creación de la estructura:
    a. Muestra cuántos módulos hay almacenados.
    b. Muestra contenido de la estructura.
    c. Devuelve las abreviaturas de todos los módulos guardados.
    d. Devuelve el nombre completo de todos los módulos.
    e. Consulta si está el módulo modulo_buscado.
    f. Si está, cambia el nombre completo del módulo añadiendo un 2 al final.
    g. Si está, elimínalo y vuelve a mostrar todos los módulos para comprobar el borrado.
*/

let modulos = new Map([
    ["DWECL", "Desarrollo Web en Entorno Cliente"],
    ["DWESE", "Desarrollo Web en Entorno Servidor"],
    ["DIWEB", "Diseño de Interfaces Web"],
    ["DAWEB", "Despliegue de Aplicaciones Web"]
]);

let cadena_respuesta = "a. Muestra cuántos módulos hay almacenados.\n\n";
cadena_respuesta += "Los módulos almacenados son: " + modulos.size;
console.log(cadena_respuesta);

cadena_respuesta = "b. Muestra contenido de la estructura.\n\n";
cadena_respuesta += "Contenido del mapa de módulos:";
for(let [abreviatura, nombre_completo] of modulos) 
cadena_respuesta += "\n\nAbreviatura: " + abreviatura + "\nNombre completo: " + nombre_completo;
console.log(cadena_respuesta);

cadena_respuesta = "c. Devuelve las abreviaturas de todos los módulos guardados.\n\n";
cadena_respuesta += "Abreviatura de los módulos:\n";
for(let[abreviatura, nombre_completo] of modulos)
cadena_respuesta += "\nAbreviatura: " + abreviatura;
console.log(cadena_respuesta);

cadena_respuesta = "d. Devuelve el nombre completo de todos los módulos.\n\n";
cadena_respuesta += "Nombre completo de los módulos:\n";
for(let[abreviatura, nombre_completo] of modulos)
cadena_respuesta += "\Nombre completo: " + nombre_completo;
console.log(cadena_respuesta);

let modulo_buscado = "DIWEB";
cadena_respuesta =  "e. Consulta si está el módulo " + modulo_buscado + "\n\n";
cadena_respuesta += "¿Existe " + modulo_buscado + " en el array?\n\n";
if(modulos.has(modulo_buscado))
cadena_respuesta += "Si existe el módulo " + modulo_buscado;
else
cadena_respuesta += "No existe el módulo " + modulo_buscado;
console.log(cadena_respuesta);

cadena_respuesta = "f. Si está, cambia el nombre completo del módulo añadiendo un 2 al final.\n\n";
if(modulos.has(modulo_buscado)){
    modulos.set(modulo_buscado, modulos.get(modulo_buscado).concat("2"));
    cadena_respuesta += "Se ha cambiado correctamente el nombre completo del módulo " + modulo_buscado + ". Ahora es: " + modulos.get(modulo_buscado);
}else{
    cadena_respuesta += "No se ha encontrado el módulo " + modulo_buscado;
}
console.log(cadena_respuesta);

cadena_respuesta = "g. Si está, elimínalo y vuelve a mostrar todos los módulos para comprobar el borrado.";
if(modulos.delete(modulo_buscado)){
    cadena_respuesta += "Se ha eliminado el módulo " + modulo_buscado + " correctamente. A continuación se muestran los módulos guardados.\n\n"
    for(let[abreviatura, nombre_completo] of modulos) 
    cadena_respuesta += "Abreviatura: " + abreviatura + "; Nombre completo: " + nombre_completo + ".\n";
}
else cadena_respuesta += "No se ha eliminado el módulo " + modulo_buscado + " dado que no existe.";
console.log(cadena_respuesta);





