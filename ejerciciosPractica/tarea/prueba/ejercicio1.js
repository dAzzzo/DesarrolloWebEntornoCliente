// Ejercicio de Gestión de Tareas
// Crea un programa que administre una lista de tareas. Cada 
// tarea estará representada por un objeto con dos propiedades: 
// nombre (el nombre de la tarea) y completada (un booleano que 
// indica si la tarea está completada o no).

// El programa deberá ser capaz de realizar las siguientes acciones:

// Mostrar información básica:

// Mostrar la cantidad total de tareas almacenadas en la lista.
// Mostrar el contenido completo de la lista de tareas, incluyendo 
// el nombre de la tarea y si está completada o no.
// Filtrar tareas:

// Mostrar solo las tareas pendientes.
// Mostrar solo las tareas que ya han sido completadas.
// Búsqueda y manipulación de tareas:

// Consultar si una tarea específica está en la lista.
// Si la tarea existe, marcarla como completada.
// Agregar una nueva tarea a la lista.
// Utiliza un arreglo para almacenar las tareas y objetos para 
// representar cada tarea. Implementa funciones o métodos que 
// realicen las operaciones mencionadas y muestra los resultados por consola.

let tareas = [
    { nombre: "Comprar víveres", completada: false },
    { nombre: "Hacer ejercicio", completada: true },
    { nombre: "Estudiar para el examen", completada: false },
    { nombre: "Llamar a María", completada: true }
];

let respuesta = "\na. Muestra cuántas tareas hay en la lista.\n";
respuesta += "Número de tareas en la lista: " + tareas.length;
console.log(respuesta);

respuesta = "\nb. Muestra el contenido completo de la lista de tareas, mostrando el nombre y si están completadas o no.\n";
respuesta += "Contenido completo de la lista de tareas: \n\n";
tareas.forEach((tarea, index) => {
    respuesta += "Tarea " + (index + 1) + ": " + tarea.nombre + " - Completada: " + (tarea.completada ? "Sí" : "No") + "\n";
});
console.log(respuesta);

respuesta = "\nc. Muestra solo las tareas pendientes.\n";
respuesta += "Tareas pendientes: \n\n";
let tareasPendientes = tareas.filter(tarea => !tarea.completada);
tareasPendientes.forEach((tarea, index) => {
    respuesta += "Tarea " + (index + 1) + ": " + tarea.nombre + "\n";
});
console.log(respuesta);

respuesta = "\nd. Muestra solo las tareas completadas.\n";
respuesta += "Tareas completadas: \n\n";
let tareasCompletadas = tareas.filter(tarea => tarea.completada);
tareasCompletadas.forEach((tarea, index) => {
    respuesta += "Tarea " + (index + 1) + ": " + tarea.nombre + "\n";
});
console.log(respuesta);

respuesta = "\ne. Consulta si está una tarea específica por su nombre.\n";
let tareaEspecifica = "Hacer ejercicio";
respuesta = "¿Existe la tarea '" + tareaEspecifica + "' en la lista de tareas?\n\n";
let existeTarea = tareas.some(tarea => tarea.nombre === tareaEspecifica);
respuesta += existeTarea ? "Sí, la tarea '" + tareaEspecifica + "' está en la lista." : "No, la tarea '" + tareaEspecifica + "' no está en la lista.";
console.log(respuesta);

respuesta = "\nf. Si la tarea existe, marca la tarea como completada.\n\n";
let indexTarea = tareas.findIndex(tarea => tarea.nombre === tareaEspecifica);
if (indexTarea !== -1) {
    tareas[indexTarea].completada = true;
    respuesta += "La tarea '" + tareaEspecifica + "' ha sido marcada como completada.\n";
} else {
    respuesta += "La tarea '" + tareaEspecifica + "' no ha sido encontrada en la lista.\n";
}
console.log(respuesta);

respuesta = "\ng. Agrega una nueva tarea a la lista.\n\n";
let nuevaTarea = { nombre: "Preparar presentación", completada: false };
tareas.push(nuevaTarea);
respuesta += "Se ha agregado la tarea '" + nuevaTarea.nombre + "' a la lista de tareas.\n";
console.log(respuesta);
