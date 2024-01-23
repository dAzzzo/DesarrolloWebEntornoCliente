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

//Creamos los mapas
let modulos = new Map([
    ["DWECL", "Desarrollo Web en Entorno Cliente"],
    ["DWESE", "Desarrollo Web en Entorno Servidor"],
    ["DIWEB", "Diseño de Interfaces Web"],
    ["DAWEB", "Despliegue de Aplicaciones Web"]]);

//Informacion pedida
let respuesta = "a. Muestra cuántos módulos hay almacenados.\n\n";
//Comprobamos su tamaño
respuesta += "Número de modulos almacenados: " + modulos.size;
console.log(respuesta);

respuesta = "b. Muestra contenido de la estructura.\n\n";
respuesta += "Mapa de modulos:\n\n";
//Bucle que recorre el mapa sabiendo que son arrays
for (let [abreviatura, nCompleto] of modulos)
    respuesta += "Abreviatura: " + abreviatura + ", Nombre completo: " + nCompleto + ".\n";
console.log(respuesta);

respuesta = "c. Devuelve las abreviaturas de todos los módulos guardados.\n\n";
for (let [abreviatura, nCompleto] of modulos)
    respuesta += "Abreviatura: " + abreviatura + ".\n";
console.log(respuesta);
// keys() devuelve iterativo conteniendo las claves del mapa, en este caso las abreviaturas
// for (abreviatura of modulos.keys()) cadena_respuesta += abreviatura + "\n";
// console.log(cadena_respuesta);

respuesta = "d. Devuelve el nombre completo de todos los módulos.\n\n";
for (let [abreviatura, nCompleto] of modulos)
    respuesta += "Nombre completo: " + nCompleto + ".\n";
console.log(respuesta);
// values() por otro lado devuelve el contenido o valor de las claves
// for (nombre_completo of modulos.values()) cadena_respuesta += nombre_completo + "\n";
// console.log(cadena_respuesta);

respuesta = "e. Consulta si está el módulo modulo_buscado.\n\n";
//Creamos la variable 
let modulo_buscado = "DAWEB";
respuesta += "Existe el módulo " + modulo_buscado + "?\n\n";
// has() devuelve true si existe un elemento con la clave indicada
if (modulos.has(modulo_buscado)) {
    respuesta += "Si existe el modulo " + modulo_buscado + "\n";
} else {
    respuesta += "No existe el modulo " + modulo_buscado + "\n";
} console.log(respuesta);

respuesta = " f. Si está, cambia el nombre completo del módulo añadiendo un 2 al final.\n\n";
if (modulos.has(modulo_buscado))
    //Si esta usamos set() para asignar un valor
    modulos.set(modulo_buscado, modulos.get(modulo_buscado).concat("2"));
respuesta += "Se ha cambiado el nombre de " + modulo_buscado + " a " + modulos.get(modulo_buscado);
console.log(respuesta);

respuesta = "g. Si está, elimínalo y vuelve a mostrar todos los módulos para comprobar el borrado.";
respuesta += "Nuevo mapa de modulos:\n\n";
//Bucle que recorre el mapa sabiendo que son arrays
for (let [abreviatura, nCompleto] of modulos)
    respuesta += "Abreviatura: " + abreviatura + ", Nombre completo: " + nCompleto + ".\n";
console.log(respuesta);
