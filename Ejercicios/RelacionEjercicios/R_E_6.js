/*Ahora de cada módulo se desea guardar su nombre, duración y 
alumnos matriculados (módulo, numAlumnos). Utiliza la estructura 
que sea más conveniente.
*/

// Crear un array de objetos para almacenar la información de los módulos
let modulos = [
    {
        nombre: "Informática",
        duracion: "8 semanas",
        numAlumnos: 30
    },
    {
        nombre: "Carpinteria",
        duracion: "10 semanas",
        numAlumnos: 25
    },
    {
        nombre: "Cocina",
        duracion: "2 semanas",
        numAlumno: 30
    }]

document.write("Primer módulo:<br> " + modulos[0].nombre + "<br>" + modulos[0].duracion + "<br>" + modulos[0].numAlumnos + "<br>");
document.write("<br>Segundo módulo:<br> " + modulos[1].nombre + "<br>" + modulos[1].duracion + "<br>" + modulos[1].numAlumnos + "<br>");
document.write("<br>Tercer módulo:<br> " + modulos[2].nombre + "<br>" + modulos[2].duracion + "<br>" + modulos[2].numAlumnos);