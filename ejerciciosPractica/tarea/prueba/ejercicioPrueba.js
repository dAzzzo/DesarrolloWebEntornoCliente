// Se pide utilizar la estructura Map para almacenar la información sobre 
// libros disponibles en una biblioteca. Debes incluir al menos 4 
// libros con sus respectivas abreviaturas.

// Realiza las siguientes acciones utilizando métodos de Map:

// Muestra cuántos libros hay almacenados en la biblioteca.
// Muestra el contenido completo de la biblioteca, mostrando las abreviaturas y títulos de los libros.
// Devuelve las abreviaturas de todos los libros guardados.
// Devuelve los títulos completos de todos los libros guardados.
// Consulta si está un libro específico por su abreviatura.
// Si el libro existe, cambia su título añadiendo " (Edición Especial)" al final.
// Si el libro existe, elimínalo y muestra los libros restantes en la biblioteca.

// Utiliza métodos como size, has, get, set y delete para realizar estas operaciones.

let libro = new Map([
    ["HP", "Harry Potter"],
    ["PJ", "Percy Jackson"],
    ["MR", "Maze Runner"],
    ["JT", "Juego Tronos"]
]);

let respuesta = "\na. Muestra cuántos libros hay almacenados en la biblioteca.\n";
respuesta += "Número de módulos almacenados en la biblioteca: " + libro.size;
console.log(respuesta);

respuesta = "\nb. Muestra el contenido completo de la biblioteca, mostrando las abreviaturas y títulos de los libros.\n";
respuesta += "Contenido completo de la biblioteca: \n\n";
for (let [abreviatura, nombre_completo] of libro) {
    respuesta += "Abreviatura: " + abreviatura + ", Nombre completo: " + nombre_completo + "\n";
}
console.log(respuesta);

respuesta = "\nc. Devuelve las abreviaturas de todos los libros guardados.\n";
respuesta += "Abreviatura de los libros guardados: \n\n";
for (let [abreviatura, nombre_completo] of libro) {
    respuesta += "Abreviatura: " + abreviatura + "\n";
}
console.log(respuesta);

respuesta = "\nd. Devuelve los títulos de todos los libros guardados.\n";
respuesta += "Títulos de los libros guardados: \n\n";
for (nombre_completo of libro.values()) {
    respuesta += "Títulos: " + nombre_completo + "\n";
}
console.log(respuesta);

respuesta = "\ne. Consulta si está un libro específico por su abreviatura.\n";
let libro_especifico = "MR";
respuesta = "¿Existe el libro " + libro_especifico + "?\n\n";
if (libro.has(libro_especifico)) {
    respuesta += "Si existe el libro " + libro_especifico;
} else {
    respuesta += "No existe el libro " + libro_especifico;
}
console.log(respuesta);

respuesta = "\nf. Si el libro existe, cambia su título añadiendo  (Edición Especial) al final.\n\n";
if (libro.has(libro_especifico)) {
    // Si existe, utilizo el método set() para asignar un valor nuevo a dicha clave, que será el actual (obtenido con get()) concatenado con un 2 al final.
    libro.set(libro_especifico, libro.get(libro_especifico).concat(" (Edición Especial)"));
    respuesta += "Se ha cambiado el nombre del libro de " + libro_especifico + ". Ahora el nuevo nombre es " + libro.get(libro_especifico) + "\n";
} else {
    respuesta += "No se ha encontrado el módulo buscado " + libro_especifico + "\n";
}
console.log(respuesta);

respuesta = "\ng. Si el libro existe, elimínalo y muestra los libros restantes en la biblioteca.\n";
if (libro.delete(libro_especifico)) {
    respuesta += "Se ha eliminado el libro " + libro_especifico + " correctamente. A continuación se muestran los libros guardados: \n\n";
    for (let [abreviatura, nombre_completo] of libro)
        respuesta = "Abreviatura: " + abreviatura + ", Título: " + nombre_completo;
} else {
    respuesta += "No se ha eliminado el módulo " + libro_especifico;
} console.log(respuesta);