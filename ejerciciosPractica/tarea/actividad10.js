// Crear un programa que permita agregar listas de tareas y agruparlas 
// en categorias. El programa debe hacer lo siguiente:

// Permitir ingresar el nombre de una categoría
// Permitir ingresar una tarea
// Preguntar si desea ingresar otra tarea
// Si responde que si, volver al punto 2
// Si responde que no, preguntar si desea ingresar otra categoría
// Si responde que sí, volver al punto 1

// Si responde que no, terminar el programa En todo momento (en cada mensaje), 
// el programa debe mostrar las tareas agrupadas por categorías. Las categorías 
// deben diferenciarse de las tareas (se pueden usar divisores, emojis, espacios, etc)

// Lista de Tareas

// SUPERMERCADO
// ----------------------
// 👉 Comprar harina
// 👉 Comprar gaseosa
// 👉 Comprar aceite

// FACULTAD
// ----------------------
// 👉 Sacar apuntes
// 👉 Anotarse para final

// MICHI
// ----------------------
// 👉 Comprar comida
// 👉 Llevar a veterinaria 


function tareasTexto() {
    console.log('Lista de Tareas\n');
    alert('Vamos a realizar una lista:');

    const tasks = {};

    let addCategoria = true;

    while (addCategoria) {
        let categoria = prompt("Introduzca una categoría o escriba 'exit' para terminar:");

        if (categoria === 'exit' || categoria === null) {
            addCategoria = false;
            continue;
        }

        tasks[categoria] = [];

        let addTarea = true;

        while (addTarea) {
            let tarea = prompt(`Ingrese una tarea para la categoría "${categoria}" o escriba 'exit' para terminar:`);

            if (tarea === 'exit' || tarea === null) {
                addTarea = false;
                continue;
            }

            tasks[categoria].push(`👉 ${tarea}`);
        }
    }

    // Display tasks grouped by categories
    for (const categoria in tasks) {
        console.log(`\n${categoria}\n----------------------`);
        tasks[categoria].forEach(tarea => console.log(tarea));
    }
}

tareasTexto();

